import { Stack } from "expo-router";
import { StatusBar, View, StyleSheet, Image, Text } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000015" />
      <View style={styles.PrincipalContent}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.leftblock}>
              <Image
                source={require("../../assets/images/logo/logo.jpg")}
                style={styles.logoImage}
                resizeMode="contain"
              />
              <Text style={styles.shopTitle}>HYRULE</Text>
              <Text style={styles.shopSubtitle}>SHOP</Text>
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

    </SafeAreaProvider>
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
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  leftblock: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
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


  containerMain: {
    flex: 1,
    backgroundColor: "#0A0F17",
  },
});