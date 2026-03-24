import CategoryPill from "../ui/CategoryPill";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES = [
    { title: "All meals", image: "/placeholder.png", isActive: true },
    { title: "Breakfast & Pastries", image: "/placeholder.png" },
    { title: "African Culinary & Grills", image: "/placeholder.png" },
    { title: "Continental Dishes", image: "/placeholder.png" },
    { title: "Rice & Pasta", image: "/placeholder.png" },
    { title: "Porridge & Soups", image: "/placeholder.png" },
    { title: "Noodles & others", image: "/placeholder.png" },
];

export default function CategoriesMenu() {
    return (
        <section className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">Our menus</h2>
                <div className="flex items-center gap-2">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#f95e34] hover:text-[#f95e34] transition-colors bg-white shadow-sm">
                        <ChevronLeft size={18} strokeWidth={2.5} />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#f95e34] hover:text-[#f95e34] transition-colors bg-white shadow-sm">
                        <ChevronRight size={18} strokeWidth={2.5} />
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
