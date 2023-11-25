// components/ModalComponent.js
import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';

const ModalComponent = ({ isVisible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Send Riding Request</Text>
                <Text style={styles.modalText}>Would you like to send riding request to Alex?</Text>
                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                    <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>xxx</Text>
                    <View style={styles.underline}></View>
                </TouchableOpacity>
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
  closeButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  underline: {
    backgroundColor: 'blue', // Set your desired underline color
    height: 2,
    width: '100%',
    marginTop: 2,
  },
});

export default ModalComponent;
