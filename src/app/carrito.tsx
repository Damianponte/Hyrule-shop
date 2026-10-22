
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useCart } from "../../Components/cartComponent";
import { SafeAreaView } from "react-native-safe-area-context";
export default function CartPage() {
    const { cart } = useCart()

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Tu cesta</Text>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B1620",

    },

    title: {
        color: "#F8FAFC",
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    content: {
        padding: 20,
        gap: 14,
    },



});