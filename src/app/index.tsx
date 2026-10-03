import { Text, View, StyleSheet, Image, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../Components/button";
import { router } from "expo-router";
export default function index() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <Image source={require("../../assets/images/logo/logo.jpg")}
          style={{ width, height, position: 'absolute' }}
          resizeMode="cover" />
        <View style={styles.texContainer}>
          <Text style={styles.title}>Bienvenido a hyrule shop.</Text>
          <Text style={styles.subtext}>¿Qué deseas a comprar hoy?</Text>
          <Button
            text="Comprar"
            onPress={() => router.push("/catalog")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
    backgroundColor: "#000015",


  },
  texContainer: {
    position: "relative",
    top: 200,
    alignItems: "center",
    gap: 12,
  },

  logo: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    width: "100%",
    height: "100%",

  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },

  subtext: {
    fontSize: 20,
    color: "#46ff50",
    textAlign: "center",
  },

  customButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    top: 30,

  },

  buttonText: {
    fontSize: 26,
    color: "#46ff50",
    textAlign: "center",
  }

});
