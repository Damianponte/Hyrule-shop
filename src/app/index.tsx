import { Text, View, StyleSheet, Image, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../Components/button";
import { router } from "expo-router";
export default function index() {
  const { width, height } = useWindowDimensions();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.heroContent}>
        <View style={styles.texContainer}>
          <Text style={styles.subtext}>COLECCION EXCLUSIVA</Text>
          <Text style={styles.title}>Tesoreria Real de Hyrule</Text>
          <Text style={styles.description}>
            Equipamiento Lengendario, artefactos,y elixires para los heroes mas exigentes.
          </Text>

          <Button
            text="Explorar catalogo"
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
    padding: 24,
    backgroundColor: "#0A0F17",


  },
  heroContent: {
    alignItems: "center",
    maxWidth: 480,
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#111827",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1F2937",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },

  description: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    marginBottom: 32,
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
    fontWeight: "300",


  },

  title: {
    fontSize: 32,
    fontWeight: "300",
    color: "#F8FAFC",
    textAlign: "center",
    marginBottom: 16,
    fontFamily: "System",

  },

  subtext: {
    fontSize: 20,
    color: "#D4AF37",
    textAlign: "center",
    marginBottom: 12,
  },


});
