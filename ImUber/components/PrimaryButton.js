import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { Button } from '@ant-design/react-native';
import styles from "../components/styles";

// const styles = StyleSheet.create({
//     button: {
//       backgroundColor: '#2E4374',
//       padding: 10,
//       borderRadius: 5,
//       maxWidth: '100%',
//     },
//     buttonText: {
//       color: '#ffff',
//       fontWeight: 'bold',
//       fontSize: 16,
//       textAlign: "center"
//     },
// })

const PrimaryButton = ({label, onPress}) => {

  return (
    <Button style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </Button>
  );
};
  
  export default PrimaryButton;
  