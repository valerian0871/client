import { Icon } from "@iconify/react";
import Image from "next/image";

const TESTIMONIALS = [
    {
        name: "Amina A.",
        role: "Customer",
        quote: "The food here is simply the best I have tasted in a long time. The customer service is top notch. I completely recommend Cakes and Pastries to anyone looking for a place to eat.",
        rating: 5,
        avatar: "/images/testimonial.png",
        quoteColor: "text-[#f95e34]"
    },
    {
        name: "Daniel C.",
        role: "Customer",
        quote: "Great food and ambience. They have basically everything in their menu. I have tried their pasta, rice, and snacks and I must say I am impressed.",
        rating: 5,
        avatar: "/images/testimonial.png",
        quoteColor: "text-gray-600"
    },
    {
        name: "Carol A.",
        role: "Customer",
        quote: "I love the fact that I can order food online from them. Their delivery service is very fast and efficient. The food is always warm and tastes great.",
        rating: 5,
        avatar: "/images/testimonial.png",
        quoteColor: "text-[#f95e34]"
    },
    {
        name: "Emeka U.",
        role: "Customer",
        quote: "I have visited their physical location at GRA Port Harcourt and the experience was amazing. The staff are polite. I highly recommend.",
        rating: 5,
        avatar: "/images/testimonial.png",
        quoteColor: "text-[#f95e34]"
    }
];

export default function TestimonialsSection() {
    return (
        <section className="mb-24 px-4 overflow-hidden">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-12 text-center">
                What our customers says
            </h2>

            <div className="flex gap-6 overflow-x-auto pb-8 pt-4 px-4 -mx-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
                {TESTIMONIALS.map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="min-w-[300px] w-[300px] md:w-[350px] bg-white rounded-[32px] p-8 border border-gray-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] shrink-0 snap-center hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex flex-col"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-[52px] h-[52px] rounded-full bg-gray-100 overflow-hidden relative shrink-0">
                                <Image src={testimonial.avatar} alt={testimonial.name} fill className="object-cover" unoptimized />
                            </div>
                            <div>
                                <h4 className="font-extrabold text-[#1a1a1a] text-[15px] leading-none mb-1">{testimonial.name}</h4>
                                <p className="text-gray-400 text-xs font-medium">{testimonial.role}</p>
                            </div>
                        </div>

                        <p className={`${testimonial.quoteColor} font-bold text-[13px] leading-relaxed mb-6 flex-1`}>
                            &quot;{testimonial.quote}&quot;
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
            <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-10 h-1.5 rounded-full bg-[#f95e34]"></div>
                <div className="w-6 h-1.5 rounded-full bg-[#f95e34]/30 cursor-pointer hover:bg-[#f95e34]/50 transition-colors"></div>
                <div className="w-6 h-1.5 rounded-full bg-[#f95e34]/30 cursor-pointer hover:bg-[#f95e34]/50 transition-colors"></div>
            </div>
        </section>
    );
}
