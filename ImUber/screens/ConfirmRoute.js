import { View, Text, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../components/styles";

const ConfirmRoute = ({ navigation }) => {
  const cancelRide = () => {
    navigation.navigate("Main");
  };

  const startMatching = () => {
    navigation.navigate("DriverTrackRide");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Ride Info</Text>
        <View>
          <Text style={styles.text}>Date</Text>
          <Text style={styles.text}>Distance</Text>
          <Text style={styles.text}>Time</Text>
          <Text style={styles.text}>Pessenger</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>show route on the map</Text>
      </View>
      <View style={styles.list}>
        <Text style={styles.text}>Fare</Text>
        <Text style={styles.text}>$80</Text>
      </View>
      <View style={styles.buttonGroup}>
        <PrimaryButton label={"Start Matching"} onPress={startMatching} />
        <SecondaryButton label={"Cancel ride"} onPress={cancelRide} />
      </View>
    </View>
  );
};

export default ConfirmRoute;
