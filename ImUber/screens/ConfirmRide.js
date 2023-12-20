import { View, Text, TextInput, Linking } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../components/styles";
import Map from "../components/Map";

const ConfirmRide = ({ navigation }) => {
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

  // const payTheFare = () => {
  //   navigation.navigate("PessengerTrackRide");
  // };

  const cancelPayment = () => {
    navigation.navigate("Main");
  };

  const addLineBot = () => {
    Linking.openURL("https://line.me/R/ti/p/%40150qfayv");
    navigation.navigate("PessengerTrackRide");
  };

  const handleMapValues = (values) => {
    setDistance(values.OrgToDes.distance);
    setTime(values.OrgToDes.duration);
  };

  return (
    <>
      <View style={styles.container}>
        {/* {distance != null && time != null && ( */}
        <View>
          <Text style={styles.title}>Ride Info</Text>
          <View>
            <Text style={styles.text}>
              Date: {formattedDate}, Time: {formattedTime}
            </Text>
            <Text style={styles.text}>Distance: {distance}</Text>
            <Text style={styles.text}>Estimated Time: {time}</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>Total amount</Text>
          <Text style={styles.text}>$ {parseInt(distance) * 20}</Text>
        </View>
        <View style={styles.buttonGroup}>
          <PrimaryButton label={"Confirm payment"} onPress={addLineBot} />
          <SecondaryButton label={"Cancel ride"} onPress={cancelPayment} />
        </View>
      </View>
      <View style={{ flex: 0.8 }}>
        <Map onMapValues={handleMapValues} />
      </View>
    </>
  );
};

export default ConfirmRide;

// addLineBot
