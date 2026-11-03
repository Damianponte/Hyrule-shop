import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Button from "../Components/button";
import { useCart } from "../Components/cartComponent";
import productImages from "./productImages";
import { router } from "expo-router";

type Product = {
    image: string;
    id: number;
    name: string;
    price: number;

};
type ProductCardProps = {
    product: Product;

};

export default function ProductCard({ product }: ProductCardProps) {
    const { cart, addToCart } = useCart();
    const { width } = useWindowDimensions();
    const isDesktop = width > 600;
    const itemInCart = cart.find((item) => item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    return (
        <View style={[styles.card, isDesktop ? styles.desktopCard : styles.mobileCard]}>
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    onPress={() => router.push({ pathname: "/id" as any, params: { id: product.id } })}
                    activeOpacity={0.8}
                    style={styles.imageContainer}
                >
                    <Image
                        source={productImages[product.image]}
                        style={styles.Image}
                        resizeMode="contain"
                    />
                </TouchableOpacity>
            </View>

            <Text style={styles.name}>
                {product.name}
            </Text>
            <Text style={styles.price}>
                {product.price + " €"}
            </Text>

            {quantity === 0 ? (
                <Button
                    text="Añadir"

                    onPress={() => addToCart(product)}
                />
            ) : (

                <TouchableOpacity
                    style={styles.inCartBadge}
                    activeOpacity={0.8}
                    onPress={() => router.push({ pathname: "/id" as any, params: { id: product.id } })}
                >
                    <Text style={styles.inCartBadgeText}>En el carrito ({quantity})</Text>
                </TouchableOpacity>

            )}
        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: "100%",
        backgroundColor: "#1E293B",
        borderColor: "#2DD4BF",
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        marginVertical: 8,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        justifyContent: "space-between",
        alignItems: "center",

    },


    imageContainer: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,

    },

    name: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#F8FAFC",
        padding: 10,
        marginBottom: 4,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#F59E0B",
        padding: 10,

    },
    desktopCard: {
        width: 330,
    },
    mobileCard: {
        width: "47%",
    },
    Image: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",


    },

    inCartBadge: {
        width: "100%",
        height: 28,
        backgroundColor: "#0A0F17",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#2DD4BF",
        justifyContent: "center",
        alignItems: "center",
    },
    inCartBadgeText: {
        color: "#2DD4BF",
        fontSize: 12,
        fontWeight: "bold",
    },
});