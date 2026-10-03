import { useWindowDimensions, StyleSheet, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function productCard() {
    const { width, height } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.containerProductCard}>
            <View style={styles.card}>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    containerProductCard: {

    },

    card: {

    },

    image: {

    }
})