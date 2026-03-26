import Image from "next/image";

const STEPS = [
    {
        num: "1",
        title: "Explore and Choose",
        desc: "Check out our menu of meals, pastries, and drinks. Choose your dish, customize it, and add it to your cart.",
        color: "bg-[#f95e34]"
    },
    {
        num: "2",
        title: "Place Your Order",
        desc: "Check out / Pay, select delivery or pickup, and finalize your payment. It's quick, easy, and secure.",
        color: "bg-[#4ade80]"
    },
    {
        num: "3",
        title: "We Cook and Deliver",
        desc: "We prepare your meal fresh and deliver it to your doorstep or have it ready for pickup.",
        color: "bg-[#f95e34]"
    }
];

export default function StepsSection() {
    return (
        <section className="mb-24 text-center">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-16 text-center">
                Easy order In 3 Steps
            </h2>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 max-w-4xl mx-auto">
                {STEPS.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center max-w-[240px] mx-auto relative group">
                        
                        {/* Connecting Line (except for last item) */}
                        {idx < STEPS.length - 1 && (
                            <div className="hidden md:block absolute top-[50px] left-[60%] w-[120%] h-[2px] border-t-[3px] border-dashed border-gray-200 -z-10 group-hover:border-[#f95e34]/50 transition-colors duration-500"></div>
                        )}
                        
                        <div className="relative w-[100px] h-[100px] rounded-[32px] bg-[#fff5f2] mb-6 flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-300">
                            {/* Step Number Badge */}
                            <div className={`absolute -top-1 -left-1 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md border-4 border-white overflow-hidden bg-[#ff4a11] text-white font-extrabold text-sm sm:text-base z-20 hover:scale-110 transition-transform`}>
                                {step.num}
                            </div>
                            
                            {/* Placeholder for Icon */}
                            <div className="w-20 h-20 relative flex items-center justify-center rounded-2xl drop-shadow-md">
                                <Image src="/images/steps.png" alt="Step Icon" fill className="object-contain p-2" unoptimized />
                            </div>
                        </div>
                        
                        <h3 className="text-[17px] font-extrabold text-[#1a1a1a] mb-2">{step.title}</h3>
                        <p className="text-gray-500 text-[13px] font-medium leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
