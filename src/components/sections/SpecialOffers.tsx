"use client";

import { useRef } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

const offers = [
    {
        title: "Full Flame\nGrill Chicken",
        description: "Tender whole chicken flame-grilled with house spices and served with pepper sauce.",
        price: "₦3,500",
        oldPrice: "₦7,500",
        image: "/images/special.png",
        imageAlt: "Full Flame Grill Chicken",
    },
    {
        title: "Burger\nSpecial",
        description: "Tender and juicy beef burger with special natural and rich ground recipe.",
        price: "₦3,500",
        oldPrice: "₦7,000",
        image: "/images/special.png",
        imageAlt: "Burger Special",
    },
];

export default function SpecialOffers() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (dir: "left" | "right") => {
        if (!scrollRef.current) return;
        scrollRef.current.scrollBy({ left: dir === "right" ? 766 : -766, behavior: "smooth" });
    };

    return (
        <section className="mb-20">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 md:mb-6 px-4 md:px-0">
                <h2 className="text-[20px] md:text-[36px] font-extrabold md:font-bold tracking-[-0.03em] leading-[20px] md:leading-[55px] text-[#1a1a1a]">
                    Our Special Offers
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

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-[15px] md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {offers.map((offer, i) => (
                    <div
                        key={i}
                        className="shrink-0 snap-start w-[324px] md:w-[750px] h-[192px] md:h-[446px] bg-white rounded-[14px] md:rounded-[32px] overflow-hidden border-[0.43px] border-[#CECECF] md:border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] flex relative group hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.13)] transition-shadow duration-300 mx-1 md:mx-0"
                    >
                        {/* ── Left: Text content ── */}
                        <div className="flex flex-col justify-center pl-4 md:pl-[52px] py-2 md:py-10 w-[55%] z-20 relative">
                            <h3 className="text-[15px] md:text-[46px] font-extrabold text-[#1f1f1f] leading-tight md:leading-[1.1] mb-1 md:mb-5 tracking-tight whitespace-pre-line">
                                {offer.title}
                            </h3>
                            <p className="text-[#8b8b8b] md:text-[#7d7d7d] text-[8px] md:text-[15px] font-medium mb-2 md:mb-6 leading-snug md:leading-[1.6] line-clamp-3 md:line-clamp-none">
                                {offer.description}
                            </p>
                            <div className="flex items-center md:items-end gap-1.5 md:gap-3 mb-2 md:mb-10">
                                <span className="text-[13px] md:text-[32px] font-extrabold text-[#ff4700] leading-none">{offer.price}</span>
                                <span className="text-[#c0c0c0] line-through text-[9px] md:text-[20px] font-bold leading-none">{offer.oldPrice}</span>
                            </div>
                            <div className="w-max">
                                <button className="flex items-center gap-1.5 md:gap-6 bg-black text-white pl-3 md:pl-8 pr-1 md:pr-1.5 py-1 md:py-1.5 rounded-full font-bold text-[7px] md:text-[13px] tracking-wider hover:bg-[#222] transition-all">
                                    ORDER NOW
                                    <div className="bg-white rounded-full w-[14px] md:w-[36px] h-[14px] md:h-[36px] flex items-center justify-center shrink-0">
                                        <Icon icon="solar:arrow-right-line-duotone" className="w-[8px] md:w-[18px] h-[8px] md:h-[18px] text-[#ff4700]" />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* ── Right: Food Image ── fills the right half edge-to-edge */}
                        <div className="absolute bottom-[-5px] md:bottom-[-10px] right-[-10px] md:right-[-20px] w-[50%] md:w-[58%] h-[105%] z-10">
                            <Image
                                src={offer.image}
                                alt={offer.imageAlt}
                                fill
                                className="object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500"
                                unoptimized
                                priority
                            />
                        </div>

                        {/* ── Badge: sits on the chicken ── */}
                        <div className="absolute top-2 md:top-10 right-[10%] md:right-[15%] z-30 w-[70px] md:w-[190px] h-[70px] md:h-[190px] pointer-events-none group-hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center">
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/bubble.svg"
                                    alt=""
                                    fill
                                    className="object-contain"
                                    unoptimized
                                    priority
                                /> 
                            </div>
                            <div className="relative w-[70%] h-[70%] mb-[5%] mr-[2%] z-10">
                                <Image
                                    src="/images/50.svg"
                                    alt="50% OFF"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    );
}
