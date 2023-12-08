import { Text, View, StyleSheet} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: "#2E4374",
        display: "flex",
        width: 375,
        padding: 16,
        gap: 4
    },
    navbarText: {
        color: "#FFFF",
        fontFamily: "Lato, sans-serif",
        fontSize: 14,
        fontWeight: "600",
    }
});

const NavBar = ({ pessenger }) => {

    return (
        <View style={styles.navbar}>
            <Text style={styles.navbarText}>{pessenger.start} → {pessenger.end}</Text>
            <Text style={styles.navbarText}>{pessenger.time}</Text>
        </View>
    );
};

export default NavBar;
