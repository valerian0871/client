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
            <div className="flex items-center justify-between mb-6 px-4 md:px-0">
                <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[55px] text-[#1a1a1a]">
                    Our Special Offers
                </h2>
                <span className="text-blue-500 font-bold text-[13px] sm:hidden cursor-pointer hover:underline">
                    See all
                </span>
                <div className="hidden sm:flex items-center gap-2">
                    <button
                        onClick={() => scroll("left")}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#f95e34] hover:text-[#f95e34] transition-colors bg-white shadow-sm"
                    >
                        <Icon icon="solar:alt-arrow-left-line-duotone" width="20" height="20" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:border-[#f95e34] hover:text-[#f95e34] transition-colors bg-white shadow-sm"
                    >
                        <Icon icon="solar:alt-arrow-right-line-duotone" width="20" height="20" />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {offers.map((offer, i) => (
                    <div
                        key={i}
                        className="shrink-0 snap-start w-[750px] h-[446px] bg-white rounded-[32px] overflow-hidden border border-gray-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] flex relative group hover:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.13)] transition-shadow duration-300"
                    >
                        {/* ── Left: Text content ── */}
                        <div className="flex flex-col justify-center pl-[52px] py-10 w-[55%] z-20 relative">
                            <h3 className="text-[46px] font-extrabold text-[#1f1f1f] leading-[1.1] mb-5 tracking-tight whitespace-pre-line">
                                {offer.title}
                            </h3>
                            <p className="text-[#7d7d7d] text-[15px] font-medium mb-6 max-w-[300px] leading-[1.6]">
                                {offer.description}
                            </p>
                            <div className="flex items-end gap-3 mb-10">
                                <span className="text-[32px] font-extrabold text-[#ff4700] leading-none">{offer.price}</span>
                                <span className="text-[#c0c0c0] line-through text-[20px] font-bold leading-none mb-0.5">{offer.oldPrice}</span>
                            </div>
                            <div>
                                <button className="flex items-center gap-6 bg-black text-white pl-8 pr-1.5 py-1.5 rounded-full font-bold text-[13px] tracking-wider hover:bg-[#222] transition-all">
                                    ORDER NOW
                                    <div className="bg-white rounded-full w-[36px] h-[36px] flex items-center justify-center shrink-0">
                                        <Icon icon="solar:arrow-right-line-duotone" width="18" height="18" className="text-[#ff4700]" />
                                    </div>
                                </button>
                            </div>
                        </div>

                        {/* ── Right: Food Image ── fills the right half edge-to-edge */}
                        <div className="absolute bottom-[-10px] right-[-20px] w-[58%] h-[105%] z-10">
                            <Image
                                src={offer.image}
                                alt={offer.imageAlt}
                                fill
                                className="object-contain object-bottom group-hover:scale-[1.03] transition-transform duration-500"
                                unoptimized
                                priority
                            />
                        </div>

                        {/* ── Badge: sits at the seam between text and image ── */}
                        <div className="absolute top-8 left-[58%] -translate-x-1/2 z-30 w-[240px] h-[216px] pointer-events-none group-hover:scale-105 transition-transform duration-300">
                            {/* bubble is the purple background */}
                            <Image
                                src="/images/bubble.svg"
                                alt=""
                                fill
                                className="object-contain"
                                unoptimized
                                priority
                            /> 
                        </div>
                        {/* 50% OFF text sits on top */}
                        <div className="absolute top-16 left-[58%] -translate-x-1/2 z-30 w-[160px] h-[80px] pointer-events-none group-hover:scale-105 transition-transform duration-300">
                            <div className="absolute inset-0">
                                <Image
                                    src="/images/50.svg"
                                    alt="50% OFF"
                                    fill
                                    className="object-contain"
                                    unoptimized
                                    priority
                                />
                            </div></div>

                    </div>
                ))}
            </div>
        </section>
    );
}
