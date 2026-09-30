import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000015" />
      <Stack
        screenOptions={
          {
            headerShown: false,
            contentStyle: { backgroundColor: "#000015" }
          }
        }
      />
    </SafeAreaProvider>
  );
}