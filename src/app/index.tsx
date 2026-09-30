import { Text, View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (


    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido a hyrule shop.</Text>
        <Text style={styles.subtext}>¿Qué vas a comprar hoy?</Text>
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


  shopWindow: {

    width: "90%",
    maxWidth: 450,
    padding: 24,
    borderRadius: 8,
    backgroundColor: "rgba(5, 10, 60, 0.78)",
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.4)",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,

  },


  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  subtext: {
    fontSize: 16,
    color: "#46ff50",
    textAlign: "center",
  },
});
