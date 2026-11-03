import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import productImages from "../../Components/productImages";
import productsData from "../../Data/Products.json";
import Button from "../../Components/button";


export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768;

    const product = productsData.find((item) => item.id.toString() === id);

    if (!product) {
        return (
            <SafeAreaView style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Producto no encontrado</Text>
                <Button text="Volver al catálogo" onPress={() => router.push("/catalog")} />
            </SafeAreaView>
        );
    }

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
                <View style={[styles.card, isDesktop && styles.cardDesktop]}>
                    <View style={[styles.imageWrapper, isDesktop && styles.imageWrapperDesktop]}>
                        <Image
                            source={productImages[product.image]}
                            style={styles.productImage}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={[styles.infoWrapper, isDesktop && styles.infoWrapperDesktop]}>
                        <Text style={styles.category}>{product.category.toUpperCase()}</Text>
                        <Text style={styles.title}>{product.name}</Text>
                        <Text style={styles.price}>{product.price.toFixed(2)} €</Text>

                        <View style={styles.stockBadge}>
                            <Text style={styles.stockText}>Disponibles: {product.stock} unidades</Text>
                        </View>

                        <Text style={styles.descriptionTitle}>Descripción</Text>
                        <Text style={styles.description}>{product.description}</Text>
                    </View>
                </View>
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
    notFoundContainer: {
        flex: 1,
        backgroundColor: "#0B1620",
        justifyContent: "center",
        alignItems: "center",
        gap: 16,
    },
    notFoundText: {
        color: "#F8FAFC",
        fontSize: 20,
        fontWeight: "bold",
    },
    card: {
        width: "100%",
        backgroundColor: "#0F1A24",
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#1E293B",
        padding: 16,
        gap: 20,
    },
    cardDesktop: {
        flexDirection: "row",
        maxWidth: 900,
        padding: 32,
        alignItems: "flex-start",
    },
    imageWrapper: {
        width: "100%",
        height: 240,
        backgroundColor: "#1E293B",
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
    },
    imageWrapperDesktop: {
        width: "45%",
        height: 360,
    },
    productImage: {
        width: "100%",
        height: "100%",
    },
    infoWrapper: {
        width: "100%",
        gap: 12,
    },
    infoWrapperDesktop: {
        width: "50%",
        paddingLeft: 12,
    },
    category: {
        color: "#2DD4BF",
        fontSize: 12,
        fontWeight: "bold",
        letterSpacing: 1,
    },
    title: {
        color: "#F8FAFC",
        fontSize: 24,
        fontWeight: "bold",
    },
    price: {
        color: "#F59E0B",
        fontSize: 26,
        fontWeight: "bold",
    },
    stockBadge: {
        alignSelf: "flex-start",
        backgroundColor: "#1E293B",
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "#334155",
    },
    stockText: {
        color: "#94A3B8",
        fontSize: 12,
    },
    descriptionTitle: {
        color: "#F8FAFC",
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
    },
    description: {
        color: "#94A3B8",
        fontSize: 14,
        lineHeight: 22,
    },


});