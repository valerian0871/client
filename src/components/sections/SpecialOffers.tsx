import { Icon } from "@iconify/react";
import Image from "next/image";

export default function SpecialOffers() {
    return (
        <section className="mb-20">
            <div className="flex items-center justify-between mb-6 px-4 md:px-0">
                <h2 className="text-[19px] md:text-2xl font-extrabold text-[#1a1a1a] tracking-tight">Our Special Offers</h2>
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
            
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 px-4 md:px-0 md:flex-col xl:flex-row xl:gap-8 xl:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Offer 1 */}
                <div className="shrink-0 w-[85vw] snap-center md:w-auto flex-1 bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row relative min-h-[250px] group hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                    <div className="p-8 md:p-10 md:pr-0 md:w-[60%] z-10 flex flex-col justify-center">
                        <h3 className="text-[32px] font-extrabold text-[#1a1a1a] leading-[1.1] mb-3 tracking-tight group-hover:text-[#f95e34] transition-colors duration-300">
                            Full Flame <br/> Grill Chicken
                        </h3>
                        <p className="text-gray-500 text-[14px] font-medium mb-5 max-w-[220px] leading-snug">
                            Tender and juicy chicken well seasoned in a secret unique recipe.
                        </p>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl font-black text-[#f95e34]">₦3,500</span>
                            <span className="text-gray-400 line-through text-sm font-bold">₦7,000</span>
                        </div>
                        <div className="flex">
                            <button className="flex items-center gap-3 bg-[#111] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-wide hover:bg-black transition-all shadow-md group-hover:scale-105 origin-left">
                                Order Now
                                <div className="bg-white text-black rounded-full p-1.5 flex items-center justify-center">
                                    <Icon icon="solar:arrow-right-line-duotone" width="16" height="16" className="text-black" />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Visual Badge */}
                    <div className="absolute top-6 md:top-8 left-1/2 -translate-x-[60%] md:translate-x-0 md:left-auto md:right-[35%] z-20 bg-linear-to-br from-[#8b5cf6] to-[#581c87] text-white w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex flex-col items-center justify-center shadow-xl border-[4px] md:border-[6px] border-white rotate-12 transform md:scale-110 group-hover:rotate-24 transition-transform duration-500">
                        <span className="text-3xl md:text-4xl font-black leading-none tracking-tighter">50</span>
                        <span className="text-[9px] md:text-[11px] font-black tracking-[0.2em] leading-none mt-1">% OFF</span>
                    </div>
                    <div className="relative h-[250px] md:h-auto md:w-[40%] bg-gray-50 flex items-center justify-center overflow-hidden">
                        <Image src="/images/special.png" alt="Special Offer" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
                        <div className="w-[300px] h-[300px] bg-amber-600/10 rounded-full blur-3xl absolute top-0 -right-10 group-hover:bg-amber-600/20 transition-colors duration-500 pointer-events-none"></div>
                    </div>
                </div>

                {/* Offer 2 */}
                <div className="shrink-0 w-[85vw] snap-center md:w-auto flex-1 bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] flex flex-col md:flex-row relative min-h-[250px] group hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                    <div className="p-8 md:p-10 md:pr-0 md:w-[60%] z-10 flex flex-col justify-center">
                        <h3 className="text-[32px] font-extrabold text-[#1a1a1a] leading-[1.1] mb-3 tracking-tight group-hover:text-[#f95e34] transition-colors duration-300">
                            Burger <br/> Special
                        </h3>
                        <p className="text-gray-500 text-[14px] font-medium mb-5 max-w-[220px] leading-snug">
                            Tender and juicy beef burger with special natural and rich ground recipe.
                        </p>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-2xl font-black text-[#f95e34]">₦3,500</span>
                            <span className="text-gray-400 line-through text-sm font-bold">₦7,000</span>
                        </div>
                        <div className="flex">
                            <button className="flex items-center gap-3 bg-[#111] text-white pl-6 pr-1.5 py-1.5 rounded-full font-bold text-sm tracking-wide hover:bg-black transition-all shadow-md group-hover:scale-105 origin-left">
                                Order Now
                                <div className="bg-white text-black rounded-full p-1.5 flex items-center justify-center">
                                    <Icon icon="solar:arrow-right-line-duotone" width="16" height="16" className="text-black" />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Visual Badge */}
                    <div className="absolute top-6 md:top-8 left-1/2 -translate-x-[60%] md:translate-x-0 md:left-auto md:right-[35%] z-20 bg-linear-to-br from-[#8b5cf6] to-[#581c87] text-white w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-full flex flex-col items-center justify-center shadow-xl border-[4px] md:border-[6px] border-white rotate-12 transform md:scale-110 group-hover:rotate-0 transition-transform duration-500">
                        <span className="text-3xl md:text-4xl font-black leading-none tracking-tighter">50</span>
                        <span className="text-[9px] md:text-[11px] font-black tracking-[0.2em] leading-none mt-1">% OFF</span>
                    </div>
                    <div className="relative h-[250px] md:h-auto md:w-[40%] bg-gray-50 flex items-center justify-center overflow-hidden">
                        <Image src="/images/special.png" alt="Special Offer" fill className="object-cover hover:scale-105 transition-transform duration-500" unoptimized />
                        <div className="w-[300px] h-[300px] bg-green-500/10 rounded-full blur-3xl absolute top-0 -right-10 group-hover:bg-green-500/20 transition-colors duration-500 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
