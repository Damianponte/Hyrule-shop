import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";


export interface CartItem {
    id: number | string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}
type CartProduct = Omit<CartItem, "quantity">;

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: CartProduct) => void;
    removeFromCart: (productId: number | string) => void;
    deleteFromCart: (productId: number | string) => void;
    clearCart: () => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: CartProduct) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }

            return [...prevCart, {
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            }];
        });
    };

    const removeFromCart = (productId: number | string) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === productId);
            if (existingItem && existingItem.quantity > 1) {
                return prevCart.map((item) =>
                    item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }

            return prevCart.filter((item) => item.id !== productId);
        });
    };

    const deleteFromCart = (productId: number | string) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    const clearCart = () => setCart([]);

    const getTotalItems = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            deleteFromCart,
            clearCart,
            getTotalItems,
            getTotalPrice,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart debe usarse dentro de un CartProvider");
    }
    return context;
}


export function CartButton() {
    const { getTotalItems, getTotalPrice } = useCart();
    const hasItems = getTotalItems() > 0;

    return (
        <TouchableOpacity
            style={[
                styles.cartButton,
                hasItems && styles.cartButtonActive
            ]}
            activeOpacity={0.7}
            onPress={() => router.push("/carrito")}
            accessibilityRole="button"
            accessibilityLabel="Abrir carrito"
        >
            <MaterialIcons name="shopping-cart" size={14} color="#0F172A" />
            <Text style={[styles.cartButtonText, hasItems && styles.cartButtonTextActive]}>
                {getTotalItems()} uds · {getTotalPrice()} €
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    cartButton: {
        flexDirection: "row",
        alignItems: "center",
        gap: 3,
        height: 24,
        backgroundColor: "#1E293B",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#D4AF37",
        elevation: 4,
        boxShadow: "0px 4px 8px rgba(45, 212, 191, 0.25)",
    },
    cartButtonText: {
        color: "#0F172A",
        fontWeight: "bold",
        fontSize: 11,
    },
    cartButtonActive: {
        backgroundColor: "#5cdc38",
        borderColor: "#D4AF37",
        boxShadow: "0px 4px 8px rgba(92, 220, 56, 0.4)",
    },


    cartButtonTextActive: {
        color: "#0D131F",
    },

});