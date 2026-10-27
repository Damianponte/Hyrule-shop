import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
    text: string;
    onPress: () => void;
};

const Button: React.FC<ButtonProps> = ({ text = "", onPress }) => (
    <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        activeOpacity={0.7}
    >
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 24,
        backgroundColor: "#2DD4BF",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D4AF37",
        elevation: 4,
        boxShadow: "0px 4px 8px rgba(45, 212, 191, 0.25)",
    },
    text: {
        color: "#0F172A",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 11,
    },
});


export default Button;
