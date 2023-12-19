import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import UnderlineButton from "../components/UnderlineButton";
import styles from "../components/styles";
import axios from 'axios';
import * as Keychain from 'react-native-keychain';

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

  
const Login = ({ navigation }) => {

    const login = () => {
        navigation.navigate('Main');
    };

    const register = () => {
        navigation.navigate('Register');
    };

    const [name, onChangeName] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const handleLogin = async () => {
        try {
          const response = await axios.post('https://your-api/login', {
            username,
            password,
          });
    
          const { token } = response.data;
    
          // Save the JWT token securely
          await Keychain.setGenericPassword('jwtToken', token);
    
          // Navigate to the next screen or perform other actions after successful login
          navigation.navigate('Home');
        } catch (error) {
          console.error('Login failed:', error);
        }
    };
    

    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>Login</Text>  */}
            <View style={{display: "flex"}}>
                <View style={styles.inputGroup}>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={name}
                        placeholder="Name"
                        keyboardType="default"
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={styles.input}
                        onChangeText={onChangePassword}
                        value={password}
                        keyboardType="default"
                    />
                </View>
                <PrimaryButton label={"Login"} onPress={login}/>
                <View style={{display: "flex", alignItems: "center"}}>
                    <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <Text style={styles.text}>Not registered yet?</Text> 
                        <UnderlineButton label={"Register"} onPress={register}/>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Login;
