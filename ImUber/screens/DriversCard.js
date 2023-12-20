import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Button } from '@ant-design/react-native';
import SendRidingRequest from '../components/SendRidingRequest';
import Popup from '../components/Popup';
import Card from '../components/Card';
import PrimaryButton from '../components/PrimaryButton';
import styles from "../components/styles";
import { useMutation} from '@apollo/client';
import { CREATE_TRANSACTION } from './graphql';



const DriversCard = ({ driver,  navigation }) => {

    //CREATE_TRANSACTION: PassengerID, RouteID, Payment, DepartureTime, CarID, RequestTime, response: ok

    // const [createTransaction, { loading }] = useMutation(CREATE_TRANSACTION);
    
    const [requestModalVisible, setRequestModalVisible] = useState(false);
    const [paymentModalVisible, setPaymentModalVisible] = useState(false);

    const toggleRequestModal = () => {
        setRequestModalVisible(!requestModalVisible);
        // create transaction function
    };

    const continueToPayment = () => {
        setRequestModalVisible(!requestModalVisible);
        setPaymentModalVisible(!paymentModalVisible);
    };

    const confirmRide = () => {
        navigation.navigate('ConfirmRide');
    };

    const togglePaymentModal = () => {
        setPaymentModalVisible(!paymentModalVisible);
    };


    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.cardSmallTitle}>{`Depart: ${driver.departTime}`}</Text>
                <View style={styles.routeInfo}>
                    <View style={{display:"flex", gap:8}}>
                        <Text style={styles.cardTitle}>{driver.start} → {driver.end}</Text>
                        <View style={styles.routeDetail}>
                            <Text style={styles.cardSmallText}>{`${driver.dist} km`}</Text>
                            <Text style={styles.cardSmallText}>{`${driver.time} min`}</Text>
                        </View>
                    </View>
                    <View style={{display:"flex", gap:4}}>
                        <Text style={styles.cardLargeText}>{`$${driver.price}`}</Text>
                        <Text style={styles.cardSmallTextLight}>{`${driver.seatsLeft} seats left`}</Text>
                    </View>
                </View>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <View style={{display:"flex", gap:4}}>
                        <Text style={styles.cardText}>{driver.name}</Text>
                        <Text style={styles.cardSmallTextLight}>{`${driver.star} ★ (${driver.rating} ratings)`}</Text>
                    </View>
                    <PrimaryButton label={"Select"} onPress={toggleRequestModal}/>
                </View>
            </View>
            {/* <SendRidingRequest isVisible={isModalVisible} closeModal={toggleModal} /> */}
            <Popup 
                title = {"Send Riding Request"}
                text = {"Would you like to send riding request to Alex?"}
                primaryButtonText = {"Confirm"}
                sencondaryButtonText = {"Cancel"}
                isVisible = {requestModalVisible}
                primaryAction={continueToPayment}
                closeModal={toggleRequestModal}
            />
            <Popup 
                title = {"Congratulations"}
                text = {"Alex has accepted your request!"}
                primaryButtonText = {"Continue to payment (60s)"}
                sencondaryButtonText = {"Cancel"}
                isVisible = {paymentModalVisible}
                primaryAction={confirmRide}
                closeModal={togglePaymentModal}
            />
        </View>
    );
};

export default DriversCard;