"use client";
import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface FoodCardProps {
    title: string;
    details: string;
    price: number;
    image: string;
    quantity?: number;
}

export default function FoodCard({ title, details, price, image, quantity = 0 }: FoodCardProps) {
    const [qty, setQty] = useState(quantity);

    return (
        <div className="w-[240px] h-[310px] shrink-0 bg-white rounded-[20px] pb-4 border border-[#CECECF] flex flex-col group overflow-hidden transition-all duration-300">
            <div className="relative w-full h-[146px] shrink-0 overflow-hidden mb-3 bg-gray-50 border-b border-[#CECECF] rounded-[20px]">
                <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500 rounded-[20px]"
                />
            </div>

            <div className="px-4 pt-1 flex flex-col flex-1">
                <div className="mb-1">
                    <h3 className="font-bold text-[#1a1a1a] text-[14px] leading-tight line-clamp-1">{title}</h3>
                </div>
                <p className="text-[10px] text-[#8b8b8b] leading-tight min-h-[30px] font-medium">
                    {details}
                </p>

                <div className="font-black text-[#1a1a1a] text-[16px] mt-auto mb-3.5">
                    ₦{price.toLocaleString()}
                </div>

                <div className="flex items-center justify-between gap-2 w-full">
                    <button 
                        onClick={() => setQty(Math.max(0, qty - 1))}
                        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-[#CECECF] bg-[#f9f9f9] text-[#cececf] hover:text-[#8b8b8b] hover:bg-gray-100 transition-colors"
                    >
                        <Icon icon="ic:round-minus" width="18" height="18" />
                    </button>
                    <div className="flex-1 h-8 flex items-center justify-center rounded-full bg-[#f9f9f9]">
                        <span className="font-bold text-[#8b8b8b] text-[13px]">{qty}</span>
                    </div>
                    <button 
                        onClick={() => setQty(qty + 1)}
                        className="w-8 h-8 shrink-0 flex items-center justify-center rounded-full border border-[#f95e34]/30 bg-[#fff5f2] text-[#f95e34] hover:bg-[#ffece6] transition-colors"
                    >
                        <Icon icon="ic:round-plus" width="18" height="18" />
                    </button>
                </div>
            </div>
        </div>
    );
}
