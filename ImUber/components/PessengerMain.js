import { Text, View, StyleSheet} from "react-native";
import SearchableDropDown from "../components/SearchableDropDown";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import {TimePicker} from 'react-native-simple-time-picker';
import styles from "./styles";



const PessengerMain = ({start, end, hours, minutes, handleChange, startMatching}) => {

    return (
        <View>
            <View style={styles.inputGroup}>
                <SearchableDropDown value={start} style={styles.input} placeholder={"Select your pickup point"}/>
                <SearchableDropDown value={end} style={styles.input} placeholder={"Select your destination"}/>
            </View>
            <Text style={styles.text}>Depart</Text> 
            <TimePicker value={{ hours, minutes }} onChange={handleChange} />
            <PrimaryButton label={"Start matching"} onPress={startMatching}/>
        </View>
    );
};

export default PessengerMain;
