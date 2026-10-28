import { useAudioPlayer } from 'expo-audio';
import { Stack, router } from "expo-router";
import { useEffect } from 'react';
import { Image, Linking, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Button from "../../Components/button";
import { CartButton, CartProvider } from "../../Components/cartComponent";
import DropdownMenu from "../../Components/DropdownMenu";

const backMusic = require("../../assets/melodies/KokiriForest.mp3")

export default function RootLayout() {
  const { width } = useWindowDimensions();
  const isDesktop = width >= 768;

  const player = useAudioPlayer(backMusic);

  useEffect(() => {
    player.loop = true;

    player.volume = 0.5;
    player.play();
    return () => {

      player.pause();
    };
  },
    [player]);


  return (
    <CartProvider>
      <SafeAreaProvider>
        <View style={styles.PrincipalContent}>
          <SafeAreaView style={styles.safeAreaContainer}>
            <View style={[styles.headerContainer, isDesktop && styles.headerContainerDesktop]}>
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
                {isDesktop ? (

                  <>
                    <Button
                      text="inicio"
                      onPress={() => router.push("/")}
                    />
                    <Button
                      text="catalogo"
                      onPress={() => router.push("/catalog")}
                    />
                  </>
                ) : (

                  <DropdownMenu />
                )}
                <CartButton />
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
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  PrincipalContent: {
    backgroundColor: "#0A0F15",
    zIndex: 9999,
    elevation: 9999,

  },

  safeAreaContainer: {
    backgroundColor: "#0D131F",
    borderBottomWidth: 1,
    borderBottomColor: "#5cdc38",
    zIndex: 9999,
    elevation: 9999,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,

  },
  headerContainerDesktop: {
    padding: 10,
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
    zIndex: 9999,
    elevation: 9999,
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