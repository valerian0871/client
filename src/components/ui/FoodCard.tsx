import Image from "next/image";
import { Heart, Minus, Plus } from "lucide-react";

interface FoodCardProps {
    title: string;
    details: string;
    price: number;
    image: string;
    quantity?: number;
}

export default function FoodCard({ title, details, price, image, quantity = 0 }: FoodCardProps) {
    return (
        <div className="bg-white rounded-[32px] p-2 pb-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 flex flex-col group hover:shadow-lg transition-all duration-300">
            <div className="relative w-full aspect-4/3 rounded-[24px] overflow-hidden mb-4 bg-gray-50">
                <Image
                    src={image}
                    alt={title}
                    fill
                    unoptimized
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <button className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full text-gray-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm">
                    <Heart size={18} />
                </button>
            </div>

            <div className="px-3">
                <div className="mb-1">
                    <h3 className="font-bold text-gray-900 text-[15px] leading-tight">{title}</h3>
                </div>
                <p className="text-[12px] text-gray-400 leading-snug mb-4 line-clamp-2 min-h-[34px] font-medium">
                    {details}
                </p>

                <div className="font-extrabold text-[#f95e34] text-xl mb-4">
                    ₦{price.toLocaleString()}
                </div>

                <div className="flex items-center justify-between border border-gray-100 rounded-full p-1 bg-[#fafafa]">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-400 shadow-sm hover:text-gray-900 hover:bg-gray-50 transition-colors">
                        <Minus size={18} />
                    </button>
                    <span className="font-bold text-gray-900 text-sm">{quantity}</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-[#ffece6] text-[#f95e34] shadow-sm hover:bg-[#ffd9cc] transition-colors">
                        <Plus size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
