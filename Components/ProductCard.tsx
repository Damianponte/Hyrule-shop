import { StyleSheet, View, Text } from "react-native";

type Product = {
    id: number;
    name: string;
    price: number;


};
type ProductCardProps = {
    product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.id}>
                {product.id}
            </Text>

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
    containerProductCard: {

    },

    card: {
        width: "20%",
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

        elevation: 4,
    },


    id: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#4a3018",
        padding: 10,

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

});