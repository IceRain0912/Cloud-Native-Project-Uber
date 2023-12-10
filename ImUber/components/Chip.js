import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { Button, Toast } from '@ant-design/react-native';

const styles = StyleSheet.create({
    chip: {
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#2E4374",
        height: "fit-content"
    },
    chipText: {
        color: "#FFFF",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 18,
    }
})

const Chip = ({text}) => {

  return (
    <Button style={styles.chip} onPress={() => Toast.info('This is a toast tips')}>
        <Text style={styles.chipText}>{text}</Text>
    </Button>
  );
};
  
  export default Chip;
  