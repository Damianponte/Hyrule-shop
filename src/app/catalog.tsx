import { useRef } from "react";
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../Components/button";
import ProductCard from "../../Components/ProductCard";
import products from "../../Data/Products.json";

export default function catalog() {
    const { width, height } = useWindowDimensions();
    const scrollViewRef = useRef<ScrollView>(null);

    const scrollToTop = () => {
        scrollViewRef.current?.scrollTo({ y: 0, animated: true });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                ref={scrollViewRef}
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
                    text="↑ Arriba"
                    onPress={scrollToTop}
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


    },

    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#ffffff",
        textAlign: "center",

    },
    buttonContainer: {
        position: "absolute",
        bottom: 30,
        right: 30,
        width: 80,
        zIndex: 99,
    },

    productList: {
        flexGrow: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        paddingHorizontal: 40,
        paddingBottom: 100,
        gap: 20,

    }


});

