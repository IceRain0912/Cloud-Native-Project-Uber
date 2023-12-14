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
      lat: 24.801850638002016,
      lng: 120.97158829773566,
    },
    description: '新竹火車站',
  };

  const destination = {
    location: {
      lat: 24.7688348955981,
      lng: 121.01425942142271,
    },
    description: '台灣積體電路製造十二廠P7',
  };

  const stops = [
    {
      location: {
        lat: 24.808392574136747,
        lng: 121.04024422909944,
      },
      description: '新竹高鐵站',
    },
    {
      location: {
        lat: 24.797096328506978,
        lng: 120.99648863750419,
      },
      description: '國立清華大學',
    },
    {
      location: {
        lat: 24.784660852606194,
        lng: 120.99565928094843,
      },
      description: '國立交通大學',
    },
    {
      location: {
        lat: 24.808567893350247,
        lng: 120.96931322128688,
      },
      description: '新竹市政府',
    },
    {
      location: {
        lat: 24.810079020549633,
        lng: 120.97518554046995,
      },
      description: '新竹巨城購物中心',
    },
  ];

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
        <Map origin={origin} destination={destination} stops={stops} />
      </View>
    </>
  );
};

export default PessengerTrackRide;
