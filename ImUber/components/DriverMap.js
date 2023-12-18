import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_API_KEY } from "@env";
import * as Location from "expo-location";
import styles from "../components/styles";

const EDGE_PADDING = { top: 50, right: 50, bottom: 50, left: 50 };
const INITIAL_REGION = {
  latitude: 25.017,
  longitude: 121.5397,
  latitudeDelta: 0.005,
  longitudeDelta: 0.005,
};

const DriverMap = ({ onMapValues }) => {
  //Route From api
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [stops, setStops] = useState(null);

  useEffect(() => {
    setOrigin({
      location: {
        lat: 24.801850638002016,
        lng: 120.97158829773566,
      },
      description: "新竹火車站",
    });

    setDestination({
      location: {
        lat: 24.7688348955981,
        lng: 121.01425942142271,
      },
      description: "台灣積體電路製造十二廠P7",
    });

    setStops([
      {
        location: {
          lat: 24.808392574136747,
          lng: 121.04024422909944,
        },
        description: "新竹高鐵站",
      },
      {
        location: {
          lat: 24.797096328506978,
          lng: 120.99648863750419,
        },
        description: "國立清華大學",
      },
      {
        location: {
          lat: 24.784660852606194,
          lng: 120.99565928094843,
        },
        description: "國立交通大學",
      },
      {
        location: {
          lat: 24.808567893350247,
          lng: 120.96931322128688,
        },
        description: "新竹市政府",
      },
      {
        location: {
          lat: 24.810079020549633,
          lng: 120.97518554046995,
        },
        description: "新竹巨城購物中心",
      },
    ]);
  }, []);

  // Inner values
  const mapRef = useRef(null);
  const currentLocationMarkerRef = useRef(null);
  const [travelTimeInfoOD, setTravelTimeInfoOD] = useState(null);
  const [travelTimeInfoCD, setTravelTimeInfoCD] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const [currentLocationDescription, setCurrentLocationDescription] =
    useState(null);
  // Sort stops by distance from origin to destination
  const [sortedStops, setSortedStops] = useState([]);

  // Fetch current location and description using Expo Location API
  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status === "granted") {
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
        console.log("Location permission not granted");
      }
    } catch (error) {
      console.error("Error getting location:", error);
    }
  };

  // Fit the map to markers and animate to the region containing all markers
  const fitToMarkers = () => {
    if (!origin || !destination || !currentLocation) return;

    const stopMarkers = stops.map((stop, index) => `stop-${index}`);
    const markers = [
      "origin",
      "destination",
      "currentLocation",
      ...stopMarkers,
    ];
    // console.log(markers);
    mapRef.current?.fitToSuppliedMarkers(markers, {
      edgePadding: EDGE_PADDING,
    });
  };

  // Fetch travel time information using Google Distance Matrix API
  const getTravelTimeOD = async () => {
    if (!origin || !destination || !sortedStops) return;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${
      origin.location.lat
    },${origin.location.lng}&destinations=${destination.location.lat},${
      destination.location.lng
    }&waypoints=optimize:true|${sortedStops
      .map((stop) => `${stop.location.lat},${stop.location.lng}`)
      .join("|")}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data.rows[0].elements);

    setTravelTimeInfoOD(data.rows[0].elements[0]);
  };

  // Fetch travel time information for route from current location to origin
  const getTravelTimeCD = async () => {
    if (!origin || !currentLocation) return;

    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${currentLocation.latitude},${currentLocation.longitude}&destinations=${destination.location.lat},${destination.location.lng}&key=${GOOGLE_MAPS_API_KEY}`;
    const response = await fetch(url);
    // console.log(response);
    const data = await response.json();
    // console.log(data.rows[0].elements[0]);

    setTravelTimeInfoCD(data.rows[0].elements[0]);
  };

  useEffect(() => {
    if (origin && destination && stops.length > 0) {
      const url = `https://maps.googleapis.com/maps/api/directions/json?units=metric&origin=${
        origin.description
      }&destination=${destination.description}&waypoints=optimize:true|${stops
        .map((stop) => `${stop.location.lat},${stop.location.lng}`)
        .join("|")}&key=${GOOGLE_MAPS_API_KEY}`;

      const getSortedStops = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();

          if (data.routes && data.routes.length > 0) {
            const sortedStops = data.routes[0].waypoint_order.map(
              (index) => stops[index]
            );
            setSortedStops(sortedStops);
          } else {
            console.error(
              "Invalid response from the Directions API:",
              data.error_message
            );
          }
        } catch (error) {
          console.error("Error fetching sorted stops:", error);
        }
      };

      getSortedStops();
    }
  }, [stops]);

  useEffect(() => {
    getLocation();

    // Set up an interval to call getLocation every, for example, 5000 milliseconds (5 seconds)
    const locationInterval = setInterval(() => {
      getLocation();
    }, 5000);

    // Clear the interval when the component is unmounted or no longer needed
    return () => clearInterval(locationInterval);
  }, []);

  useEffect(() => {
    // Ensure that current location and sorted stops are fetched before calling fitToMarkers
    if (currentLocation && origin && destination && sortedStops.length > 0) {
      fitToMarkers();
    }
  }, [origin, destination, currentLocation, sortedStops]);

  useEffect(() => {
    getTravelTimeOD();
  }, [origin, destination, sortedStops, GOOGLE_MAPS_API_KEY]);

  useEffect(() => {
    getTravelTimeCD();
  }, [destination, currentLocation, GOOGLE_MAPS_API_KEY]);

  useEffect(() => {
    // Check if all travel time information is available
    if (travelTimeInfoCD && travelTimeInfoOD) {
      // Set up an interval for continuous updates
      const intervalId = setInterval(() => {
        // Update values dynamically
        const mapValues = {
          CurToDes: {
            distance: travelTimeInfoCD.distance.text,
            duration: travelTimeInfoCD.duration.text,
          },
          OrgToDes: {
            distance: travelTimeInfoOD.distance.text,
            duration: travelTimeInfoOD.duration.text,
          },
        };

        // Call the callback function with the updated values
        onMapValues(mapValues);
      }, 1000); // Update every 1000 milliseconds

      // Clear the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }

    // If any travel time information is not available, do nothing
  }, [travelTimeInfoCD, travelTimeInfoOD, onMapValues]);

  return (
    <>
      <MapView
        ref={mapRef}
        initialRegion={INITIAL_REGION}
        mapType="mutedStandard"
        style={{ flex: 4 / 5 }}
      >
        {/* MapViewDirections for route between origin and destination */}
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            waypoints={sortedStops.map((stop) => ({
              latitude: stop.location.lat,
              longitude: stop.location.lng,
            }))}
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

      {/* Travel time info */}
      {travelTimeInfoCD && travelTimeInfoOD && (
        <View style={{ flex: 1 / 5 }}>
          <Text style={styles.infoContainer}>
            Origin to Destination: {travelTimeInfoOD.distance.text},{" "}
            {travelTimeInfoOD.duration.text}
          </Text>
          <Text style={styles.infoContainer}>
            Current Location to Destination: {travelTimeInfoCD.distance.text},{" "}
            {travelTimeInfoCD.duration.text}
          </Text>
        </View>
      )}
    </>
  );
};

export default DriverMap;
