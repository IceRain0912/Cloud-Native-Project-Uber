import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";


const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#ffff"
    },
    title: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16
    },
    text: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 18,
        padding: 8
    },
})

  
const ConfirmRide = ({ navigation }) => {

    const payTheFare = () => {
        navigation.navigate('PessengerTrackRide');
    };

    const cancelPayment = () => {
        navigation.navigate('Main');
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Ride Info</Text> 
                <View>
                    <Text style={styles.text}>Date</Text> 
                    <Text style={styles.text}>Distance</Text> 
                    <Text style={styles.text}>Time</Text> 
                </View>
            </View>
            <View>
                <Text style={styles.text}>Total amount</Text> 
                <Text style={styles.text}>$80</Text>
            </View>
            <PrimaryButton label={"Confirm payment"} onPress={payTheFare}/>
            <SecondaryButton label={"Cancel ride"} onPress={cancelPayment}/>
        </View>
    );
};

export default ConfirmRide;
