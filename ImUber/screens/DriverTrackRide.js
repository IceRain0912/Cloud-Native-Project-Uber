import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import Popup from "../components/Popup";
import styles from "../components/styles";
import DriverMap from "../components/DriverMap";

const DriverTrackRide = ({ navigation }) => {
  const [isRequestModalVisible, setIsRequestModalVisible] = useState(true);
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(false);
  const [isPickModalVisible, setIsPickModalVisible] = useState(false);

  const toggleRequestModal = () => {
    setIsRequestModalVisible(!isRequestModalVisible);
    setIsPaymentModalVisible(!isPaymentModalVisible);
  };
  const togglePaymentModal = () => {
    setIsPaymentModalVisible(!isPaymentModalVisible);
  };
  const togglePickModal = () => {
    setIsPickModalVisible(!isPickModalVisible);
  };
  const handleMapValues = (values) => {};

  return (
    <>
      <View style={styles.container}>
        <Popup
          title={"Pessenger Request"}
          text={"Alan Huang \n Taichung Train Station → TSMC \n $80"}
          primaryButtonText={"Accept"}
          sencondaryButtonText={"Decline"}
          isVisible={isRequestModalVisible}
          primaryAction={toggleRequestModal}
          closeModal
        />
        <Popup
          title={"Payment Received"}
          text={
            "Alan has successfully paid $80 for the ride from Taichung Train Station to TSMC."
          }
          primaryButtonText={"Got it!"}
          isVisible={isPaymentModalVisible}
          primaryAction={togglePaymentModal}
          // closeModal={report}
        />
        <Popup
          title={"Pick up 1 pessenger"}
          text={"Do you successfully pick up Alan at Taichung Train Station?"}
          primaryButtonText={"Yes, continue to track the ride"}
          sencondaryButtonText={"No, report the problem"}
          isVisible={isPickModalVisible}
          primaryAction={togglePickModal}
          // closeModal={report}
        />
      </View>
      <View style={{ flex: 1 }}>
        <DriverMap onMapValues={handleMapValues} />
      </View>
    </>
  );
};

export default DriverTrackRide;
