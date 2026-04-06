"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="w-full flex items-center justify-center px-4 md:px-0 pb-4 md:pb-6">
            <section 
                className="relative w-full max-w-[694px] md:max-w-none md:w-[92vw] lg:w-[1200px] h-[164px] md:h-auto md:min-h-[420px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-linear-to-r from-[#ff4700] to-[#ff6a30] flex flex-row items-center gap-[12px] md:gap-0 md:justify-between p-5 md:p-14 shadow-sm mx-auto"
                style={{ opacity: 1 }}
            >
                {/* Text Content */}
                <div className="relative z-20 w-[60%] md:w-1/2 text-white flex flex-col items-start justify-center h-full text-left">
                    <h1 className="text-[17px] sm:text-[22px] md:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-tight md:leading-[1.05] mb-1.5 md:mb-6">
                        Order Freshly <br/> Prepared Meals
                    </h1>
                    <p className="text-white/95 text-[10px] sm:text-xs md:text-base font-medium mb-3 md:mb-8 leading-snug line-clamp-2 md:line-clamp-none max-w-[200px] sm:max-w-[260px] md:max-w-[380px]">
                        Order awesome Breakfast, African dishes, and continental meals prepared fresh daily.
                    </p>
                    <button className="flex items-center gap-1.5 md:gap-3 bg-[#111] text-white pl-3 md:pl-6 pr-1 md:pr-2 py-1 md:py-2 rounded-full font-bold text-[10px] md:text-[13px] hover:bg-black transition-all shadow-md md:shadow-lg md:hover:shadow-xl md:hover:-translate-y-0.5">
                        Order Now
                        <div className="bg-white text-black rounded-full p-1 md:p-1.5 flex items-center justify-center">
                            <Icon icon="solar:arrow-right-line-duotone" width="12" height="12" className="text-black sm:w-[14px] sm:h-[14px] md:w-4 md:h-4" />
                        </div>
                    </button>
                </div>

                {/* Imagery */}
                <div className="relative z-10 w-[40%] md:w-1/2 h-full flex items-center justify-center shrink-0 md:shrink md:justify-end">
                    <div className="w-[80px] md:w-[450px] h-[80px] md:h-[450px] bg-white/10 rounded-full blur-xl md:blur-3xl absolute top-1/2 -translate-y-1/2 right-[10%]"></div>
                    <div className="relative w-full h-[160%] md:h-full max-w-[500px] md:min-h-[300px] -mr-6 md:mr-0 flex items-center justify-center translate-x-3 md:translate-x-0">
                        <Image 
                            src="/images/hamburger.png" 
                            priority 
                            alt="Hero Burger" 
                            fill 
                            className="object-contain object-right md:object-center scale-[1.3] md:scale-[1.50] drop-shadow-[0_15px_25px_rgba(0,0,0,0.4)]" 
                            unoptimized 
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
