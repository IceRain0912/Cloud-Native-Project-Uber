import React, {useEffect, useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import tailwind from 'tailwind-react-native-classnames';

export const GOOGLE_MAPS_API_KEY = '';

const Map = ({origin, destination}) => {
  const mapRef = useRef(null);
  const [travelTimeInfo, setTravelTimeInfo] = useState(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50},
    });
  }, [origin, destination]);

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
    <>
      <MapView
        ref={mapRef}
        initialRegion={{
          latitude: 25.017,
          longitude: 121.5397,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        mapType="mutedStandard"
        style={tailwind`flex-1`}>
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

        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          identifier="origin"
        />

        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          identifier="Destination"
        />
      </MapView>
    </>
  );
};

export default Map;
