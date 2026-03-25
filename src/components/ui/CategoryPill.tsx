import Image from "next/image";

interface CategoryPillProps {
    title: string;
    image: string;
    isActive?: boolean;
}

    export default function CategoryPill({ title, image, isActive = false }: CategoryPillProps) {
        return (
            <button className={`flex items-center shrink-0 w-[179px] h-[72px] gap-[10px] pl-[8px] pr-[24px] py-[8px] rounded-[32px] border transition-all duration-300
                ${isActive 
                    ? 'border-[#f95e34] bg-[#fff5f2]' 
                    : 'border-gray-200 bg-white hover:border-[#f95e34]/30'
                }`}
            >
            <div className="w-[56px] h-[56px] rounded-full overflow-hidden relative shrink-0 bg-gray-100">
                <Image src={image} alt={title} fill className="object-cover" unoptimized />
            </div>
            <span className={`font-bold text-[13px] leading-[1.2] flex-1 text-wrap tracking-tight text-left ${isActive ? 'text-[#f95e34]' : 'text-gray-700'}`}>
                {title}
            </span>
        </button>
    );
}
