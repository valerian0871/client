import { Icon } from "@iconify/react";
import Image from "next/image";

export default function SpecialOffers() {
    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-6 px-4 md:px-0">
                <h2 className="text-[36px] font-bold tracking-[-0.03em] leading-[55px] text-[#1a1a1a]">Our Special Offers</h2>
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

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-10 px-4 md:px-0 md:flex-col xl:flex-row xl:gap-8 xl:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Offer 1 — Chicken */}
                <div className="shrink-0 w-[85vw] snap-center md:w-auto flex-1 bg-white rounded-[40px] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row relative min-h-[300px] group hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300" style={{ overflow: "visible" }}>
                    {/* Rounded background clip for the card face only */}
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none z-0 bg-white" />

                    <div className="p-8 md:p-10 md:pr-4 z-10 flex flex-col justify-center md:w-[52%] relative">
                        <h3 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a] leading-[1.05] mb-4 tracking-[-0.03em]">
                            Full Flame <br /> Grill Chicken
                        </h3>
                        <p className="text-[#666] text-[13px] md:text-[14px] font-medium mb-6 max-w-[260px] leading-[1.6]">
                            Tender whole chicken flame-grilled with house spices and served with pepper sauce.
                        </p>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[22px] font-extrabold text-[#f95e34]">₦3,500</span>
                            <span className="text-[#c0c0c0] line-through text-[15px] font-bold">₦7,500</span>
                        </div>
                        <div className="flex">
                            <button className="flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full font-bold text-[11px] md:text-[12px] tracking-widest hover:bg-[#222] transition-all group-hover:scale-105 origin-left">
                                ORDER NOW
                                <div className="bg-white rounded-full w-[24px] h-[24px] flex items-center justify-center">
                                    <Icon icon="solar:arrow-right-line-duotone" width="14" height="14" className="text-[#f95e34]" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* 50% OFF Badge — SVG layers */}
                    <div className="absolute top-8 right-4 md:right-[40%] z-30 w-[110px] h-[110px] md:w-[140px] md:h-[140px] pointer-events-none transform group-hover:scale-[1.05] transition-transform duration-500">
                        <Image src="/images/bubble.svg" alt="" fill className="object-contain" unoptimized priority />
                        <Image src="/images/50.svg" alt="50% OFF" fill className="object-contain" unoptimized priority />
                    </div>

                    {/* Chicken — full image overflowing the card top */}
                    <div className="hidden md:block absolute bottom-0 right-0 w-[52%] z-20 pointer-events-none" style={{ height: "120%" }}>
                        <Image
                            src="/images/special.png"
                            alt="Full Flame Grill Chicken"
                            fill
                            className="object-contain object-bottom-right drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            unoptimized
                        />
                    </div>
                    {/* Mobile food image */}
                    <div className="relative h-[220px] md:hidden w-full overflow-hidden rounded-b-[40px]">
                        <Image src="/images/special.png" alt="Full Flame Grill Chicken" fill className="object-cover object-center" unoptimized />
                    </div>
                </div>

                {/* Offer 2 — Burger */}
                <div className="shrink-0 w-[85vw] snap-center md:w-auto flex-1 bg-white rounded-[40px] border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row relative min-h-[300px] group hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300" style={{ overflow: "visible" }}>
                    <div className="absolute inset-0 rounded-[40px] overflow-hidden pointer-events-none z-0 bg-white" />

                    <div className="p-8 md:p-10 md:pr-4 z-10 flex flex-col justify-center md:w-[52%] relative">
                        <h3 className="text-[28px] md:text-[36px] font-extrabold text-[#1a1a1a] leading-[1.05] mb-4 tracking-[-0.03em]">
                            Burger <br /> Special
                        </h3>
                        <p className="text-[#666] text-[13px] md:text-[14px] font-medium mb-6 max-w-[260px] leading-[1.6]">
                            Tender and juicy beef burger with special natural and rich ground recipe.
                        </p>
                        <div className="flex items-center gap-3 mb-8">
                            <span className="text-[22px] font-extrabold text-[#f95e34]">₦3,500</span>
                            <span className="text-[#c0c0c0] line-through text-[15px] font-bold">₦7,000</span>
                        </div>
                        <div className="flex">
                            <button className="flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full font-bold text-[11px] md:text-[12px] tracking-widest hover:bg-[#222] transition-all group-hover:scale-105 origin-left">
                                ORDER NOW
                                <div className="bg-white rounded-full w-[24px] h-[24px] flex items-center justify-center">
                                    <Icon icon="solar:arrow-right-line-duotone" width="14" height="14" className="text-[#f95e34]" />
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* 50% OFF Badge — SVG layers */}
                    <div className="absolute top-8 right-4 md:right-[40%] z-30 w-[110px] h-[110px] md:w-[140px] md:h-[140px] pointer-events-none transform group-hover:scale-[1.05] transition-transform duration-500">
                        <Image src="/images/bubble.svg" alt="" fill className="object-contain" unoptimized priority />
                        <Image src="/images/50.svg" alt="50% OFF" fill className="object-contain" unoptimized priority />
                    </div>

                    {/* Burger — full image overflowing the card top */}
                    <div className="hidden md:block absolute bottom-0 right-0 w-[52%] z-20 pointer-events-none" style={{ height: "120%" }}>
                        <Image
                            src="/images/hamburger.png"
                            alt="Burger Special"
                            fill
                            className="object-contain object-bottom-right drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            unoptimized
                        />
                    </div>
                    {/* Mobile food image */}
                    <div className="relative h-[220px] md:hidden w-full overflow-hidden rounded-b-[40px]">
                        <Image src="/images/hamburger.png" alt="Burger Special" fill className="object-cover object-center" unoptimized />
                    </div>
                </div>
            </div>
        </section>
    );
}
