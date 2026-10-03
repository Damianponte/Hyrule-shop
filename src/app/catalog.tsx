import { useWindowDimensions, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function catalog() {
    const { width, height } = useWindowDimensions();
    return (
        <SafeAreaView style={styles.container}>
            <view style={styles.backgroundColor}>
                <Text style={styles.title}>estos son nuestros productos.</Text>
            </view>
        </SafeAreaView>
    )
}
