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
    return (
        <section className="mb-16">
            <div className="flex items-center justify-between mb-4 md:mb-6 px-4 md:px-0">
                <h2 className="text-[20px] md:text-[36px] font-extrabold md:font-bold tracking-[-0.03em] leading-[20px] md:leading-[55px] text-[#1a1a1a] flex items-baseline gap-1 md:gap-2">
                    Best Sellers - <span className="text-[13px] md:text-[24px] font-bold tracking-[0] leading-none md:leading-[55px]">(Meal packs)</span>
                </h2>
                <span className="text-blue-500 font-bold text-[13px] md:text-[15px] flex items-center gap-1 cursor-pointer hover:underline">
                    See all <Icon icon="solar:alt-arrow-right-line-duotone" width="16" height="16" className="hidden sm:block" />
                </span>
            </div>
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-[24px] lg:gap-6 pb-6 px-4 md:px-0 md:flex-wrap md:justify-center xl:justify-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {BEST_SELLERS.map((item, idx) => (
                    <div key={idx} className="shrink-0 snap-center flex justify-center">
                        <FoodCard {...item} />
                    </div>
                ))}
            </div>
        </section>
    );
}
