import { Icon } from "@iconify/react";

export default function SearchBar() {
    return (
        <div className="w-full flex items-center gap-3 my-8">
            <div className="flex-1 flex items-center bg-white border border-gray-200 rounded-full px-5 py-3.5 shadow-sm focus-within:ring-4 focus-within:ring-[#f95e34]/10 focus-within:border-[#f95e34]/50 transition-all group">
                <Icon icon="solar:magnifier-line-duotone" className="text-gray-400 group-focus-within:text-[#f95e34] transition-colors" width="22" height="22" />
                <input 
                    type="text" 
                    placeholder="Search for meals..." 
                    className="flex-1 bg-transparent px-3 outline-none text-gray-800 text-[15px] font-semibold placeholder:text-gray-400 placeholder:font-medium"
                />
            </div>
            <button className="w-[52px] h-[52px] flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-sm text-gray-600 hover:text-[#f95e34] hover:border-[#f95e34]/30 transition-all shrink-0">
                <Icon icon="solar:tuning-square-2-line-duotone" width="22" height="22" />
            </button>
        </div>
    );
}
