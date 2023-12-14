import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, Toast } from "@ant-design/react-native";
import styles from "../components/styles";

const PessengerPayment = ({ text }) => {
  const [paymentModalVisible, setPaymentModalVisible] = useState(false);
  return (
    <Popup
      title={"Congratulations"}
      text={"Alex has accepted your request!"}
      primaryButtonText={"Continue to payment (60s)"}
      sencondaryButtonText={"Cancel"}
      isVisible={paymentModalVisible}
      primaryAction={confirmRide}
      closeModal={togglePaymentModal}
    />
  );
};

export default PessengerPayment;
