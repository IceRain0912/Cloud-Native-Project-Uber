import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { Button } from '@ant-design/react-native';

const styles = StyleSheet.create({
    button: {
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 12,
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 5,
        backgroundColor: "#2E4374",
        height: 54
    }
})

const PrimaryButton = ({text}) => {

  return (
    <Button style={styles.button}>
        <Text style={styles.chipText}>{text}</Text>
    </Button>
  );
};
  
  export default PrimaryButton;
  