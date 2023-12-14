import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useRef, useEffect, useState } from "react";
// import PrimaryButton from '../components/PrimaryButton';
// import SecondaryButton from '../components/SecondaryButton';
import Popup from "../components/Popup";
import styles from "../components/styles";

import Map from "../components/Map";

const PessengerTrackRide = ({ navigation }) => {
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(true);
  const [isArrivalModalVisible, setIsArrivalModalVisible] = useState(false);
  const isConditionSatisfied = useRef(false);

  const handleMapValues = (values) => {
    if (!isConditionSatisfied.current) {
      if (
        values.DriverToOrg.distance.split(" ")[0] < 1.8 &&
        !isArrivalModalVisible
      ) {
        console.log(values.CusToOrg.distance.split(" ")[0]);
        console.log(values.DriverToOrg.distance.split(" ")[0]);
        isConditionSatisfied.current = true; // Update ref to indicate the condition is satisfied
      }
    }
  };

  useEffect(() => {
    if (!isPaymentModalVisible && isConditionSatisfied.current) {
      toggleArrivalModal();
      isConditionSatisfied.current = false; // Reset the condition for future checks
    }
  }, [isPaymentModalVisible]);

  const togglePaymentModal = () => {
    setIsPaymentModalVisible(!isPaymentModalVisible);
  };
  const toggleArrivalModal = () => {
    setIsArrivalModalVisible(!isArrivalModalVisible);
  };
  const report = () => {};

  return (
    <>
      <View style={styles.container}>
        {/* map area */}
        <Popup
          title={"Payment Confirmed"}
          text={"Alex has received your payment."}
          primaryButtonText={"Track my ride"}
          isVisible={isPaymentModalVisible}
          primaryAction={togglePaymentModal}
        />
        <Popup
          title={"Driver Arrived"}
          text={"Alex has arrived. Do you successfully get on his car?"}
          primaryButtonText={"Yes, continue to track ride"}
          sencondaryButtonText={"No, report the problem"}
          isVisible={isArrivalModalVisible}
          primaryAction={() => {
            navigation.navigate("OnCar");
            toggleArrivalModal();
          }}
          closeModal={report}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Map onMapValues={handleMapValues} />
      </View>
    </>
  );
};

export default PessengerTrackRide;
