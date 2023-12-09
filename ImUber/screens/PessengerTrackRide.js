import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Popup from '../components/Popup';
import styles from '../components/styles';

import Map from '../components/Map';

const PessengerTrackRide = ({navigation}) => {
  const [isPaymentModalVisible, setIsPaymentModalVisible] = useState(true);
  const [isArrivalModalVisible, setIsArrivalModalVisible] = useState(false);

  const togglePaymentModal = () => {
    setIsPaymentModalVisible(!isPaymentModalVisible);
  };
  const toggleArrivalModal = () => {
    setIsArrivalModalVisible(!isArrivalModalVisible);
  };
  const report = () => {};

  const origin = {
    location: {
      lat: 24.859825448128372,
      lng: 121.0082502216944,
    },
    description: 'Origin',
  };

  const destination = {
    location: {
      lat: 24.808427767227446,
      lng: 121.04020156967613,
    },
    description: 'Destination',
  };

  return (
    <>
      <View style={styles.container}>
        {/* map area */}
        <Popup
          title={'Payment Confirmed'}
          text={'Alex has received your payment.'}
          primaryButtonText={'Track my ride'}
          isVisible={isPaymentModalVisible}
          primaryAction={togglePaymentModal}
        />
        <Popup
          title={'Driver Arrived'}
          text={
            'Alex has arrived at Taichung train station. Do you successfully get on his car?'
          }
          primaryButtonText={'Yes, continue to track the ride'}
          sencondaryButtonText={'No, report the problem'}
          isVisible={isArrivalModalVisible}
          primaryAction={toggleArrivalModal}
          closeModal={report}
        />
      </View>
      <View style={{flex: 1}}>
        <Map origin={origin} destination={destination} />
      </View>
    </>
  );
};

export default PessengerTrackRide;
