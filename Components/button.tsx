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
        margin: 5,
        backgroundColor: "#1E293B",
        borderColor: "#D4AF37",
        width: 100,
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",

    },
    text: {
        color: "#FCD34D",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 10,
    },
});

export default Button;