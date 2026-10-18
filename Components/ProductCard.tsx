import { Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import Button from "../Components/button";
import { useCart } from "../Components/cartComponent";

type Product = {
    image: string;
    id: number;
    name: string;
    price: number;

};
type ProductCardProps = {
    product: Product;

};
const Images: { [key: string]: any } = {
    "arrows.webp": require("../assets/images/arrows.webp"),
    "deku_nuts.webp": require("../assets/images/deku_nuts.webp"),
    "bombs.webp": require("../assets/images/bombs.webp"),
    "bombchus.webp": require("../assets/images/bombchus.webp"),
    "deku_shield.webp": require("../assets/images/deku_shield.webp"),
    "hylian_shield.webp": require("../assets/images/hylian_shield.webp"),
    "red_potion.webp": require("../assets/images/red_potion.webp"),
    "green_potion.webp": require("../assets/images/green_potion.webp"),
    "bottle.webp": require("../assets/images/bottle.webp"),
    "kokiri_sword.webp": require("../assets/images/kokiri_sword.webp"),
    "biggoron_sword.webp": require("../assets/images/biggoron_sword.webp"),
    "bomb_bag.webp": require("../assets/images/bomb_bag.webp"),
};

export default function ProductCard({ product }: ProductCardProps) {
    const { cart, addToCart, removeFromCart } = useCart();
    const { width } = useWindowDimensions();
    const isDesktop = width > 600;
    const itemInCart = cart.find((item) => item.id === product.id);
    const quantity = itemInCart ? itemInCart.quantity : 0;

    return (
        <View style={[styles.card, isDesktop ? styles.desktopCard : styles.mobileCard]}>
            <View style={styles.imageContainer}>

                <Image
                    source={Images[product.image]}
                    style={styles.Image}
                    resizeMode="contain"
                />
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
                <View style={styles.quantityContainer}>
                    <TouchableOpacity
                        style={styles.qtyBtn}
                        onPress={() => removeFromCart(product.id)}
                    >
                        <Text style={styles.qtyBtnText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.qtyText}>{quantity}</Text>
                    <TouchableOpacity
                        style={styles.qtyBtn}
                        onPress={() => addToCart(product)}
                    >
                        <Text style={styles.qtyBtnText}>+</Text>
                    </TouchableOpacity>
                </View>
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

    quantityContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "30%",
        backgroundColor: "#0A0F17",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#2DD4BF",
        padding: 2,
    },
    qtyBtn: {
        backgroundColor: "#2DD4BF",
        width: 28,
        height: 28,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
    },
    qtyBtnText: {
        color: "#0F172A",
        fontSize: 16,
        fontWeight: "bold",
    },
    qtyText: {
        color: "#F8FAFC",
        fontSize: 14,
        fontWeight: "bold",
    },
});