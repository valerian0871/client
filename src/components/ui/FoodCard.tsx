"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useCart } from "../../context/CartContext";

interface FoodCardProps {
    title: string;
    details: string;
    price: number;
    image: string;
    quantity?: number;
}

export default function FoodCard({ title, details, price, image, quantity = 0 }: FoodCardProps) {
    const [qty, setQty] = useState(quantity);
    const { incrementCart, decrementCart } = useCart();

    return (
        <div className="w-[240px] h-[310px] shrink-0 bg-white rounded-[32px] pb-4 border-[0.5px] border-[#CECECF] flex flex-col group overflow-hidden transition-all duration-300">
            <div className="relative w-full h-[146px] shrink-0 overflow-hidden mb-3 bg-gray-50 border-b-[0.5px] border-[#CECECF] rounded-t-[32px] rounded-b-[20px]">

                <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover scale-[1.15] group-hover:scale-125 transition-transform duration-500"
                />
            </div>

            <div className="px-4 pt-1 flex flex-col flex-1">
                <div className="mb-1">
                    <h3 className="font-bold text-[#1a1a1a] text-[14px] leading-tight line-clamp-1">{title}</h3>
                </div>
                <p className="text-[10px] text-[#8b8b8b] leading-tight min-h-[30px] font-medium line-clamp-3">
                    {details}
                </p>

                <div className="font-black text-[#1a1a1a] text-[16px] mt-auto mb-3.5">
                    ₦{price.toLocaleString()}
                </div>

                <div className="flex items-center justify-between gap-2 w-full">
                    <button
                        onClick={() => {
                            if (qty > 0) {
                                setQty(qty - 1);
                                decrementCart();
                            }
                        }}
                        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-[#CECECF] bg-[#f9f9f9] text-[#cececf] hover:text-[#8b8b8b] hover:bg-gray-100 transition-colors"
                    >
                        <Icon icon="ic:round-minus" className="w-[18px] h-[18px]" />
                    </button>
                    <div className="flex-1 h-8 flex items-center justify-center rounded-full bg-[#f9f9f9]">
                        <span className="font-bold text-[#8b8b8b] text-[13px]">{qty}</span>
                    </div>
                    <button
                        onClick={() => {
                            setQty(qty + 1);
                            incrementCart();
                        }}
                        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-[#FF4700] bg-[#FFD1BF] text-[#FF4700] hover:bg-[#ffc6b0] transition-colors"
                    >
                        <Icon icon="ic:round-plus" className="w-[18px] h-[18px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}
