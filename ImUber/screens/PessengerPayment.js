import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { Button, Toast } from '@ant-design/react-native';

const styles = StyleSheet.create({
    chip: {
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#2E4374",
        height: "fit-content"
    },
    chipText: {
        color: "#FFFF",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 18,
    }
})

const PessengerPayment = ({text}) => {

    const [paymentModalVisible, setPaymentModalVisible] = useState(false);
    return (
    <Popup 
        title = {"Congratulations"}
        text = {"Alex has accepted your request!"}
        primaryButtonText = {"Continue to payment (60s)"}
        sencondaryButtonText = {"Cancel"}
        isVisible = {paymentModalVisible}
        primaryAction={confirmRide}
        closeModal={togglePaymentModal}
    />
    );
};
  
  export default PessengerPayment;
  