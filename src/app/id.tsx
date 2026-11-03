import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, useWindowDimensions } from "react-native";
import { SafeAreaView, } from "react-native-safe-area-context";
import { router, useLocalSearchParams } from "expo-router";
import productImages from "../../Components/productImages";
import productsData from "../../Data/Products.json";
import Button from "../../Components/button";
import { useCart } from "../../Components/cartComponent";


export default function ProductDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { width } = useWindowDimensions();
    const isDesktop = width >= 768;

    const product = productsData.find((item) => item.id.toString() === id);
    const { cart, addToCart, removeFromCart } = useCart();


    if (!product) {
        return (
            <SafeAreaView style={styles.notFoundContainer}>
                <Text style={styles.notFoundText}>Producto no encontrado</Text>
                <Button text="Volver al catálogo" onPress={() => router.push("/catalog")} />
            </SafeAreaView>
        );
    }

    const itemInCart = cart.find((item) => item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;

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

                        <View style={styles.cartActionsContainer}>
                            {quantity === 0 ? (
                                <TouchableOpacity
                                    style={styles.addCartBtn}
                                    onPress={() => addToCart(product)}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.addCartBtnText}>Añadir al carrito</Text>
                                </TouchableOpacity>
                            ) : (
                                <View style={styles.quantityControlsWrapper}>
                                    <View style={styles.inCartStatus}>
                                        <Text style={styles.inCartStatusText}>
                                            En el carrito ({quantity})
                                        </Text>
                                    </View>
                                    <View style={styles.quantityContainer}>
                                        <TouchableOpacity
                                            style={styles.qtyBtn}
                                            onPress={() => removeFromCart(product.id)}
                                            activeOpacity={0.7}
                                        >
                                            <Text style={styles.qtyBtnText}>-</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.qtyText}>{quantity}</Text>
                                        <TouchableOpacity
                                            style={styles.qtyBtn}
                                            onPress={() => addToCart(product)}
                                            activeOpacity={0.7}
                                        >
                                            <Text style={styles.qtyBtnText}>+</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                        </View>

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
    cartActionsContainer: {
        marginTop: 16,
        width: "100%",
    },
    addCartBtn: {
        backgroundColor: "#2DD4BF",
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    addCartBtnText: {
        color: "#0F172A",
        fontSize: 16,
        fontWeight: "bold",
    },
    quantityControlsWrapper: {
        gap: 10,
    },
    inCartStatus: {
        backgroundColor: "#1E293B",
        padding: 8,
        borderRadius: 6,
        alignItems: "center",
    },
    inCartStatusText: {
        color: "#2DD4BF",
        fontWeight: "bold",
        fontSize: 14,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0A0F17",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#2DD4BF",
        padding: 6,
    },
    qtyBtn: {
        backgroundColor: "#2DD4BF",
        width: 36,
        height: 36,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    qtyBtnText: {
        color: "#0F172A",
        fontSize: 20,
        fontWeight: "bold",
    },
    qtyText: {
        color: "#F8FAFC",
        fontSize: 16,
        fontWeight: "bold",
    },


});