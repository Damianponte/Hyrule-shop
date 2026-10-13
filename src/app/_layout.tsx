import { Stack, router } from "expo-router";
import { StatusBar, View, StyleSheet, Image, Text, Linking } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Button from "../../Components/button";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={styles.PrincipalContent}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftBlock}>
              <Image
                source={require("../../assets/images/logo/logo.jpg")}
                style={styles.logoImage}
                resizeMode="contain"
              />
              <View>
                <Text style={styles.shopTitle}>HYRULE</Text>
                <Text style={styles.shopSubtitle}>SHOP</Text>
              </View>

            </View>
            <View style={styles.rightBlock}>
              <Button
                text="inicio"
                onPress={() => router.push("/")}
              />
              <Button
                text="catalogo"
                onPress={() => router.push("/catalog")}
              />
            </View>

          </View>

        </SafeAreaView>
      </View>
      <View style={styles.containerMain}>
        <Stack
          screenOptions={
            {
              headerShown: false,

            }
          }
        />
      </View>
      <View style={styles.ContainerFooter}>
        <View style={styles.leftFotter}>
          <Text style={styles.footerTitle}>@ Damian Ponte</Text>
          <Text
            style={styles.email}
            onPress={() => Linking.openURL('mailto:damianponte@hotmail.es')}
          >
            Contacto: Damian Ponte
          </Text>
        </View>
        <View style={styles.righttFotter}>
          <Text style={styles.footerTitleRight}>@Hyrule Kingdom</Text>
        </View>

      </View>

    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  PrincipalContent: {
    backgroundColor: "#0A0F15",
  },

  safeAreaContainer: {
    backgroundColor: "#0D131F",
    borderBottomWidth: 1,
    borderBottomColor: "#5cdc38"
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  leftBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,

  },
  logoImage: {
    height: 30,
    width: 30,
    borderColor: "#5cdc38",
    borderRadius: 20,
    borderWidth: 1,
  },
  shopTitle: {
    color: "#F8FAFC",
    fontSize: 15,
    fontWeight: "bold",

  },
  shopSubtitle: {
    color: "#F8FAFC",
    fontSize: 10,
    fontWeight: "bold",

  },
  rightBlock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },


  containerMain: {
    flex: 1,
    backgroundColor: "#0A0F17",
    borderBottomWidth: 1,
    borderBottomColor: "#5cdc38"

  },

  ContainerFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: "#0D131F",

  },

  leftFotter: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },

  footerTitle: {
    color: "#F8FAFC",
    fontSize: 15,
    fontWeight: "bold",
  },
  footerSubTitle: {
    color: "#F8FAFC",
    fontSize: 10,
    fontWeight: "bold",
  },

  email: {
    color: "#F8FAFC",
    fontSize: 15,
    fontWeight: "bold",
  },

  righttFotter: {
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 10,
  },

  footerTitleRight: {
    color: "#F8FAFC",
    fontSize: 15,
    fontWeight: "bold",
  }


});