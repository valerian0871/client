import { Icon } from "@iconify/react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        name: "Amaka O.",
        role: "Customer",
        headline: `"The best cake experience I've had in a long time."`,
        body: "Cakes 'n' Pastries nailed my daughter's birthday cake. It looked amazing and tasted even better. Everyone kept asking where I got it from.",
        rating: 5,
        avatar: "/images/testimonial.png"
    },
    {
        name: "Daniel K.",
        role: "Customer",
        headline: `"Fresh, soft and always consistent."`,
        body: "I've ordered their pastries more than five times now. It's the same great quality every single time. They never disappoint.",
        rating: 5,
        avatar: "/images/testimonial.png"
    },
    {
        name: "Kemi A.",
        role: "Customer",
        headline: `"Their food and baked items are top notch."`,
        body: "Apart from their cakes, I love that they also serve proper meals. It makes the place a one-stop spot for lunch, snacks and small chops.",
        rating: 5,
        avatar: "/images/testimonial.png"
    },
    {
        name: "Chinedu A.",
        role: "Customer",
        headline: `"Delivery was quick and well packaged."`,
        body: "I ordered a cake and small chops for a small office celebration. Everything arrived on time and still fresh. Really impressed.",
        rating: 5,
        avatar: "/images/testimonial.png"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="mb-10 md:mb-24 px-4 overflow-hidden">
            <hr className="max-w-6xl mx-auto border-gray-100 mb-6 md:mb-16" />
            <h2 className="text-[20px] md:text-3xl leading-[20px] md:leading-tight font-extrabold text-[#1a1a1a] tracking-tight mb-2 md:mb-12 text-center">
                What our customers says
            </h2>

            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-8 pt-2 md:pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
                {TESTIMONIALS.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="w-[270px] md:w-[350px] min-w-[270px] md:min-w-[350px] h-[310px] md:h-auto bg-white rounded-[32px] p-6 border border-[#e8e8e8] shrink-0 snap-center flex flex-col shadow-none"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-[52px] h-[52px] rounded-full bg-gray-100 overflow-hidden relative shrink-0">
                                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" unoptimized />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-[#1a1a1a] text-[15px] leading-none mb-1">{testimonial.name}</h4>
                                <p className="text-gray-400 text-xs font-medium">{testimonial.role}</p>
                            </div>
                        </div>

                        <h5 className="text-[#f95e34] font-bold text-[13px] leading-normal mb-2">
                            {testimonial.headline}
                        </h5>
                        <p className="text-[#555] text-[11px] leading-relaxed mb-4 flex-1">
                            {testimonial.body}
                        </p>

                        <div className="flex gap-1.5 mt-auto">
                            {[...Array(5)].map((_, i) => (
                                <Icon
                                    key={i}
                                    icon="solar:star-bold"
                                    width="16"
                                    height="16"
                                    className={i < testimonial.rating ? "text-amber-400" : "text-gray-200"}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 md:gap-2 mt-4">
                <div className="w-8 md:w-10 h-1.5 rounded-full bg-[#f95e34]"></div>
                <div className="w-5 md:w-6 h-1.5 rounded-full bg-[#ffcdba] cursor-pointer hover:bg-[#f95e34]/50 transition-colors"></div>
                <div className="w-5 md:w-6 h-1.5 rounded-full bg-[#ffcdba] cursor-pointer hover:bg-[#f95e34]/50 transition-colors"></div>
                <div className="w-5 md:w-6 h-1.5 rounded-full bg-[#ffcdba] cursor-pointer hover:bg-[#f95e34]/50 transition-colors"></div>
            </div>
        </section>
    );
}
