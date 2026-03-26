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
    return (
        <section className="mb-12 h-auto md:h-[140px] px-4 md:px-0 flex flex-col justify-center">
            <div className="flex items-center justify-between mb-4 gap-4">
                <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[55px] text-[#1a1a1a]">Our menus</h2>
                <span className="text-blue-500 font-bold text-[13px] sm:hidden cursor-pointer hover:underline">See all</span>
                <div className="hidden sm:flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#f95e34] hover:text-[#f95e34] transition-colors bg-white shadow-sm">
                        <Icon icon="solar:alt-arrow-left-line-duotone" width="20" height="20" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#f95e34] hover:text-[#f95e34] transition-colors bg-white shadow-sm">
                        <Icon icon="solar:alt-arrow-right-line-duotone" width="20" height="20" />
                    </button>
                </div>
            </div>
            
            <div className="flex items-center gap-4 overflow-x-auto pb-2 pt-1 px-1 -mx-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {CATEGORIES.map((cat, idx) => (
                    <CategoryPill 
                        key={idx} 
                        title={cat.title} 
                        image={cat.image} 
                        isActive={cat.isActive} 
                    />
                ))}
            </div>
        </section>
    );
}
