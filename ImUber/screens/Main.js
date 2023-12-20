import { View, Text, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import SearchableDropDown from "../components/SearchableDropDown";
import Chip from "../components/Chip";
import PessengerMain from "../components/PessengerMain";
import DriverMain from "../components/DriverMain";
import styles from "../components/styles";
import { useMutation, useLazyQuery } from '@apollo/client';
import { CREATE_ROUTE, CREATE_RIDE, GET_RIDE } from './graphql';

  
const Main = ({ navigation }) => {

    // CREATE_ROUTE: 
    // CREATE_RIDE: MaximumCapacity, DriverID, response: ride id
    // GET_RIDE: start, end, response: Driver(Name, RatingAsRated), RouteID, MaximumCapacity
    
    // const [createRoute, { loading, error }] = useMutation(CREATE_ROUTE);
    // const [createRide, { loading, error }] = useMutation(CREATE_RIDE);
    // const [getRide, { loading, error, data }] = useLazyQuery(GET_RIDE, {
    //     fetchPolicy: "no-cache"
    // })
    // useEffect(() => {
    //     if(data)
    //         handleAfterQuery()
    // }, [data])

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

    const generateRoute =  () => {
        navigation.navigate('ConfirmRoute');

        // create route
        // try {
        //     // Call the createRouteMutation with variables
        //     const { data } = await createRoute({
        //       variables: {
        //         //
        //       },
        //     });
        //     console.log('Create Route Response:', data);
        //   } catch (error) {
        //     console.error('Create Route Error:', error.message);
        // }

        // // create ride
        // try {
        //     // Call the createRouteMutation with variables
        //     const { data } = await createRide({
        //       variables: {
        //         MaximumCapacity: number
        //         //DriverID: 
        //       },
        //     });
        //     console.log('Create Ride Response:', data);
        //   } catch (error) {
        //     console.error('Create Ride Error:', error.message);
        // }

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
                        navigation={navigation}
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
                        navigation={navigation}
                    />
                )}
            </View>
        </View>
    );
};

export default Main;
