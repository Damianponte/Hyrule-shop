import React, { createContext, useContext, useState } from "react";
import Button from "./button";

interface CartItem {
    id: number | string;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any) => void;
    removeFromCart: (productId: number | string) => void;
    getTotalItems: () => number;
    getTotalPrice: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: any) => {
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

    const getTotalItems = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, getTotalItems, getTotalPrice }}>
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

    return (
        <Button
            text={`🛒 ${getTotalItems()} uds (${getTotalPrice()} €)`}
            onPress={() => {
                alert(`uds: ${getTotalPrice()} Euros`);
            }}
        />
    );
}