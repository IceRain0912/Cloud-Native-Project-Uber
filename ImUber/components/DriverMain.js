import { Text, View, StyleSheet} from "react-native";
import SearchableDropDown from "../components/SearchableDropDown";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import {TimePicker} from 'react-native-simple-time-picker';
import styles from "./styles";
import NumberChooser from "./NumberChooser";
import UnderlineButton from "./UnderlineButton";


const DriverMain = ({number, handleAdd, handleMinus, hours, minutes, handleChange, generateRoute, addStop, textInput}) => {

    return (
        <View>
            <View style={styles.inputGroup}>
                <SearchableDropDown style={styles.input} placeholder={"Select your pickup point"}/>
                <SearchableDropDown style={styles.input} placeholder={"Select your destination"}/>
            </View>
            {textInput.map((value, index) => (
                <View key={index}>{value}</View>
            ))}
            <UnderlineButton/>
            <UnderlineButton label={"Add stop"} onPress={addStop}/>
            <View style={{ diaply: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={styles.text}>Pessenger</Text> 
                <NumberChooser number={number} handleAdd={handleAdd} handleMinus={handleMinus}/>
            </View>
            <Text style={styles.text}>Depart</Text> 
            <TimePicker value={{ hours, minutes }} onChange={handleChange} />
            <PrimaryButton label={"Generate route"} onPress={generateRoute}/>
        </View>
    );
};

export default DriverMain;
