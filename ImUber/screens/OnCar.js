import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
// import PrimaryButton from '../components/PrimaryButton';
// import SecondaryButton from '../components/SecondaryButton';
import Popup from "../components/Popup";
import styles from "../components/styles";

import DriverMap from "../components/DriverMap";

const OnCar = ({ navigation }) => {
  const [isArrivalModalVisible, setIsArrivalModalVisible] = useState(false);

  const handleMapValues = (values) => {
    if (
      values.CurToDes.distance.split(" ")[0] < 10 &&
      isArrivalModalVisible == false
    ) {
      toggleArrivalModal();
    }
  };

  const toggleArrivalModal = () => {
    setIsArrivalModalVisible(!isArrivalModalVisible);
  };
  const report = () => {};

  return (
    <>
      <View style={styles.container}>
        <Popup
          title={"Arrived Destination"}
          text={"Arrived destination?"}
          primaryButtonText={"Yes, jump to rating page"}
          sencondaryButtonText={"No, report the problem"}
          isVisible={isArrivalModalVisible}
          primaryAction={() => {
            navigation.navigate("Rating");
            toggleArrivalModal();
          }}
          closeModal={report}
        />
      </View>
      <View style={{ flex: 1 }}>
        <DriverMap onMapValues={handleMapValues} />
      </View>
    </>
  );
};

export default OnCar;
