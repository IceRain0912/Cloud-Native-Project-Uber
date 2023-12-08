import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#ffff",
        gap: 24
    },
    title: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 16
    },
    text: {
        color: "#4B4B4B",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "500",
        lineHeight: 18,
        padding: 8
    },
    input: {
        marginBottom: 16,
        borderWidth: 1,
    },
    chip: {
        display: "flex",
        paddingVertical: 16,
        paddingHorizontal: 8,
        alignItems: "flex-start",
        gap: 10,
        borderRadius: 20,
        backgroundColor: "#2E4374",
        width: 113,
        height: 54
    },
    chipText: {
        color: "#FFFF",
        fontFamily: "Lato, sans-serif",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 18,
    },
    chipGroup: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 16,
        marginBottom: 24
    },
    inputGroup: {
        marginBottom: 16
    },
    button: {
        backgroundColor: '#2E4374',
        padding: 10,
        borderRadius: 5,
        maxWidth: '100%',
    },
    buttonText: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: "center"
    },
    checkBox: {
        borderRadius: 20,
        borderColor: "#4B4B4B",
        width: 16,
        height: 16,
        marginBottom: 24
    },
    card: {
        backgroundColor: '#ffff',
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
    list: {
        diplay: "flex",
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    buttonGroup: {
        gap: 16
    }

})

export default styles;