import { Icon } from "@iconify/react";

export default function SearchBar() {
    return (
        <div className="w-full max-w-[1334px] mx-auto px-4 md:px-0 my-3 md:my-8 text-[13px] md:text-base">
            <div className="w-full flex items-center bg-white border border-gray-100 md:border-gray-200 rounded-full px-4 md:px-5 py-2.5 md:py-3.5 shadow-sm focus-within:ring-4 focus-within:ring-[#f95e34]/10 focus-within:border-[#f95e34]/50 transition-all group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="text-[#a0a0a0] group-focus-within:text-[#f95e34] transition-colors w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                <div className="w-[1.5px] h-[18px] bg-[#e5e7eb] mx-3"></div>
                <input 
                    type="text" 
                    placeholder="Search for a meal" 
                    className="flex-1 bg-transparent outline-none text-[#1a1a1a] text-sm md:text-[15px] font-semibold placeholder:text-[#a0a0a0] placeholder:font-medium"
                />
            </div>
        </div>
    );
}
