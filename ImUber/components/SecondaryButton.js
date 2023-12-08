import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { Button } from '@ant-design/react-native';

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#F1F1F1',
      padding: 10,
      borderRadius: 5,
      maxWidth: '100%',
    },
    buttonText: {
      color: '#4B4B4B',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: "center"
    },
})

const SecondaryButton = ({label, onPress}) => {

  return (
    <Button style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{label}</Text>
    </Button>
  );
};
  
export default SecondaryButton;
  