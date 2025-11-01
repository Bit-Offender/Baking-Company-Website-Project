//src/app/orders/page.tsx
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import { Minus, Plus } from "lucide-react"
import Script from "next/script"
import { useEffect, useState } from "react"

export default function Orders() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        const savedCount1 = localStorage.getItem('count1')
        const savedCount2 = localStorage.getItem('count2')
        const savedCount3 = localStorage.getItem('count3')

        if (savedCount1) setCount1(Number(savedCount1))
        if (savedCount2) setCount2(Number(savedCount2))
        if (savedCount3) setCount3(Number(savedCount3))
        
        setIsFirstRender(false)
    }, [])

    useEffect(() => {
        if (isFirstRender) return;
        
        localStorage.setItem('count1', count1.toString())
        localStorage.setItem('count2', count2.toString())
        localStorage.setItem('count3', count3.toString())
    }, [count1, count2, count3])

    const increment1 = () => {
        setCount1(prevCount1 => prevCount1 + 1);
    }

    const decrement1 = () => {
        setCount1(prevCount1 => prevCount1 - 1);
    }

    const increment2 = () => {
        setCount2(prevCount2 => prevCount2 + 1);
    }

    const decrement2 = () => {
        setCount2(prevCount2 => prevCount2 - 1);
    }

    const increment3 = () => {
        setCount3(prevCount3 => prevCount3 + 1);
    }

    const decrement3 = () => {
        setCount3(prevCount3 => prevCount3 - 1);
    }
    
    useEffect(() => { 

        if (isFirstRender) return;

        if(count1 <= 0){
            setCount1(0);
        }
        if(count2 <= 0){
            setCount2(0);
        }
        if(count3 <= 0){
            setCount3(0);
        }        
    }, [count1, count2, count3])

    return (
        <>
        <div className="grid grid-cols-3 gap-10 mx-10 mt-10 mb-10">
            <Card className="shadow-2xl">
                <CardHeader>
                    <CardTitle>Coffee Cake</CardTitle>
                    <CardDescription>100g</CardDescription>
                </CardHeader>
                <CardContent>
                    <Image src="/cake1.png" alt="cake1" width={500} height={500} className="object-contain rounded-lg"></Image>
                    <p className="font-semibold tracking-wide text-lg mt-3 text-black">Creamy Coffee with Coffee Beans inside</p>
                </CardContent>
                <CardFooter>
                    <div className="flex gap-10 items-center mr-1">
                            <div>
                                <p>Price: ₹ 500</p>
                                <p>Quantity: 1</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="mr-1" onClick={increment1}>Add to cart</button>
                                <button id="plus1"   onClick={increment1}><Plus size={17} className="mt-1"/></button>
                                <h6 id="count1">{ count1 }</h6>
                                <button id="minus1" onClick={decrement1}><Minus size={17} className="mt-1"/></button>
                            </div>
                        </div>
                </CardFooter>
            </Card>
            <Card className="shadow-2xl">
                <CardHeader>
                    <CardTitle>Chocolate Cake</CardTitle>
                    <CardDescription>100g</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <Image src="/cake2.png" alt="cake2" width={500} height={500} className="object-contain rounded-lg"></Image>
                        <p className="font-semibold tracking-wide text-lg mt-3 text-black">Amazing Melted Chocolate with Chocolate Syrup</p>
                    </CardDescription>
                </CardContent>
                <CardFooter>
                    <div className="flex gap-10 items-center mr-1">
                            <div>
                                <p>Price: ₹ 500</p>
                                <p>Quantity: 1</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="mr-1" onClick={increment2}>Add to cart</button>
                                <button id="plus2" onClick ={increment2}><Plus size={17} className="mt-1"/></button>
                                <h6 id="count2">{count2}</h6>
                                <button id="minus2" onClick = {decrement2}><Minus size={17} className="mt-1"/></button>
                            </div>
                        </div>
                </CardFooter>
            </Card>
            <Card className="shadow-2xl">
                <CardHeader>
                    <CardTitle>Butterscotch Cake</CardTitle>
                    <CardDescription>100g</CardDescription>
                </CardHeader>
                <CardContent>
                    <CardDescription>
                        <Image src="/cake3.png" alt="cake3" width={500} height={500} className="object-contain rounded-lg"></Image>
                        <p className="font-semibold tracking-wide text-lg mt-3 text-black">Rich Delicious Butterscotch from the Dutch</p>
                    </CardDescription>
                </CardContent>
                <CardFooter>
                        <div className="flex gap-10 items-center mr-1">
                            <div>
                                <p>Price: ₹ 500</p>
                                <p>Quantity: 1</p>
                            </div>
                            <div className="flex gap-4">
                                <button className="mr-1" onClick={increment3}>Add to cart</button>
                                <button id="plus3" onClick = {increment3}><Plus size={17} className="mt-1"/></button>
                                <h6 id="count3">{count3}</h6>
                                <button id="minus3" onClick = {decrement3}><Minus size={17} className="mt-1"/></button>
                            </div>
                        </div>
                </CardFooter>
            </Card>
        </div>
        </>
    )
}