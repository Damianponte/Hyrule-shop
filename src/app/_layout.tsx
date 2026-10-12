import { Stack } from "expo-router";
import { StatusBar, View, StyleSheet, Image } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000015" />
      <View style={styles.PrincipalContent}>
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.headerContainer}>
            <Image
              source={require("../../assets/images/logo/logo.jpg")}
              style={styles.logoImage}
              resizeMode="contain"
            />
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
  logoImage: {
    height: 30,
    width: 30,
    borderColor: "#D4AF37",
    borderRadius: 20,
    borderWidth: 1,
  },

  containerMain: {
    flex: 1,
    backgroundColor: "#0A0F17",
  },
});