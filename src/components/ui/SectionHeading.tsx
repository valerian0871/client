import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    showSeeAll?: boolean;
    seeAllLink?: string;
}

export default function SectionHeading({ title, subtitle, showSeeAll, seeAllLink = "#" }: SectionHeadingProps) {
    return (
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-baseline gap-3">
                <h2 className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight">{title}</h2>
                {subtitle && (
                    <span className="text-sm font-bold text-gray-500 hidden sm:inline-block">
                        - ({subtitle})
                    </span>
                )}
            </div>
            
            {showSeeAll && (
                <Link 
                    href={seeAllLink} 
                    className="flex items-center gap-1 text-[13px] font-bold text-[#f95e34] hover:text-[#e04a22] transition-colors"
                >
                    See all
                    <ChevronRight size={14} className="stroke-[3px]" />
                </Link>
            )}
        </div>
    );
}
