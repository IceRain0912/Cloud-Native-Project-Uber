import React, {useEffect, useRef, useState} from 'react';
import {View, Text} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import * as Location from 'expo-location';
import styles from '../components/styles';

const EDGE_PADDING = {top: 50, right: 50, bottom: 50, left: 50};
const ANIMATION_DURATION = 500;
const INITIAL_REGION = {
  latitude: 25.017,
  longitude: 121.5397,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const Map = ({origin, destination}) => {
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

    const markers = ['origin', 'destination', 'currentLocation'];
    mapRef.current?.fitToSuppliedMarkers(markers, {edgePadding: EDGE_PADDING});
  };

  // Fetch travel time information using Google Distance Matrix API
  const getTravelTimeOD = async () => {
    if (!origin || !destination) return;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setTravelTimeInfoOD(data.rows[0].elements[0]);
  };

  // Fetch travel time information for route from current location to origin
  const getTravelTimeCO = async () => {
    if (!origin || !currentLocation) return;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${currentLocation.latitude},${currentLocation.longitude}&destinations=${origin.location.lat},${origin.location.lng}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    setTravelTimeInfoCO(data.rows[0].elements[0]);
  };

  // Animate to the current location with a marker animation
  // const animateToCurrentLocation = () => {
  //   if (currentLocation && currentLocationMarkerRef.current) {
  //     currentLocationMarkerRef.current.animateMarkerToCoordinate(
  //       currentLocation.latitude,
  //       currentLocation.longitude,
  //       ANIMATION_DURATION,
  //     );
  //   }
  // };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    fitToMarkers();
  }, [origin, destination, currentLocation]);

  useEffect(() => {
    getTravelTimeOD();
  }, [origin, destination, GOOGLE_MAPS_API_KEY]);

  useEffect(() => {
    getTravelTimeCO();
  }, [origin, currentLocation, GOOGLE_MAPS_API_KEY]);

  // useEffect(() => {
  //   animateToCurrentLocation();
  // }, [currentLocation]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={INITIAL_REGION}
      mapType="mutedStandard"
      style={{flex: 1}}>
      {/* MapViewDirections for route between origin and destination */}
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_API_KEY}
          strokeWidth={3}
          strokeColor="blue"
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

      {/* Marker for displaying travel time information */}
      {travelTimeInfoOD && (
        <Marker
          coordinate={{
            latitude: (origin.location.lat + destination.location.lat) / 2,
            longitude: (origin.location.lng + destination.location.lng) / 2,
          }}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Distance: {travelTimeInfoOD.distance.text}
            </Text>
            <Text style={styles.infoText}>
              Duration: {travelTimeInfoOD.duration.text}
            </Text>
          </View>
        </Marker>
      )}

      {/* Marker for displaying travel time information between current location and origin */}
      {travelTimeInfoCO && (
        <Marker
          coordinate={{
            latitude: (currentLocation.latitude + origin.location.lat) / 2,
            longitude: (currentLocation.longitude + origin.location.lng) / 2,
          }}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Distance: {travelTimeInfoCO.distance.text}
            </Text>
            <Text style={styles.infoText}>
              Duration: {travelTimeInfoCO.duration.text}
            </Text>
          </View>
        </Marker>
      )}
    </MapView>
  );
};

export default Map;
