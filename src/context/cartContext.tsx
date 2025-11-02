"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const CartContext = createContext<{
    cart: { cake1: number; cake2: number; cake3: number };
    increment: (cakeId: string) => void;
    decrement: (cakeId: string) => void;
} | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState({
        cake1: 0,
        cake2: 0,
        cake3: 0
    });
    
    const [isFirstRender, setIsFirstRender] = useState(true);
    
    const increment = (cakeId: string) => {
        setCart(prevCart => ({
            ...prevCart,
            [cakeId]: prevCart[cakeId as keyof typeof prevCart] + 1
        }));
    };
    
    const decrement = (cakeId: string) => {
        setCart(prevCart => ({
            ...prevCart,
            [cakeId]: Math.max(0, prevCart[cakeId as keyof typeof prevCart] - 1)
        }));
    };
    
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        setIsFirstRender(false);
    }, []);
    
    useEffect(() => {
        if (isFirstRender) return;
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart, isFirstRender]);
    
    return (
        <CartContext.Provider value={{ cart, increment, decrement }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}