
import { router } from "expo-router";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { useCart, CartItem } from "../../Components/cartComponent";
import { SafeAreaView } from "react-native-safe-area-context";
import productImages from "../../Components/productImages";


function CartProduct({ item }: { item: CartItem }) {
    const { removeFromCart, addToCart } = useCart();

    return (
        <View style={styles.productCard}>
            <Image
                source={productImages[item.image]}
                style={styles.image}
                resizeMode="contain"
            />
            <View style={styles.productDetails}>
                <Text style={styles.productName} numberOfLines={1}>{item.name}</Text>
                <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>

                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => removeFromCart(item.id)}>

                        <text style={styles.quantityButtonText}> - </text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity
                        style={styles.quantityButton}
                        onPress={() => addToCart(item)}>

                        <Text style={styles.quantityButtonText}> + </Text>

                    </TouchableOpacity>


                </View>
            </View>
        </View>
    );
}

export default function CartPage() {
    const { cart, } = useCart()

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
                    <View style={styles.cartItemsContainer}>
                        {cart.map((item) => (
                            <CartProduct key={item.id.toString()} item={item} />
                        ))}
                    </View>

                )}

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
        color: "#94A3B8",
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
});