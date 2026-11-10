
import { router } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useCart, CartItem } from "../../Components/cartComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import productImages from "../../Components/productImages";


function CartProduct({ item }: { item: CartItem }) {
    const { removeFromCart, addToCart, deleteFromCart } = useCart();
    const subtotal = Number(item.price) * Number(item.quantity);
    const confirmDelete = () => {
        Alert.alert(
            "Eliminar producto",
            "¿Estás seguro de que deseas eliminar este producto del carrito?",
            [
                {
                    text: "Cancelar",
                    style: "cancel",
                },
                {
                    text: "Eliminar",
                    style: "destructive",
                    onPress: () => {
                        if ((deleteFromCart)) {
                            deleteFromCart(item.id);
                        } else {
                            removeFromCart(item.id);
                        }
                    },
                },
            ],
            { cancelable: true }
        );
    };

    return (
        <View style={styles.productCard}>
            <View style={styles.imageContainer}>
                <Image
                    source={productImages[item.image]}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.productDetails}>
                <View style={styles.productHeader}>
                    <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
                    <TouchableOpacity
                        style={styles.deleteButton}
                        onPress={() => deleteFromCart ? deleteFromCart(item.id) : removeFromCart(item.id)}>
                        <Text style={styles.deleteIcon}>✕</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.productPrice}>{item.price.toFixed(2)} €</Text>

                <View style={styles.productBottomRow}>
                    <View style={styles.quantityContainer}>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => removeFromCart(item.id)}>

                            <Text style={styles.quantityButtonText}> - </Text>
                        </TouchableOpacity>
                        <Text style={styles.quantityText}>{item.quantity}</Text>
                        <TouchableOpacity
                            style={styles.quantityButton}
                            onPress={() => addToCart(item)}>

                            <Text style={styles.quantityButtonText}> + </Text>

                        </TouchableOpacity>
                    </View>
                    <Text style={styles.subtotalText}>{subtotal.toFixed(2)}€</Text>
                </View>
            </View>
        </View>
    );
}

export default function CartPage() {
    const { cart, getTotalItems, getTotalPrice, clearCart } = useCart()


    const finishPurchase = () => {
        Alert.alert(
            "Confirmar pedido",
            "¿Estás seguro de que deseas finalizar la compra?",
            [
                {
                    text: "Cancelar",
                    style: "cancel"
                },
                {
                    text: "Sí, finalizar",
                    onPress: () => {
                        clearCart();
                        Alert.alert("¡Éxito!", "¡Pedido realizado con éxito!\nTe llegará muy pronto.");
                    }
                }
            ],
            { cancelable: true }
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.title}>Tu cesta</Text>

                {cart.length === 0 ? (
                    <View style={styles.emptyCart}>
                        <Text style={styles.emptyTitle}>Tu cesta está vacía</Text>
                        <TouchableOpacity
                            style={styles.catalogButton}
                            onPress={() => router.push("/catalog" as any)}
                        >
                            <Text style={styles.catalogButtonText}>Ir al catálogo</Text>
                        </TouchableOpacity>

                    </View>
                ) : (
                    <>
                        <View style={styles.cartItemsContainer}>
                            {cart.map((item) => (
                                <CartProduct key={item.id.toString()} item={item} />
                            ))}
                        </View>
                        <View style={styles.summary}>
                            <Text style={styles.summaryTitle}>Resumen del pedido</Text>

                            <View style={styles.separator} />

                            <View style={styles.summaryRow}>
                                <Text style={styles.itemCount}>Articulos ({getTotalItems()})</Text>
                                <Text style={styles.itemCountValue}>{getTotalPrice().toFixed(2)} €</Text>
                            </View>

                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Total</Text>
                                <Text style={styles.totalPrice}>{getTotalPrice().toFixed(2)} €</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.checkoutButton}
                                onPress={finishPurchase}
                            >
                                <Text style={styles.checkoutButtonText}>Finalizar compra</Text>
                            </TouchableOpacity>
                        </View>


                    </>
                )}


            </ScrollView>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B1620",

    },

    title: {
        color: "#F8FAFC",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 8,
    },
    content: {
        padding: 16,
        gap: 16,
    },
    imageContainer: {
        width: 80,
        height: 80,
        backgroundColor: "#1E293B",
        borderRadius: 8,
        padding: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    productHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
    },
    productBottomRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 8,
    },
    deleteButton: {
        padding: 4,
    },
    deleteIcon: {
        fontSize: 16,
        color: "#64748B",
        fontWeight: "bold",
    },

    emptyCart: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0F1A24",
        borderColor: "#2DD4BF",
        borderWidth: 1,
        borderRadius: 16,
        padding: 24,
        gap: 8,
    },
    emptyTitle: {
        color: "#F8FAFC",
        fontSize: 20,
        fontWeight: "bold",
    },

    emptyDescription: {
        color: "#2DD4BF",
        fontSize: 64
    },
    catalogButton: {
        backgroundColor: "#2DD4BF",
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
        marginTop: 8
    },
    catalogButtonText: {
        color: "#0F172A",
        fontWeight: "bold",
        fontSize: 16,

    },
    productCard: {
        backgroundColor: "#0F1A24",
        borderColor: "#1E293B",
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 16,
    },

    image: {
        width: "100%",
        height: "100%",
        borderRadius: 4,
    },
    cartItemsContainer: {
        gap: 12,
    },
    productDetails: {
        flex: 1,
        gap: 4,
        justifyContent: "space-between",
    },
    productName: {
        color: "#F8FAFC",
        fontSize: 16,
        fontWeight: "bold",
    },
    productPrice: {
        color: "#F59E0B",
        fontWeight: "bold",
        fontSize: 15,
    },
    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        marginTop: 8,
    },
    quantityButton: {
        backgroundColor: "#1E293B",
        width: 28,
        height: 28,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
    quantityButtonText: {
        color: "#2DD4BF",
        fontSize: 16,
        fontWeight: "bold",
    },
    quantityText: {
        color: "#F8FAFC",
        fontSize: 15,
        fontWeight: "bold",
    },
    summary: {
        backgroundColor: "#0F1A24",
        borderColor: "#1E293B",
        borderWidth: 1,
        borderRadius: 12,
        padding: 20,
        gap: 16,
        marginTop: 8,
    },
    summaryTitle: {
        color: "#F8FAFC",
        fontSize: 18,
        fontWeight: "bold",
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    itemCount: {
        color: "#94A3B8",
        fontSize: 15,
    },
    itemCountValue: {
        color: "#94A3B8",
        fontSize: 15,
    },
    subtotalText: {
        color: "#F59E0B",
        fontSize: 16,
        fontWeight: "bold",
    },

    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    totalLabel: {
        color: "#F8FAFC",
        fontSize: 18,
        fontWeight: "bold",
    },
    totalPrice: {
        color: "#F59E0B",
        fontSize: 24,
        fontWeight: "bold",
    },
    checkoutButton: {
        alignItems: "center",
        backgroundColor: "#2DD4BF",
        borderRadius: 8,
        padding: 16,
        marginTop: 8,
    },
    checkoutButtonText: {
        color: "#0F172A",
        fontWeight: "bold",
        fontSize: 16,
        textTransform: "uppercase",
    },

    separator: {
        height: 1,
        backgroundColor: "#1E293B",
    },
});