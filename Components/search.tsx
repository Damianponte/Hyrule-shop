import react, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" style={styles.icon} />
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Buscar por ID, nombre, precio, categoría..."
                    placeholderTextColor="#64748B"
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                    returnKeyType="search"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#111827",
        borderColor: "#334155",
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 12,
        height: 42,
    },
    icon: {
        fontSize: 18,
        color: "#2DD4BF",
        marginRight: 8,
    },
    inputSearch: {
        flex: 1,
        color: "#F8FAFC",
        fontSize: 13,
        height: "100%",
    },
})