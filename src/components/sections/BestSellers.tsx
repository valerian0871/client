import SectionHeading from "../ui/SectionHeading";
import FoodCard from "../ui/FoodCard";

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
            <SectionHeading 
                title="Best Sellers" 
                subtitle="All meals & pastries" 
                showSeeAll={true} 
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-[1400px]:grid-cols-5 gap-6">
                {BEST_SELLERS.map((item, idx) => (
                    <FoodCard key={idx} {...item} />
                ))}
            </div>
        </section>
    );
}
