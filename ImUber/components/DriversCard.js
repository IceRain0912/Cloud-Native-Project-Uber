import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@ant-design/react-native';
import SendRidingRequest from './SendRidingRequest';

const styles = StyleSheet.create({
    card: {
        borderRadius: 20,
        padding: 24,
        marginBottom: 32,
        width: 343,
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.3,
        shadowRadius: 4,
        shadowColor: '#D0D0D1',
    },
    cardContent:{
        display: "flex",
        gap: 16,
    },
    routeInfo: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    routeDetail: {
        display: "flex",
        flexDirection: "row",
        gap: 8,
    },
    cardSmallTitle: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 14,
        fontWeight: "700",
    },
    cardTitle: {
        color: "#2E4374",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "700",
    },
    cardText: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "500",
    },
    cardSmallText: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 12,
        fontWeight: "500",
    },
    cardSmallTextLight: {
        color: "#C2C2C2",
        fontFamily: "Lato, sans-serif",
        fontSize: 12,
        fontWeight: "500",
    },
    cardLargeText: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 18,
        fontWeight: "700",
    },
});

const DriversCard = ({ driver }) => {
    
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
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
                <View>
                    <View style={{display:"flex", gap:4}}>
                        <Text style={styles.cardText}>{driver.name}</Text>
                        <Text style={styles.cardSmallTextLight}>{`${driver.star} ★ (${driver.rating} ratings)`}</Text>
                    </View>
                    <Button onPress={toggleModal}>Select</Button>
                </View>
            </View>
            <SendRidingRequest isVisible={isModalVisible} closeModal={toggleModal} />
        </View>
    );
};

export default DriversCard;