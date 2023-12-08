// components/ModalComponent.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import UnderlineButton from "./UnderlineButton";
import PrimaryButton from "./PrimaryButton";

const Popup = ({ title, text, primaryButtonText, sencondaryButtonText, isVisible, closeModal, primaryAction }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={styles.textGroup}>
                  <Text style={styles.modalTitle}>{title}</Text>
                  <Text style={styles.modalText}>{text}</Text>
                </View>
                <View style={styles.buttonGroup}>
                  <PrimaryButton label={primaryButtonText} onPress={primaryAction}/>
                  <UnderlineButton label={sencondaryButtonText} onPress={closeModal}/>
                </View>
            </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 300,
  },
  modalTitle: {
    color: "#4B4B4B",
    textAlign: "center",
    fontFamily: "Lato, sans-serif",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16
  },
  modalText: {
    color: "#4B4B4B",
    textAlign: "center",
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    fontWeight: "400",
  },
  underline: {
    backgroundColor: '#979797', // Set your desired underline color
    height: 2,
    width: '100%',
    marginTop: 2,
  },
  textGroup: {
    marginBottom: 24,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    maxWidth: '100%'
  }
});

export default Popup;
