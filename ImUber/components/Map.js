import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import * as Location from 'expo-location';
import styles from '../components/styles';

const EDGE_PADDING = {top: 50, right: 50, bottom: 50, left: 50};
// const ANIMATION_DURATION = 500;
const INITIAL_REGION = {
  latitude: 25.017,
  longitude: 121.5397,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const Map = ({origin, destination, stops}) => {
  const mapRef = useRef(null);
  const currentLocationMarkerRef = useRef(null);
  const [travelTimeInfoOD, setTravelTimeInfoOD] = useState(null);
  const [travelTimeInfoCO, setTravelTimeInfoCO] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentLocationDescription, setCurrentLocationDescription] =
    useState(null);

  // Fetch current location and description using Expo Location API
  const getLocation = async () => {
    try {
      const {status} = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const location = await Location.getCurrentPositionAsync({});
        setCurrentLocation(location.coords);

        // Use reverse geocoding to get the location description
        const reverseGeocode = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });

        if (reverseGeocode.length > 0) {
          setCurrentLocationDescription(reverseGeocode[0].name);
        }
      } else {
        console.log('Location permission not granted');
      }
    } catch (error) {
      console.error('Error getting location:', error);
    }
  };

  // Fit the map to markers and animate to the region containing all markers
  const fitToMarkers = () => {
    if (!origin || !destination || !currentLocation) return;

    const stopMarkers = stops.map((stop, index) => `stop-${index}`);
    const markers = [
      'origin',
      'destination',
      'currentLocation',
      ...stopMarkers,
    ];
    // console.log(markers);
    mapRef.current?.fitToSuppliedMarkers(markers, {edgePadding: EDGE_PADDING});
  };

  // Fetch travel time information using Google Distance Matrix API
  const getTravelTimeOD = async () => {
    if (!origin || !destination || !sortedStops) return;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${
      origin.location.lat
    },${origin.location.lng}&destinations=${destination.location.lat},${
      destination.location.lng
    }&waypoints=optimize:true|${sortedStops
      .map(stop => `${stop.location.lat},${stop.location.lng}`)
      .join('|')}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    console.log(data.rows[0].elements);

    setTravelTimeInfoOD(data.rows[0].elements[0]);
  };

  // Fetch travel time information for route from current location to origin
  const getTravelTimeCO = async () => {
    if (!origin || !currentLocation) return;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${currentLocation.latitude},${currentLocation.longitude}&destinations=${origin.location.lat},${origin.location.lng}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    console.log(data.rows[0].elements[0]);

    setTravelTimeInfoCO(data.rows[0].elements[0]);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fitToMarkers();
  }, [origin, destination, currentLocation, stops]);

  useEffect(() => {
    getTravelTimeOD();
  }, [origin, destination, sortedStops, GOOGLE_MAPS_API_KEY]);

  useEffect(() => {
    getTravelTimeCO();
  }, [origin, currentLocation, GOOGLE_MAPS_API_KEY]);

  // Sort stops by distance from origin to destination
  const [sortedStops, setSortedStops] = useState([]);

  useEffect(() => {
    if (origin && destination && stops.length > 0) {
      const url = `https://maps.googleapis.com/maps/api/directions/json?units=metric&origin=${
        origin.description
      }&destination=${destination.description}&waypoints=optimize:true|${stops
        .map(stop => `${stop.location.lat},${stop.location.lng}`)
        .join('|')}&key=${GOOGLE_MAPS_API_KEY}`;

      const getSortedStops = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.routes && data.routes.length > 0) {
            const sortedStops = data.routes[0].waypoint_order.map(
              index => stops[index],
            );
            setSortedStops(sortedStops);
          } else {
            console.error(
              'Invalid response from the Directions API:',
              data.error_message,
            );
          }
        } catch (error) {
          console.error('Error fetching sorted stops:', error);
        }
      };

      getSortedStops();
    }
  }, [stops]);

  return (
    <>
      <MapView
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        mapType="mutedStandard"
        style={{flex: 4 / 5}}>
        {/* MapViewDirections for route between origin and destination */}
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            waypoints={sortedStops.map(stop => ({
              latitude: stop.location.lat,
              longitude: stop.location.lng,
            }))}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="blue"
            lineDashPattern={[0]}
          />
        )}

        {/* MapViewDirections for route from current location to origin */}
        {currentLocation && origin && (
          <MapViewDirections
            origin={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            destination={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="green"
            lineDashPattern={[0]}
          />
        )}

        {/* Marker for current location */}
        {currentLocation && (
          <Marker
            ref={currentLocationMarkerRef}
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Current Location"
            identifier="currentLocation"
            description={currentLocationDescription}
            pinColor="purple"
          />
        )}

        {/* Markers for origin and destination */}
        {origin && (
          <Marker
            coordinate={{
              latitude: origin.location.lat,
              longitude: origin.location.lng,
            }}
            title="Origin"
            identifier="origin"
            description={origin.description}
            pinColor="green"
          />
        )}

        {destination && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Destination"
            identifier="destination"
            description={destination.description}
            pinColor="red"
          />
        )}

        {/* Markers for stops */}
        {sortedStops.map((stop, index) => (
          <Marker
            key={`stop-${index}`}
            coordinate={{
              latitude: stop.location.lat,
              longitude: stop.location.lng,
            }}
            title={`Stop ${index + 1}`}
            identifier={`stop-${index}`}
            description={stop.description}
            pinColor="orange"
          />
        ))}
      </MapView>
      {travelTimeInfoCO && travelTimeInfoOD && (
        <View style={{flex: 1 / 5}}>
          <Text style={styles.infoContainer}>
            Current Location to Origin: {travelTimeInfoCO.distance.text},{' '}
            {travelTimeInfoCO.duration.text}
          </Text>
          <Text style={styles.infoContainer}>
            Origin to Destination: {travelTimeInfoOD.distance.text},{' '}
            {travelTimeInfoOD.duration.text}
          </Text>
          {/* <Text>abc</Text> */}
        </View>
      )}
    </>
  );
};

export default Map;
