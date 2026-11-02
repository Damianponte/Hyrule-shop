import react, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";


interface SearchProps {
    onSearch?: (text: string) => void;
    onClear?: () => void;
}

export default function Search({ onSearch, onClear }: SearchProps) {

    const [searchQuery, setSearchQuery] = useState("");

    const handleTextChange = (text: string) => {
        setSearchQuery(text);
        if (onSearch) {
            onSearch(text);
        }
    };

    const handleClear = () => {
        setSearchQuery("");
        if (onClear) {
            onClear();
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <MaterialIcons name="search" style={styles.icon} />
                <TextInput
                    style={styles.inputSearch}
                    placeholder="Buscar por ID, nombre, precio, categoría..."
                    placeholderTextColor="#64748B"
                    value={searchQuery}
                    onChangeText={handleTextChange}
                    returnKeyType="search"
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={handleClear} style={styles.clearBtn} activeOpacity={0.7}>
                        <MaterialIcons name="close" style={styles.iconClose} />
                    </TouchableOpacity>
                )}
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
        color: "#154c83",
        fontSize: 18,
        height: "100%",
    },
    iconClose: {
        flex: 1,
        color: "#154c83",
        fontSize: 18,
        height: "100%",
    },
    clearBtn: {
        padding: 4,
    },

})