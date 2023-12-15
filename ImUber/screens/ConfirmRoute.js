import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../components/styles";
import DriverMap from "../components/DriverMap";

const ConfirmRoute = ({ navigation }) => {
  const [distance, setDistance] = useState(null);
  const [time, setTime] = useState(null);
  // Get the current date and time
  const currentDate = new Date();

  // Format the date as needed (e.g., "MM/DD/YYYY HH:mm:ss")
  const formattedDate = `${
    currentDate.getMonth() + 1
  }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  const formattedTime = `${currentDate.getHours()}:${
    currentDate.getMinutes() + parseInt(time)
  }`;

  const cancelRide = () => {
    navigation.navigate("Main");
  };

  const startMatching = () => {
    navigation.navigate("DriverTrackRide");
  };

  const handleMapValues = (values) => {
    setDistance(values.OrgToDes.distance);
    setTime(values.OrgToDes.duration);
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Ride Info</Text>
          <View>
            <Text style={styles.text}>
              Date: {formattedDate}, Time: {formattedTime}
            </Text>
            <Text style={styles.text}>Distance: {distance}</Text>
            <Text style={styles.text}>Estimated Time: {time}</Text>
            {/* <Text style={styles.text}>Pessenger</Text> */}
          </View>
        </View>
        {/* <View>
          <Text style={styles.text}>show route on the map</Text>
        </View> */}
        <View style={styles.list}>
          <Text style={styles.text}>Fare</Text>
          <Text style={styles.text}>${20} / per km</Text>
        </View>
        <View style={styles.buttonGroup}>
          <PrimaryButton label={"Start Matching"} onPress={startMatching} />
          <SecondaryButton label={"Cancel ride"} onPress={cancelRide} />
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <DriverMap onMapValues={handleMapValues} />
      </View>
    </>
  );
};

export default ConfirmRoute;
