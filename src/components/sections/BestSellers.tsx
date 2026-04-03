"use client";
import { useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import FoodCard from "../ui/FoodCard";
import { Icon } from "@iconify/react";

const BEST_SELLERS = [
    { title: "Full Flame Grill Chicken", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 7500, image: "/images/food.png", quantity: 0 },
    { title: "Jollof Rice & Grill Chicken", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 4500, image: "/images/food.png", quantity: 0 },
    { title: "Fried Rice and Turkey", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 5200, image: "/images/food.png", quantity: 0 },
    { title: "Ofada Rice and Assorted Meat", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 6500, image: "/images/food.png", quantity: 0 },
    { title: "Pounded Yam with Egusi Soup", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 5500, image: "/images/food.png", quantity: 0 },
    { title: "Beef Suya in Pitta", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 3500, image: "/images/food.png", quantity: 0 },
    { title: "Peppered Fish with Plantain", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 5000, image: "/images/food.png", quantity: 0 },
    { title: "Goat Meat Spicy Soup", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 4000, image: "/images/food.png", quantity: 0 },
    { title: "Fisherman Soup", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 10500, image: "/images/food.png", quantity: 0 },
    { title: "Stir fry spaghetti", details: "By the best chef in town, available in African Culinary, Grills and Pasta", price: 4500, image: "/images/food.png", quantity: 0 },
];

export default function BestSellers() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir === "right" ? 500 : -500, behavior: "smooth" });
    };

    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-6 px-4 md:px-0">
                <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[55px] text-[#1a1a1a] flex items-baseline gap-2">
                    Best Sellers - <span className="text-[24px] font-bold tracking-[0] leading-[55px]">(Meal packs)</span>
                </h2>
                <span className="text-blue-500 font-bold text-[13px] sm:hidden cursor-pointer hover:underline">
                    See all
                </span>
                <div className="hidden sm:flex items-center gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#ff4700] hover:text-[#ff4700] transition-colors bg-white shadow-sm"
                    >
                        <Icon icon="solar:alt-arrow-left-line-duotone" width="20" height="20" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#ff4700] hover:text-[#ff4700] transition-colors bg-white shadow-sm"
                    >
                        <Icon icon="solar:alt-arrow-right-line-duotone" width="20" height="20" />
                    </button>
                </div>
            </div>
            
            <div ref={scrollRef} className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 md:px-0 lg:gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {BEST_SELLERS.map((item, idx) => (
                    <div key={idx} className="shrink-0 snap-center flex justify-center">
                        <FoodCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
}
