import Image from "next/image";

interface CategoryPillProps {
    title: string;
    image: string;
    isActive?: boolean;
    onClick?: () => void;
}

export default function CategoryPill({ title, image, isActive = false, onClick }: CategoryPillProps) {
    return (
        <button 
            onClick={onClick}
            className={`flex items-center flex-none w-[152px] md:w-[183px] md:min-w-[183px] h-[56px] md:h-[72px] gap-[10px] pl-[3px] md:pl-[8px] pr-[16px] md:pr-[24px] py-[3px] md:py-[8px] rounded-[32px] border transition-all duration-300 snap-start
                ${isActive
                ? 'border-[#ff4700] bg-[#FFD1BF]'
                : 'border-gray-200 bg-white hover:border-[#ff4700]/30'
            }`}
        >
            <Image 
                src={image} 
                alt={title} 
                className="w-[50px] md:w-[56px] h-[50px] md:h-[56px] rounded-full object-cover shrink-0" 
                width={56} 
                height={56} 
                unoptimized 
            />
            <span className={`font-bold text-[13px] leading-[1.1] flex-1 whitespace-normal text-left ${isActive ? 'text-[#ff4700]' : 'text-gray-700'}`}>
                {title}
            </span>
        </button>
    );
}
