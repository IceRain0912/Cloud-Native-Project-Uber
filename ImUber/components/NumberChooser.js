import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const NumberChooser = ({ number, handleAdd, handleMinus }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleMinus}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>

      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{number}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    gap: 16,
  },
  button: {
    display: 'flex',
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: 100,
    backgroundColor: "#F1F1F1",
  },
  buttonText: {
    color: '#4B4B4B',
    fontSize: 32,
    fontWeight: 'bold',
  },
//   numberContainer: {
//     backgroundColor: '#f0f0f0',
//     padding: 20,
//     borderRadius: 5,
//   },
  numberText: {
    color: "#4B4B4B",
    fontFamily: "Lato, sans-serif",
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 18,
    padding: 8
  },
});

export default NumberChooser;