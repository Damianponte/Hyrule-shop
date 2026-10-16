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
        margin: 5,
        backgroundColor: "#2DD4BF",
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderColor: "#D4AF37",
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        elevation: 4,
        boxShadow: "0px 4px 8px rgba(45, 212, 191, 0.25)",

    },
    text: {
        color: "#0F172A",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 14,
    },
});

export default Button;