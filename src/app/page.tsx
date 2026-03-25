import HeroSection from "../components/sections/HeroSection";
import SearchBar from "../components/sections/SearchBar";
import CategoriesMenu from "../components/sections/CategoriesMenu";
import BestSellers from "../components/sections/BestSellers";
import SpecialOffers from "../components/sections/SpecialOffers";
import FeaturesSection from "../components/sections/FeaturesSection";
import StepsSection from "../components/sections/StepsSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";

export default function Home() {
  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <div className="space-y-2">
        <HeroSection />
        <SearchBar />
      </div>
      
      <div className="mt-8 space-y-20">
        <CategoriesMenu />
        <BestSellers />
        <SpecialOffers />
        <FeaturesSection />
        <StepsSection />
        <TestimonialsSection />
      </div>
    </div>
  );
}
