import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-4 md:px-0 -mx-4 md:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <section className="relative w-[92vw] sm:w-[95vw] md:w-full shrink-0 snap-center rounded-[32px] overflow-hidden bg-linear-to-r from-[#f95e34] to-[#fca37f] px-6 py-10 md:p-14 flex flex-col md:flex-row items-center justify-between min-h-[420px] shadow-sm">

            <div className="relative z-10 w-full md:w-1/2 text-white flex flex-col items-start text-left">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
                    Order Freshly <br /> Prepared Meals
                </h1>
                <p className="text-white/95 text-[15px] md:text-base font-medium max-w-[380px] mb-8 leading-snug">
                    Order awesome Breakfast, African dishes, and <br className="hidden md:block" /> continental meals prepared fresh daily.
                </p>
                <button className="flex items-center gap-3 bg-[#111] text-white pl-6 pr-2 py-2 rounded-full font-bold text-[13px] hover:bg-black transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    Order Now
                    <div className="bg-white text-black rounded-full p-1.5 flex items-center justify-center">
                        <Icon icon="solar:arrow-right-line-duotone" width="16" height="16" className="text-black" />
                    </div>
                </button>
            </div>

            <div className="relative z-10 w-full md:w-1/2 h-[300px] md:h-full mt-10 md:mt-0 flex items-center justify-center md:justify-end">
                <div className="w-[280px] h-[280px] md:w-[450px] md:h-[450px] bg-white/10 rounded-full blur-3xl absolute top-1/2 -translate-y-1/2 right-[10%]"></div>
                <div className="relative w-full h-full max-w-[500px] min-h-[250px] md:min-h-[300px] flex items-center justify-center">
                    <Image src="/images/hamburger.png" priority alt="Hero Burger" fill className="object-contain scale-[1.35] md:scale-[1.50] drop-shadow-[0_30px_50px_rgba(0,0,0,0.4)] hover:scale-[1.15] md:hover:scale-[1.25] hover:-translate-y-4 transition-all duration-700 ease-out" unoptimized />
                </div>
            </div>
            </section>

            {/* Simulated Carousel Card 2 for mobile horizontal scroll */}
            <section className="relative w-[92vw] sm:w-[95vw] md:w-full shrink-0 snap-center rounded-[32px] overflow-hidden bg-linear-to-r from-[#e74c3c] to-[#f39c12] px-6 py-10 md:p-14 flex flex-col md:flex-row items-center justify-between min-h-[420px] shadow-sm md:hidden">
                <div className="relative z-10 w-full md:w-1/2 text-white flex flex-col items-start text-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-6">
                        Freshly Baked <br /> Pastries & Cakes
                    </h1>
                    <p className="text-white/95 text-[15px] md:text-base font-medium max-w-[380px] mb-8 leading-snug">
                        Discover our daily selection of sweet treats, from classic cakes to artisan bread.
                    </p>
                    <button className="flex items-center gap-3 bg-[#111] text-white pl-6 pr-2 py-2 rounded-full font-bold text-[13px] hover:bg-black transition-all shadow-lg hover:-translate-y-0.5">
                        Order Now
                        <div className="bg-white text-black rounded-full p-1.5 flex items-center justify-center">
                            <Icon icon="solar:arrow-right-line-duotone" width="16" height="16" className="text-black" />
                        </div>
                    </button>
                </div>
                <div className="relative z-10 w-full md:w-1/2 h-[300px] md:h-full mt-10 md:mt-0 flex items-center justify-center md:justify-end">
                    <div className="w-[280px] h-[280px] bg-white/10 rounded-full blur-3xl absolute top-1/2 -translate-y-1/2 right-[10%]"></div>
                    <div className="relative w-full h-full max-w-[500px] min-h-[250px] flex items-center justify-center">
                        <Image src="/images/special.png" priority alt="Pastries" fill className="object-cover scale-[1.10]" unoptimized />
                    </div>
                </div>
            </section>
        </div>
    );
}
