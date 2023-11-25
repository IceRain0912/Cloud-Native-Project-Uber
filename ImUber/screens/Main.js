import { View, Text, StyleSheet } from "react-native";
import React, { useState, Fragment } from "react";
import { Button } from '@ant-design/react-native';
import SearchableDropDown from "../components/SearchableDropDown";
import Chip from "../components/Chip";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
    title: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 18,
        fontWeight: "700",
        padding:16
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
        marginBottom: 24
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

    return (
        <View>
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
                <Button style={styles.button} onPress={startMatching}>
                    <Text style={styles.chipText}>
                        Start matching
                    </Text>
                </Button>
            </View>
        </View>
    );
};

export default Main;
