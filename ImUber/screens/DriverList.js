import { View, FlatList, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import DriversCard from "./DriversCard";
import NavBar from "../components/NavBar";
import styles from "../components/styles";
import { PickerView } from '@ant-design/react-native'

// const styles = StyleSheet.create({
//     title: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 18,
//         fontWeight: "700",
//         padding:16
//     }
// })

const DriverList = ({ route, navigation }) => {

    // const { params } = route;
    // const driversData = params?.data;

    const driversData = [
        { id: '1', departTime: "10:30", start:"Taichung", end: "TSMC", price: 80, dist: 3.5, time: 17, name: 'John Doe', star: 4.3, rating: 27, seatsLeft: 3 },
        { id: '2', departTime: "10:30", start:"Taichung", end: "TSMC", price: 80, dist: 3.5, time: 17, name: 'John Doe', star: 4.3, rating: 27, seatsLeft: 3 },
        { id: '3', departTime: "10:30", start:"Taichung", end: "TSMC", price: 80, dist: 3.5, time: 17, name: 'John Doe', star: 4.3, rating: 27, seatsLeft: 3 },
    ];

    const pessengerData = { start: "Taichung", end:"TSMC", time: "10:30" };

    return (
        <View style={{ padding: 16, gap:24,  }}>
            {/* <NavBar pessenger={pessengerData} /> */}
            <Text style={styles.title}>4 drivers in your route</Text> 
            <View style={{ padding: 16}}>
                <Text>Sort by</Text> 
                {/* <Dropdown/> */}
                {/* <PickerView
                    onChange={this.onChange}
                    value={this.state.value}
                    data={seasons}
                    cascade={false}
                /> */}
            </View>
            <FlatList
                data={driversData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <DriversCard driver={item} navigation={navigation}/>}
                // style={{display: 'flex', alignItems: 'center'}}
            />
        </View>
    );
};

export default DriverList;
