import {View, Text, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import Popup from '../components/Popup';
import styles from '../components/styles';

import Map from '../components/Map';

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//         backgroundColor: "#ffff"
//     },
// })

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

  const yourOriginObject = {
    location: {
      lat: 25.017,
      lng: 121.5397,
    },
    description: 'Your origin description', // You can include other properties as needed
  };

  const yourDestinationObject = {
    location: {
      latitude: 25.032435,
      longitude: 121.534905,
    },
    description: 'Your origin description', // You can include other properties as needed
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
        <Map origin={yourOriginObject} destination={yourDestinationObject} />
      </View>
    </>
  );
};

export default PessengerTrackRide;
