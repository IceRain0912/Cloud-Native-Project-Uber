import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import SearchableDropDown from "../components/SearchableDropDown";
import Chip from "../components/Chip";
import PessengerMain from "../components/PessengerMain";
import DriverMain from "../components/DriverMain";
import styles from "../components/styles";

  
const Main = ({ navigation }) => {

    const [selectedContent, setSelectedContent] = useState("Pessenger");
    
    const handleContentChange = (content) => {
        setSelectedContent(content);
    };

    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const handleChange = (values) => {
        const { hours, minutes } = values;
        setHours(hours);
        setMinutes(minutes);
    };

    const [number, setNumber] = useState(0);

    const handleAdd = () => {
        setNumber(number + 1);
    };

    const handleMinus = () => {
        setNumber(number - 1);
    };

    const addStop = () => {
        setTextInput([...textInput,  <SearchableDropDown style={styles.input} placeholder={"Select midpoint"} key={textInput.length} />]);
    };

    const [textInput, setTextInput] = useState([]);

    const startMatching = () => {
        navigation.navigate('DriverList');
    };

    const generateRoute = () => {
        navigation.navigate('ConfirmRoute');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>I'm Uber</Text> 
            <View style={{display: "flex"}}>
                <View style={styles.chipGroup}>
                    {/* <Chip text={"Find a ride"} onPress={() => setSelectedContent('Pessenger')}/>
                    <Chip text={"Offer a ride"} onPress={() => setSelectedContent('Driver')}/> */}
                    <Chip text={"Find a ride"} isSelected={selectedContent == "Pessenger" ? true: false} onPress={() => handleContentChange('Pessenger')}/>
                    <Chip text={"Offer a ride"} isSelected={selectedContent == "Driver" ? true: false} onPress={() => handleContentChange('Driver')}/>
                </View>

                {selectedContent == 'Pessenger' ? (
                    <PessengerMain
                        hours={hours}
                        minutes={minutes}
                        handleChange={handleChange}
                        startMatching={startMatching}
                    />
                ) : (
                    <DriverMain
                        number={number}
                        handleAdd={handleAdd}
                        handleMinus={handleMinus}
                        hours={hours}
                        minutes={minutes}
                        handleChange={handleChange}
                        addStop={addStop}
                        textInput={textInput}
                        generateRoute={generateRoute}
                    />
                )}
            </View>
        </View>
    );
};

export default Main;
