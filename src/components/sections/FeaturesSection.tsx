import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturesSection() {
    return (
        <section className="mb-20 text-center">
            <h4 className="text-[#f95e34] font-extrabold text-[13px] tracking-widest uppercase mb-3 text-center">
                About Cakes N' Pastries
            </h4>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-12 text-center">
                Our offers makes us different
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 mb-16">
                {/* Feature 1 */}
                <div className="relative w-[240px] h-[340px] rounded-[120px] overflow-hidden group shadow-lg">
                    <div className="absolute inset-0 bg-gray-200">
                        <div className="w-full h-full bg-[#1a1a1a]"></div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center z-10 px-4">
                        <h3 className="text-white font-bold text-lg leading-tight">Daily Brewed <br/> Fresh Food</h3>
                    </div>
                </div>
                
                {/* Feature 2 */}
                <div className="relative w-[240px] h-[340px] rounded-[120px] overflow-hidden group shadow-lg -translate-y-4 md:-translate-y-8">
                    <div className="absolute inset-0 bg-gray-200">
                        <div className="w-full h-full bg-[#8c3f2d]"></div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center z-10 px-4">
                        <h3 className="text-white font-bold text-lg leading-tight">Baking <br/> Services</h3>
                    </div>
                </div>
                
                {/* Feature 3 */}
                <div className="relative w-[240px] h-[340px] rounded-[120px] overflow-hidden group shadow-lg">
                    <div className="absolute inset-0 bg-gray-200">
                        <div className="w-full h-full bg-[#3f4a3c]"></div>
                    </div>
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                    <div className="absolute bottom-8 left-0 right-0 text-center z-10 px-4">
                        <h3 className="text-white font-bold text-lg leading-tight">Co-working <br/> Space</h3>
                    </div>
                </div>
            </div>
            
            <div className="max-w-3xl mx-auto flex flex-col items-center">
                <h3 className="text-xl font-extrabold text-[#1a1a1a] mb-4 text-center">Who We Are</h3>
                <p className="text-gray-500 text-sm md:text-[15px] font-medium leading-[1.8] mb-6 text-center">
                    We are a modern restaurant based in Port Harcourt, Nigeria that prepares Nigerian and continental meals 
                    daily. We also have a bakery section where we bake bread, cakes, and other pastries. We also have a 
                    co-working space where remote workers can come and work while enjoying meals and pastries from us.
                </p>
                <Link 
                    href="#" 
                    className="text-[#f95e34] font-bold text-sm tracking-wide hover:text-[#e04a22] transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-[#f95e34] pb-0.5"
                >
                    Read More About Us <ArrowRight size={14} strokeWidth={3} />
                </Link>
            </div>
        </section>
    );
}
