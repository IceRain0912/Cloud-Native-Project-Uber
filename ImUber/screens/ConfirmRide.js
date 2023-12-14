import {View, Text, TextInput} from 'react-native';
import React from 'react';
import PrimaryButton from '../components/PrimaryButton';
import SecondaryButton from '../components/SecondaryButton';
import styles from '../components/styles';
import Map from '../components/Map';

const ConfirmRide = ({navigation}) => {
  const payTheFare = () => {
    navigation.navigate('PessengerTrackRide');
  };

  const cancelPayment = () => {
    navigation.navigate('Main');
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Ride Info</Text>
          <View>
            <Text style={styles.text}>Date</Text>
            <Text style={styles.text}>Distance</Text>
            <Text style={styles.text}>Time</Text>
          </View>
        </View>
        <View style={styles.list}>
          <Text style={styles.text}>Total amount</Text>
          <Text style={styles.text}>$80</Text>
        </View>
        <View style={styles.buttonGroup}>
          <PrimaryButton label={'Confirm payment'} onPress={payTheFare} />
          <SecondaryButton label={'Cancel ride'} onPress={cancelPayment} />
        </View>
      </View>
      <View style={{flex: 0.8}}>
        {/* <Map origin={origin} destination={destination} stops={stops} /> */}
        <Map />
      </View>
    </>
  );
};

export default ConfirmRide;
