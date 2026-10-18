import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function DropdownMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavigate = (path: string) => {
        setMenuOpen(false);
        router.push(path as any);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.menuButton}
                onPress={() => setMenuOpen(!menuOpen)}
                activeOpacity={0.7}
            >
                <Text style={styles.menuButtonText}>{menuOpen ? "✕" : "☰"}</Text>
            </TouchableOpacity>

            {menuOpen && (
                <View style={styles.dropdownContainer}>
                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => handleNavigate("/")}
                    >
                        <Text style={styles.dropdownText}>🏠 Inicio</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => handleNavigate("/catalog")}
                    >
                        <Text style={styles.dropdownText}>📦 Catálogo</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 9999,
    },
    menuButton: {
        backgroundColor: "#1E293B",
        borderColor: "#334155",
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 14,
        justifyContent: "center",
        alignItems: "center",
    },
    menuButtonText: {
        color: "#2DD4BF",
        fontSize: 18,
        fontWeight: "bold",
    },
    dropdownContainer: {
        position: "absolute",
        top: 50,
        right: 0,
        width: 160,
        backgroundColor: "#1E293B",
        borderRadius: 14,
        borderWidth: 1.5,
        borderColor: "#334155",
        paddingVertical: 6,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 20,
        zIndex: 99999,
    },
    dropdownItem: {
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    dropdownText: {
        color: "#F8FAFC",
        fontSize: 14,
        fontWeight: "600",
    },
});