import React, { useRef, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const UnderlineButton = ({ onPress, label }) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const labelRef = useRef();

  useEffect(() => {
    if (labelRef.current) {
      setLabelWidth(labelRef.current.offsetWidth);
    }
  }, [label]);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text ref={labelRef} style={styles.buttonText}>
          {label}
        </Text>
        <View style={[styles.underline, { width: labelWidth }]} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'relative',
  },
  buttonText: {
    fontSize: 16,
    color: '#979797',
    paddingBottom: 5,
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: 3,
    backgroundColor: '#979797',
  },
});

export default UnderlineButton;
