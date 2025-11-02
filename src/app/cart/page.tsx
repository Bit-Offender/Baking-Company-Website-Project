"use client";

import { useCart } from "@/context/cartContext";

export default function Cart() {
    const { cart } = useCart();
    
    return (
        <div className="mx-10 mt-10">
            <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
            
            <div className="space-y-4">
                {cart.cake1 > 0 && (
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold">Coffee Cake</h3>
                        <p>Quantity: {cart.cake1}</p>
                        <p>Price: ₹{cart.cake1 * 500}</p>
                    </div>
                )}
                
                {cart.cake2 > 0 && (
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold">Chocolate Cake</h3>
                        <p>Quantity: {cart.cake2}</p>
                        <p>Price: ₹{cart.cake2 * 500}</p>
                    </div>
                )}
                
                {cart.cake3 > 0 && (
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-bold">Butterscotch Cake</h3>
                        <p>Quantity: {cart.cake3}</p>
                        <p>Price: ₹{cart.cake3 * 500}</p>
                    </div>
                )}
                
                <div className="mt-6 text-xl font-bold">
                    Total: ₹{(cart.cake1 + cart.cake2 + cart.cake3) * 500}
                </div>
            </div>
        </div>
    );
}