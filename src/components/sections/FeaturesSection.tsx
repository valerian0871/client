import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";

export default function FeaturesSection() {
    return (
        <section className="mb-20 text-center">
            <h4 className="font-extrabold text-[#f95e34] text-[24px] leading-[34px] tracking-[-0.03em] uppercase mb-2 md:mb-3 text-center align-middle">
                About Cake'n'Pastries
            </h4>
            <h2 className="text-[48px] leading-[48px] md:text-4xl font-extrabold text-[#1a1a1a] tracking-tight mb-10 md:mb-12 text-center max-w-[200px] md:max-w-none mx-auto">
                Our offers makes us different
            </h2>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-3 justify-start md:justify-center items-center md:w-[696px] md:h-[346px] md:mx-auto mb-16 pb-4 md:pb-0 px-4 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Feature 1 */}
                <div className="relative w-[150px] h-[150px] md:w-[224px] md:h-full rounded-[100px] md:rounded-[112px] overflow-hidden group shadow-lg shrink-0 snap-center">
                    <div className="absolute inset-0 bg-gray-200">
                        <Image src="/images/about.png" alt="Daily Menu & Fresh Food" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                    </div>
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-end md:pb-10 text-center z-10 px-4">
                        <h3 className="text-white font-bold text-[13px] md:text-lg leading-tight">Daily Menu & <br /> Fresh Food</h3>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="relative w-[150px] h-[150px] md:w-[224px] md:h-full rounded-[100px] md:rounded-[112px] overflow-hidden group shadow-lg shrink-0 snap-center">
                    <div className="absolute inset-0 bg-gray-200">
                        <Image src="/images/about.png" alt="Baking Services" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                    </div>
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-end md:pb-10 text-center z-10 px-4">
                        <h3 className="text-white font-bold text-[13px] md:text-lg leading-tight">Baking <br /> Services</h3>
                    </div>
                </div>

                {/* Feature 3 */}
                <div className="relative w-[150px] h-[150px] md:w-[224px] md:h-full rounded-[100px] md:rounded-[112px] overflow-hidden group shadow-lg shrink-0 snap-center">
                    <div className="absolute inset-0 bg-gray-200">
                        <Image src="/images/about.png" alt="Co-working Space" fill className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                    </div>
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center md:justify-end md:pb-10 text-center z-10 px-4">
                        <h3 className="text-white font-bold text-[13px] md:text-lg leading-tight">Co-working <br /> Space</h3>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto flex flex-col items-center px-4 md:px-0">
                <h3 className="text-xl font-extrabold text-[#1a1a1a] mb-4 text-center">Who We Are</h3>
                <p className="text-gray-500 text-sm md:text-[15px] font-medium leading-[1.8] mb-6 text-center">
                    We are a modern neighborhood restaurant that serves freshly prepared Nigerian and continental meals every day. Our goal is to create a place where good food, good people and good energy meet. Whether you are dining in, ordering online or picking up your meal, we make sure every customer enjoys a warm and satisfying experience. </p>
                <Link
                    href="#"
                    className="text-[#f95e34] font-bold text-sm tracking-wide hover:text-[#e04a22] transition-colors flex items-center gap-1 border-b-2 border-transparent hover:border-[#f95e34] pb-0.5"
                >
                    Read More About Us <Icon icon="solar:arrow-right-line-duotone" width="16" height="16" />
                </Link>
            </div>
        </section>
    );
}
