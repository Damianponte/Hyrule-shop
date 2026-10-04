import { useWindowDimensions, View, Text, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Button from "../../Components/button";
import ProductCard from "../../Components/ProductCard";
import products from "../../Data/Products.json";

export default function catalog() {
    const { width, height } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.texContainer}>
                <Text style={styles.title}>Estos son nuestros productos.</Text>
            </View>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProductCard product={item} />
                )}
                contentContainerStyle={styles.productList}
            />
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
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: 50,
        gap: 20,
        backgroundColor: "#0B1620",
    },
    texContainer: {

        position: "relative",
        alignItems: "center",
        gap: 12,
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

    }


});

