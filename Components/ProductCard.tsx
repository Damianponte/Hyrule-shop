import { StyleSheet, View, Text, useWindowDimensions, Image } from "react-native";

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
    const { width } = useWindowDimensions();
    const isDesktop = width > 600;
    return (
        <View style={[styles.card, isDesktop ? styles.desktopCard : styles.mobileCard]}>

            <Text style={styles.id}>
                {product.id}
            </Text>

            <Image
                source={Images[product.image]}
                style={styles.Image}
                resizeMode="contain"
            />

            <Text style={styles.name}>
                {product.name}
            </Text>
            <Text style={styles.price}>
                {product.price}
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({

    card: {
        width: "100%",
        backgroundColor: "#d4b886",
        borderColor: "#4a3018",
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        alignContent: "center",
        alignItems: "center",

    },


    id: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4a3018",
        padding: 20,


    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#2a1b0a",
        padding: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#1a4d2e",
        padding: 10,

    },
    desktopCard: {
        width: 330,
    },
    mobileCard: {
        width: "100%",
    },
    Image: {
        width: 100,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 15,

    }

});