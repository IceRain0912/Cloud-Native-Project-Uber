import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { Button, Toast } from '@ant-design/react-native';
// import styles from "./styles";

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
    },
    chipUnSelected: {
      backgroundColor: "#ffff",
      borderWidth: 2,
      borderColor: "#2E4374",
    },
    chipUnSelectedText: {
      color: "#2E4374",
    },
})

const Chip = ({text, isSelected, onPress}) => {

  return (
    <Button style={[styles.chip, isSelected?null:styles.chipUnSelected]} onPress={onPress}>
        <Text style={[styles.chipText, isSelected?null:styles.chipUnSelectedText]}>{text}</Text>
    </Button>
  );
};
  
  export default Chip;
  