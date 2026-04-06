import Link from "next/link";
import { Icon } from "@iconify/react";

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
                <h2 className="text-[20px] md:text-2xl font-extrabold text-[#1a1a1a] tracking-[-0.03em] leading-[20px] md:leading-tight">{title}</h2>
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
                    <Icon icon="solar:alt-arrow-right-line-duotone" width="16" height="16" />
                </Link>
            )}
        </div>
    );
}
