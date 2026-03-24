import Image from "next/image";

interface CategoryPillProps {
    title: string;
    image: string;
    isActive?: boolean;
}

export default function CategoryPill({ title, image, isActive = false }: CategoryPillProps) {
    return (
        <button className={`flex items-center gap-3 p-1.5 pr-6 rounded-full border transition-all duration-300 whitespace-nowrap shadow-sm hover:shadow-md
            ${isActive 
                ? 'border-[#f95e34] bg-[#fff5f2]' 
                : 'border-white bg-white hover:border-[#f95e34]/30'
            }`}
        >
            <div className="w-11 h-11 rounded-full overflow-hidden relative shrink-0 bg-gray-100 shadow-sm">
                <Image src={image} alt={title} fill className="object-cover" unoptimized />
            </div>
            <span className={`font-bold text-sm tracking-tight ${isActive ? 'text-[#f95e34]' : 'text-gray-700'}`}>
                {title}
            </span>
        </button>
    );
}
