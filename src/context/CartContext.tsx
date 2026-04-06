"use client";

import React, { createContext, useContext, useState } from "react";

interface CartContextType {
    totalCartItems: number;
    incrementCart: () => void;
    decrementCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
    const [totalCartItems, setTotalCartItems] = useState(0);

    const incrementCart = () => setTotalCartItems(prev => prev + 1);
    const decrementCart = () => setTotalCartItems(prev => Math.max(0, prev - 1));

    return (
        <CartContext.Provider value={{ totalCartItems, incrementCart, decrementCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}
