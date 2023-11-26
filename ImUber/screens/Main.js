import { View, Text, StyleSheet } from "react-native";
import React, { useState, Fragment, TouchableOpacity } from "react";
// import { Button } from '@ant-design/react-native';
import { Button } from "react-native";
import SearchableDropDown from "../components/SearchableDropDown";
import Chip from "../components/Chip";
import PrimaryButton from "../components/PrimaryButton";
import {TimePicker} from 'react-native-simple-time-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

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
        padding: 8,
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
    chip: {
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "flex-start",
        gap: 10,
        borderRadius: 20,
        backgroundColor: "#2E4374",
        width: 113,
        height: 54
    },
    chipText: {
        color: "#FFFF",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 18,
    },
    chipGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
        marginBottom: 24
    },
    inputGroup: {
        marginBottom: 16
    },
    button: {
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 5,
        backgroundColor: "#2E4374",
        height: 54
    },
    checkBox: {
        borderRadius: 20,
        borderColor: "#4B4B4B",
        width: 16,
        height: 16,
        marginBottom: 24
    }
})

  
const Main = ({ navigation }) => {

    const startMatching = () => {
        navigation.navigate('DriverList');
    };

    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
        setChecked(!checked);
    };

    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const handleChange = (values) => {
        const { hours, minutes } = values;
        setHours(hours);
        setMinutes(minutes);
    };
    const handleReset = () => {
        setHours(0);
        setMinutes(0);
    };


    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [selectedTime, setSelectedTime] = useState(new Date());

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>I'm Uber</Text> 
            <View style={{display: "flex"}}>
                <View style={styles.chipGroup}>
                    <Chip text={"Find a ride"}/>
                    <Chip text={"Offer a ride"}/>
                </View>
                <View style={styles.inputGroup}>
                    <SearchableDropDown placeholder={"Select your pickup point"}/>
                    <SearchableDropDown placeholder={"Select your destination"}/>
                </View>
                {/* <Button style={styles.chip} onPress={() => Toast.info('This is a toast tips')}>
                    <Text style={styles.chipText}>Choose saved route</Text>
                </Button> */}
                {/* <Checkbox
                    checked={checked}
                    onChange={toggleCheckbox}
                    style={styles.checkBox}
                >
                Save route
                </Checkbox> */}
                <Text style={styles.text}>Depart</Text> 
                <TimePicker value={{ hours, minutes }} onChange={handleChange} />
                {/* <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="time"
                    date={selectedTime}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                /> */}
                <PrimaryButton label={"Start matching"} onPress={startMatching}/>
            </View>
        </View>
    );
};

export default Main;
