import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
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
    const { addToCart } = useCart();
    const { width } = useWindowDimensions();
    const isDesktop = width > 600;
    return (
        <View style={[styles.card, isDesktop ? styles.desktopCard : styles.mobileCard]}>
            <View style={styles.imageContainer}>

                <Image
                    source={Images[product.image]}
                    style={styles.Image}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.groupNamePrice}>
                <Text style={styles.name}>
                    {product.name}
                </Text>
                <Text style={styles.price}>
                    {product.price + " €"}
                </Text>
                <Button
                    text="Añadir"

                    onPress={() => addToCart(product)}
                />
            </View>


        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: "100%",
        backgroundColor: "#1E293B",
        borderColor: "#334155",
        borderWidth: 1,
        borderRadius: 16,
        padding: 15,
        marginVertical: 10,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.3)",
        justifyContent: "space-between",
        alignItems: "center",

    },


    imageContainer: {
        width: "100%",
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,

    },

    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#F8FAFC",
        padding: 10,
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
        width: "48%",
    },
    Image: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,

    },
    groupNamePrice: {
        flexDirection: "row",
    }

});