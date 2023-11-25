import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Provider, Toast, Picker, Checkbox } from '@ant-design/react-native';

const styles = StyleSheet.create({
    title: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 18,
        fontWeight: "700",
        padding:16
    }
})

  
const Main = ({ navigation }) => {

    const startMatching = () => {
        navigation.navigate('DriverList');
    };
    
    return (
        <View>
            <Text style={styles.title}>Complete Your Ride</Text> 
            <Text style={styles.title}>You have successfully arrived the destination. Feel free to provide feedback to the driver.</Text> 
            <Provider>
                <Button onPress={() => Toast.info('This is a toast tips')}>Find a ride</Button>
                <Button onPress={() => Toast.info('This is a toast tips')}>Offer a ride</Button>
                <Button onPress={startMatching}>
                    Start matching
                </Button>
            </Provider>
        </View>
    );
};

export default Main;
