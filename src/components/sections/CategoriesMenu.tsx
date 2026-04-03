"use client";
import { useRef, useState } from "react";
import CategoryPill from "../ui/CategoryPill";
import { Icon } from "@iconify/react";

const CATEGORIES = [
    { title: "All meals", image: "/images/menu.png", isActive: true },
    { title: "Breakfast & Pastries", image: "/images/menu.png" },
    { title: "African Culinary & Grills", image: "/images/menu.png" },
    { title: "Continental Dishes", image: "/images/menu.png" },
    { title: "Rice & Pasta", image: "/images/menu.png" },
    { title: "Porridge & Soups", image: "/images/menu.png" },
    { title: "Noodles & others", image: "/images/menu.png" },
];

export default function CategoriesMenu() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    };

    return (
        <section className="mb-12 h-auto md:h-[140px] px-4 md:px-0 flex flex-col justify-center border-t border-gray-100 pt-4">
            <div className="flex items-center justify-between mb-4 gap-4">
                <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[55px] text-[#1a1a1a]">Our menus</h2>
                <span className="text-blue-500 font-bold text-[13px] sm:hidden cursor-pointer hover:underline">See all</span>
                <div className="hidden sm:flex items-center gap-2">
                    <button onClick={() => scroll('left')} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#ff4700] hover:text-[#ff4700] transition-colors bg-white shadow-sm">
                        <Icon icon="solar:alt-arrow-left-line-duotone" width="20" height="20" />
                    </button>
                    <button onClick={() => scroll('right')} className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#ff4700] hover:text-[#ff4700] transition-colors bg-white shadow-sm">
                        <Icon icon="solar:alt-arrow-right-line-duotone" width="20" height="20" />
                    </button>
                </div>
            </div>
            
            <div ref={scrollRef} className="flex gap-[18px] w-full overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {CATEGORIES.map((cat, idx) => (
                    <div key={idx} className="shrink-0 snap-start">
                        <CategoryPill 
                            title={cat.title} 
                            image={cat.image} 
                            isActive={activeIndex === idx} 
                            onClick={() => setActiveIndex(idx)}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
