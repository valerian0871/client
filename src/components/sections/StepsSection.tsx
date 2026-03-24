import Image from "next/image";

const STEPS = [
    {
        num: "1",
        title: "Explore and Choose",
        desc: "Choose your favorite meals/pastry from our diverse menu. You'll definitely love our options.",
        color: "bg-[#f95e34]"
    },
    {
        num: "2",
        title: "Place Your Order",
        desc: "Checkout, and proceed to payment using any of the available options online.",
        color: "bg-[#4ade80]"
    },
    {
        num: "3",
        title: "We Cook and Deliver",
        desc: "We prepare your meal fresh and deliver to your address within our delivery areas fast.",
        color: "bg-[#f95e34]"
    }
];

export default function StepsSection() {
    return (
        <section className="mb-24 text-center">
            <h2 className="text-3xl font-extrabold text-[#1a1a1a] tracking-tight mb-16 text-center">
                Easy order in 3 Steps
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
                            <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full ${step.color} text-white font-black text-xs flex items-center justify-center shadow-lg border-4 border-white`}>
                                {step.num}
                            </div>
                            
                            {/* Placeholder for Icon */}
                            <div className="w-12 h-12 bg-[#f95e34]/20 rounded-2xl flex items-center justify-center text-[#f95e34] font-bold text-[10px] mix-blend-multiply uppercase tracking-widest border border-[#f95e34]/10">
                                Icon
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
