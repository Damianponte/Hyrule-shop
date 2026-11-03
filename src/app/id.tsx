import React from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function ProductDetailScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => router.back()}
                    activeOpacity={0.7}
                >
                    <Text style={styles.backButtonText}>← Volver al catálogo</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B1620",
    },
    scrollContent: {
        padding: 16,
        alignItems: "center",
    },
    backButton: {
        alignSelf: "flex-start",
        marginBottom: 16,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "#1E293B",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#334155",
    },
    backButtonText: {
        color: "#2DD4BF",
        fontSize: 14,
        fontWeight: "bold",
    },
});