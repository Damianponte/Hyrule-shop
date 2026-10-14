import React, { createContext, useContext, useState } from "react";
import Button from "./button";

interface CartItem {
    id: number | string;
    nombre: string;
    cantidad: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (product: any) => void;
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
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const getTotalItems = () => {
        return cart.reduce((sum, item) => sum + item.quantity, 0);
    };

    const getTotalPrice = () => {
        return cart.reduce((sum, item) => sum + (item.cantidad * item.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, getTotalItems, getTotalPrice }}>
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