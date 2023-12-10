import { View, Text, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import styles from "../components/styles";


// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: "#ffff"
//     },
//     title: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 18,
//         fontWeight: "700",
//         marginBottom: 16
//     },
//     text: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 16,
//         fontWeight: "500",
//         lineHeight: 18,
//         padding: 8
//     },
// })

  
const ConfirmRoute = ({ navigation }) => {

    const cancelRide = () => {
        navigation.navigate('Main');
    };

    const startMatching = () => {
        navigation.navigate('DriverTrackRide');
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
                <PrimaryButton label={"Start Matching"} onPress={startMatching}/>
                <SecondaryButton label={"Cancel ride"} onPress={cancelRide}/>
            </View>
        </View>
    );
};

export default ConfirmRoute;
