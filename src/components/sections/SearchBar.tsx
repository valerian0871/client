import { Icon } from "@iconify/react";

export default function SearchBar() {
    return (
        <div className="w-full flex items-center gap-3 my-8">
            <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-full px-5 py-3 md:py-3.5 shadow-sm focus-within:ring-4 focus-within:ring-[#f95e34]/10 focus-within:border-[#f95e34]/50 transition-all group">
                <Icon icon="solar:magnifier-line-duotone" className="text-[#a0a0a0] group-focus-within:text-[#f95e34] transition-colors" width="20" height="20" />
                <div className="w-[1.5px] h-[18px] bg-[#e5e7eb] mx-3"></div>
                <input 
                    type="text" 
                    placeholder="Search for a meal" 
                    className="flex-1 bg-transparent outline-none text-[#1a1a1a] text-sm md:text-[15px] font-semibold placeholder:text-[#a0a0a0] placeholder:font-medium"
                />
            </div>
            <button className="w-[48px] h-[48px] md:w-[52px] md:h-[52px] flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm text-gray-600 hover:text-[#f95e34] hover:border-[#f95e34]/30 transition-all shrink-0">
                <Icon icon="solar:tuning-square-2-line-duotone" width="22" height="22" />
            </button>
        </div>
    );
}
