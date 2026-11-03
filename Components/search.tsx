import React, { useState } from "react";
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import productsData from "../Data/Products.json";

export type Product = (typeof productsData)[0];

interface SearchProps {
    onSearch?: (results: Product[], query: string) => void;
    onClear?: () => void;
    placeholder?: string;
}

export default function Search(
    {
        onSearch, onClear, placeholder = "Buscar producto..."
    }: SearchProps) {

    const [searchQuery, setSearchQuery] = useState("");
    const [results, setResults] = useState<Product[]>([]);
    const { width: screenWidth } = useWindowDimensions();
    const isDesktop = screenWidth >= 768;
    const [isExpanded, setIsExpanded] = useState(false);
    const searchWidth = Math.min(screenWidth * 0.28, 220);
    const mobileSearchWidth = Math.min(screenWidth * 0.5, 190);

    const executeSearch = (text: string) => {
        const query = text.trim();

        if (!query) {
            setResults([]);
            if (onClear) onClear();
            if (onSearch) onSearch(productsData, "");
            return;
        }

        const normalize = (str: string) =>
            str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

        const normalizedQuery = normalize(query);
        const priceQuery = query.replace(/[€$£]/g, "").trim().replace(",", ".");
        const isPriceQuery = /^\d+(?:\.\d+)?$/.test(priceQuery);
        const numericPrice = isPriceQuery ? Number(priceQuery) : NaN;
        const idQuery = query.replace(/^#/, "");

        const filteredProducts = productsData.filter((product) => {
            const matchesId = product.id?.toString() === idQuery;

            const matchesName = product.name
                ? normalize(product.name).includes(normalizedQuery)
                : false;

            const matchesPrice =
                isPriceQuery &&
                product.price !== undefined &&
                product.price === numericPrice;

            const matchesCategory = product.category
                ? normalize(product.category).includes(normalizedQuery)
                : false;

            const matchesDescription = product.description
                ? normalize(product.description).includes(normalizedQuery)
                : false;

            return (
                matchesId || matchesName || matchesPrice || matchesCategory || matchesDescription
            );
        });

        setResults(filteredProducts);
        if (onSearch) onSearch(filteredProducts, query);
    };

    const handleTextChange = (text: string) => {
        setSearchQuery(text);
        executeSearch(text);
    };

    const handleClear = () => {
        setSearchQuery("");
        setResults([]);
        if (onClear) onClear();
        if (onSearch) onSearch(productsData, "");
    };

    const handleClose = () => {
        Keyboard.dismiss();
        handleClear();
        setIsExpanded(false);
    };

    return (
        <View style={[styles.container, { width: isDesktop ? searchWidth : 36 }]}>
            {!isDesktop && !isExpanded ? (
                <TouchableOpacity
                    accessibilityLabel="Abrir búsqueda de productos"
                    accessibilityRole="button"
                    onPress={() => setIsExpanded(true)}
                    style={styles.mobileSearchButton}
                    activeOpacity={0.7}
                >
                    <MaterialIcons name="search" style={styles.mobileSearchIcon} />
                </TouchableOpacity>
            ) : (
                <View
                    style={[
                        styles.searchContainer,
                        !isDesktop && styles.mobileExpandedSearch,
                        !isDesktop && { width: mobileSearchWidth },
                    ]}
                >
                    <MaterialIcons name="search" style={styles.icon} />
                    <TextInput
                        style={styles.inputSearch}
                        placeholder={placeholder}
                        placeholderTextColor="#64748B"
                        value={searchQuery}
                        onChangeText={handleTextChange}
                        returnKeyType="search"
                        keyboardType="default"
                        onSubmitEditing={() => Keyboard.dismiss()}
                        blurOnSubmit
                        autoCorrect={false}
                        autoCapitalize="none"
                        autoComplete="off"
                        importantForAutofill="no"
                        autoFocus={!isDesktop}
                        accessibilityLabel="Buscar productos"
                    />
                    {isDesktop && searchQuery.length > 0 && (
                        <TouchableOpacity onPress={handleClear} style={styles.clearBtn} activeOpacity={0.7}>
                            <MaterialIcons name="close" style={styles.iconClose} />
                        </TouchableOpacity>
                    )}
                    {!isDesktop && (
                        <TouchableOpacity
                            accessibilityLabel="Cerrar búsqueda de productos"
                            accessibilityRole="button"
                            onPress={handleClose}
                            style={styles.clearBtn}
                            activeOpacity={0.7}
                        >
                            <MaterialIcons name="close" style={styles.iconClose} />
                        </TouchableOpacity>
                    )}
                </View>
            )}
            {searchQuery.trim().length > 0 && (
                <View
                    style={[
                        styles.resultsContainer,
                        !isDesktop && {
                            left: undefined,
                            width: mobileSearchWidth,
                        },
                    ]}
                >
                    {results.length > 0 ? (
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            style={styles.resultsList}
                        >
                            {results.map((product) => (
                                <View key={product.id} style={styles.resultItem}>
                                    <Text style={styles.resultName}>{product.name}</Text>
                                    <Text style={styles.resultPrice}>€{product.price}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    ) : (
                        <Text style={styles.noResults}>No se encontraron productos</Text>
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: "relative",
        zIndex: 10000,
    },
    mobileSearchButton: {
        width: 36,
        height: 36,
        alignItems: "center",
        justifyContent: "center",
    },
    mobileSearchIcon: {
        fontSize: 20,
        color: "#2DD4BF",
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
        width: "100%",
    },
    mobileExpandedSearch: {
        position: "absolute",
        top: 20,
        right: 0,
        zIndex: 10001,
        elevation: 11,
    },
    icon: {
        fontSize: 18,
        color: "#2DD4BF",
        marginRight: 8,
    },
    inputSearch: {
        flex: 1,
        minWidth: 0,
        color: "#F8FAFC",
        fontSize: 13,
        height: "100%",
        paddingVertical: 0,
    },
    clearBtn: {
        padding: 4,
    },
    iconClose: {
        color: "#94A3B8",
        fontSize: 16,
    },
    resultsContainer: {
        position: "absolute",
        top: 46,
        left: 0,
        right: 0,
        backgroundColor: "#111827",
        borderColor: "#334155",
        borderWidth: 1,
        borderRadius: 8,
        zIndex: 10000,
        elevation: 10,
    },
    resultsList: {
        maxHeight: 220,
    },
    resultItem: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 9,
        borderBottomColor: "#334155",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    resultName: {
        flex: 1,
        color: "#F8FAFC",
        fontSize: 13,
        marginRight: 8,
    },
    resultPrice: {
        color: "#2DD4BF",
        fontSize: 12,
    },
    noResults: {
        color: "#94A3B8",
        fontSize: 13,
        padding: 10,
    },

})