import { Text, View, StyleSheet} from "react-native";
// import SearchableDropDown from "../components/SearchableDropDown";
import SearchableDropdown from 'react-native-searchable-dropdown';
import PrimaryButton from "../components/PrimaryButton";
import {TimePicker} from 'react-native-simple-time-picker';
import styles from "./styles";
import NumberChooser from "./NumberChooser";
import UnderlineButton from "./UnderlineButton";
import React, { useState, useEffect } from "react";


const DriverMain = ({number, handleAdd, handleMinus, hours, minutes, handleChange, addStop, textInput, navigation}) => {


    // CREATE_RIDE: MaximumCapacity, DriverID, response: 

    const [data, setData] = useState([
        { id: 1, name: '新竹火車站' },
        { id: 2, name: '台灣積體電路製造十二廠P7' },
        { id: 3, name: '新竹高鐵站' },
        { id: 4, name: '國立清華大學' },
        { id: 5, name: '國立交通大學' },
        { id: 6, name: '新竹市政府' },
        { id: 7, name: '新竹巨城購物中心' },
    ]);

    const [start, setStart] = useState("");
    const [end, setEnd] = React.useState("");

    const handleStartChange = (item) => {
        // Perform actions or update state when the value changes
        setStart(item);
        console.log('Selected Item:', item);
      };
    
    const handleEndChange = (item) => {
        // Perform actions or update state when the value changes
        setEnd(item);
        console.log('Selected Item:', item);
    };

    const generateRoute = () => {
        console.log("starting point", start)
        console.log("end point", end)
        navigation.navigate('ConfirmRoute', {
            start: start.name,
            end: end.name,
            capacity: number
        });
        // navigation.navigate('DriverList');
    };

    

    return (
        <View>
            <View style={styles.inputGroup}>
                <SearchableDropdown
                    onItemSelect={handleStartChange}
                    containerStyle={{ padding: 5 }}
                    textInputStyle={{
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    }}
                    itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={data}
                    defaultIndex={0}
                    placeholder={start ? start.name : "Select your pickup point"}
                    resetValue={false}
                    underlineColorAndroid="transparent"
                />
                <SearchableDropdown
                    onItemSelect={handleEndChange}
                    containerStyle={{ padding: 5 }}
                    textInputStyle={{
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    borderRadius: 5,
                    }}
                    itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                    borderWidth: 1,
                    borderRadius: 5,
                    }}
                    itemTextStyle={{ color: '#222' }}
                    itemsContainerStyle={{ maxHeight: 140 }}
                    items={data}
                    defaultIndex={0}
                    placeholder={end ? end.name : "Select your destination"}
                    resetValue={false}
                    underlineColorAndroid="transparent"
                />
                {/* <SearchableDropDown style={styles.input} placeholder={"Select your pickup point"}/>
                <SearchableDropDown style={styles.input} placeholder={"Select your destination"}/> */}
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
