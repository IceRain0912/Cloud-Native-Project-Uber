import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import UnderlineButton from "../components/UnderlineButton";
import styles from "../components/styles";

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: "#ffff"
//     },
//     title: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 18,
//         fontWeight: "700",
//         marginBottom: 16
//     },
//     text: {
//         color: "#4B4B4B",
//         fontFamily: "Lato, sans-serif",
//         fontSize: 16,
//         fontWeight: "500",
//         lineHeight: 18,
//         padding: 8
//     },
//     input: {
//         marginBottom: 16,
//         borderWidth: 1,
//     }
// })

  
const Register = ({ navigation }) => {

    const register = () => {
        navigation.navigate('Login');
    };

    const login = () => {
        navigation.navigate('Login');
    };

    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}></Text>  */}
            <View style={{display: "flex"}}>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Name*"
                        keyboardType="default"
                    />
                    <TextInput
                        placeholder="Password*"
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        keyboardType="default"
                    />
                </View>
                <PrimaryButton label={"Register"} onPress={register}/>
                <View style={{display: "flex", alignItems: "center"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.text}>Back to</Text> 
                        <UnderlineButton label={"Login"} onPress={login}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Register;
