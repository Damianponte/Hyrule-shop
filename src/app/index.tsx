import { Text, View, StyleSheet, useWindowDimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../Components/button";
import { router } from "expo-router";
export default function index() {
  const { width } = useWindowDimensions();

  const isMobile = width < 600;
  const isTablet = width >= 600 && width < 1024;

  const heroWidth = isMobile
    ? "100%"
    : isTablet
      ? "85%"
      : "70%";
  return (
    <SafeAreaView style={styles.container}>


      <View style={[styles.heroContent, { width: heroWidth },]}>

        <Text style={styles.subtext}>COLECCION EXCLUSIVA</Text>
        <Text style={styles.title}>Tesorería Real de Hyrule</Text>
        <Text style={styles.description}>
          Equipamiento Lengendario, artefactos,y elixires para los heroes mas exigentes.
        </Text>
        <Button
          text="Explorar catalogo"
          onPress={() => router.push("/catalog")}
        />
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
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#111827",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#1F2937",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.5)",
    gap: 16,
  },

  description: {
    fontSize: 14,
    color: "#94A3B8",
    textAlign: "center",
    margin: 20,
  },



  title: {
    fontSize: 32,
    fontWeight: "bold",
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
    fontWeight: "bold",
  },


});
