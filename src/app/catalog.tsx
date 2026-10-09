import { useWindowDimensions, View, Text, StyleSheet, FlatList, Platform, ScrollView } from "react-native";
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

                <ScrollView
                    contentContainerStyle={styles.productList}
                    showsVerticalScrollIndicator={true}
                >
                    {products.map((item) => (
                        <ProductCard
                            key={item.id.toString()}
                            product={item}
                        />
                    ))}
                </ScrollView>

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
    },
    texContainer: {

        alignItems: "center",
        justifyContent: "center",
        padding: 50,
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
    },

    productList: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignContent: "flex-start",
        paddingHorizontal: 40,
        paddingBottom: 100,
        gap: 20,

    }


});

