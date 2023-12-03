import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState} from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import Popup from '../components/Popup';
import styles from "../components/styles";


// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: "#ffff"
//     },
// })

  
const PessengerTrackRide = ({ navigation }) => {

    const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(true);
    const [isArrivalModalVisible, setIsArrivalModalVisible] = useState(false);

    const togglePaymentModal = () => {
        setIsPaymentModalVisible(!isPaymentModalVisible);
    };
    const toggleArrivalModal = () => {
        setIsArrivalModalVisible(!isArrivalModalVisible);
    };
    const report = () => {
        
    };

    return (
        <View style={styles.container}>

            {/* map area */}

            <Popup 
                title = {"Payment Confirmed"}
                text = {"Alex has received your payment."}
                primaryButtonText = {"Track my ride"}
                isVisible = {isPaymentModalVisible}
                primaryAction={togglePaymentModal}
            />
            <Popup 
                title = {"Driver Arrived"}
                text = {"Alex has arrived at Taichung train station. Do you successfully get on his car?"}
                primaryButtonText = {"Yes, continue to track the ride"}
                sencondaryButtonText = {"No, report the problem"}
                isVisible = {isArrivalModalVisible}
                primaryAction={toggleArrivalModal}
                closeModal={report}
            />
        </View>

    );
};

export default PessengerTrackRide;
