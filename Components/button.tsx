import React from "react";

import { TouchableOpacity, StyleSheet, Text } from "react-native";

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
        padding: 10,
        marginVertical: 10,
        backgroundColor: "#1935ee",
        width: 100,
        borderRadius: 10,
    },
    text: {
        color: "white",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default Button;