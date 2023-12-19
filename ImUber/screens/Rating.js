import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import UnderlineButton from "../components/UnderlineButton";
import StarRating from 'react-native-star-rating-widget';
import styles from "../components/styles";
import { useMutation } from '@apollo/client';
import { CREATE_RATING } from "../graphql";


// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: "#ffff",
//         alignItems: "center",
//         gap: 32
//     },
//     title: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 18,
//         fontWeight: "700",
//     },
//     text: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 16,
//         fontWeight: "500",
//         lineHeight: 18,
//         textAlign: "center"
//     },
//     input: {
//         marginBottom: 16,
//         borderWidth: 1,
//         Width: '100%'
//     }
// })

  
const Rating = ({ navigation }) => {

    const [createRating, { data, loading, error }] = useMutation(EMAIL_SIGNUP);

    const submit = () => {
        navigation.navigate('Main');
    };

    const skip = () => {
        navigation.navigate('Main');
    };

    const [comment, onChangeComment] = React.useState('');
    const [rating, setRating] = useState(0);
    
    return (
        <View style={styles.container}>
            <View style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 8}}>
                <Text style={styles.title}>Complete Your Ride</Text> 
                <Text style={styles.text}>You have successfully arrived the destination. Feel free to provide feedback to the driver.</Text> 
            </View>
            <View style={{display: "flex", flexDirection: "column", alignItems: "center", gap: 24}}>
                <Text style={styles.text}>Driver</Text> 
                <StarRating
                    rating={rating}
                    onChange={setRating}
                />
            </View>
            <View
                style={{
                    borderRadius: 5,
                    border: 1,
                    borderColor: "#D0D0D1"
                }}>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={comment => onChangeComment(comment)}
                    value={comment}
                    style={{padding: 10}}
                    placeholder={"Leave your comment..."}
                />
            </View>
            <View style={{gap: 16, alignItems: "center"}}>
                <PrimaryButton label={"Submit"} onPress={submit}/>
                <UnderlineButton label={"Skip now"} onPress={skip}/>
            </View>
        </View>
    );
};

export default Rating;
