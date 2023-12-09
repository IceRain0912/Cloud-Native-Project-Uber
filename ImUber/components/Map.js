import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAPS_API_KEY} from '@env';
import * as Location from 'expo-location';
import styles from '../components/styles';
import {View, Text} from 'react-native';

const Map = ({origin, destination}) => {
  const mapRef = useRef(null);
  const [travelTimeInfo, setTravelTimeInfo] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentLocationDescription, setCurrentLocationDescription] =
    useState(null);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const {status} = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
          const location = await Location.getCurrentPositionAsync({});
          console.log(location);
          setCurrentLocation(location.coords);

          // Use reverse geocoding to get the location description
          const reverseGeocode = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });

          // The result is an array, and you can extract the formatted address
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

    getLocation();
  }, []);

  useEffect(() => {
    if (!origin || !destination || !currentLocation) return;

    const markers = ['origin', 'destination', 'currentLocation'];

    mapRef.current?.fitToSuppliedMarkers(markers, {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
    });
  }, [origin, destination, currentLocation]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      setTravelTimeInfo(data.rows[0].elements[0]);
    };

    getTravelTime();
  }, [origin, destination, GOOGLE_MAPS_API_KEY]);

  return (
    <MapView
      ref={mapRef}
      initialRegion={{
        latitude: 25.017,
        longitude: 121.5397,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
      mapType="mutedStandard"
      style={{flex: 1}}>
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

      {currentLocation && (
        <Marker
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
          strokeColor="green" // You can use a different color or style
          lineDashPattern={[0]}
        />
      )}

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

      {travelTimeInfo && (
        <Marker
          coordinate={{
            latitude: (origin.location.lat + destination.location.lat) / 2,
            longitude: (origin.location.lng + destination.location.lng) / 2,
          }}>
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>
              Distance: {travelTimeInfo.distance.text}
            </Text>
            <Text style={styles.infoText}>
              Duration: {travelTimeInfo.duration.text}
            </Text>
          </View>
        </Marker>
      )}
    </MapView>
  );
};

export default Map;
