import { useWindowDimensions, View, Text, StyleSheet, FlatList, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Button from "../../Components/button";
import ProductCard from "../../Components/ProductCard";
import products from "../../Data/Products.json";

export default function catalog() {
    const { width, height } = useWindowDimensions();
    if (Platform.OS === 'web')
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.texContainer}>
                    <Text style={styles.title}>Estos son nuestros productos.</Text>

                </View>
                <View style={styles.productList}>
                    {products.map((item) => (
                        <ProductCard
                            key={item.id.toString()}
                            product={item}
                        />
                    ))}
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        text="volver atras"
                        onPress={() => router.push("/")}
                    />
                </View>
            </SafeAreaView>
        )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B1620",
        paddingTop: 20,
        flexWrap: "wrap",
    },
    texContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 50,
        gap: 20,
        backgroundColor: "#0B1620",
        position: "relative",
        margin: 50,

    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",

    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        right: 30,
    },

    productList: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: 10,



    }


});

