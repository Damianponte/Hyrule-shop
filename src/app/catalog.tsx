import { useWindowDimensions, View, Text, StyleSheet, FlatList, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Button from "../../Components/button";
import ProductCard from "../../Components/ProductCard";
import products from "../../Data/Products.json";

export default function catalog() {
    const { width, height } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>

            <ScrollView
                style={{ flex: 1 }}
                contentContainerStyle={styles.productList}
                showsVerticalScrollIndicator={true}
            >
                <View style={styles.texContainer}>
                    <Text style={styles.title}>Inventario</Text>

                </View>


                {products.map((item) => (
                    <ProductCard
                        key={item.id.toString()}
                        product={item}
                    />
                ))}

            </ScrollView>
            <View style={styles.buttonContainer}>
                <Button
                    text="volver <arriba>"
                    onPress={() => router.push("/catalog")}
                />
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0B1620",
    },
    texContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "#0B1620",

    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",

    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        right: 30,
        zIndex: 99,
    },

    productList: {
        flexGrow: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        paddingHorizontal: 40,
        paddingBottom: 100,
        gap: 20,

    }


});

