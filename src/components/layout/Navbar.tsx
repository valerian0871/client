"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="w-full flex flex-col sticky top-0 z-50">
            {/* Top Bar */}
            <div className="w-full bg-[#FCF6F0] text-[11px] sm:text-[12px] font-semibold text-gray-700">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6 py-1.5">
                    <div className="flex items-center gap-1.5 hover:text-black cursor-pointer transition-colors">
                        <Icon icon="solar:map-point-bold-duotone" width="18" height="18" className="text-[#f95e34]" />
                        <span>Futa Southgate</span>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <Link href="#" className="hidden sm:block hover:text-black transition-colors">About Cakes&apos;n&apos;Pastries</Link>
                        <Link href="#" className="hidden sm:block hover:text-black transition-colors">FAQs</Link>
                        <span className="font-bold text-black text-[12px] sm:text-[13px]">070-555-555-54</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="w-full bg-[#100902] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] border-b border-gray-100">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 md:px-6 py-4">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/images/Logo.svg" alt="Cakes N' Pastries Logo" width={45} height={45} priority className="h-8 w-auto md:h-11 object-contain" />
                        <Image src="/images/lettering.png" alt="Cakes N' Pastries Lettering" width={150} height={45} priority className="h-5 w-auto md:h-8 object-contain filter invert opacity-90" />
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-gray-100">
                        <Link href="#" className="hover:text-orange transition-colors">Food Menu</Link>
                        <Link href="#" className="hover:text-orange transition-colors">My Orders</Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-[#f95e34] transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 8.625L9 3.375m10.5 5.25L15 3.375m3.936 17.25H5.064a1.44 1.44 0 0 1-1.383-1.136l-2.138-9a1.484 1.484 0 0 1 1.383-1.864h18.148a1.484 1.484 0 0 1 1.383 1.864l-2.138 9a1.44 1.44 0 0 1-1.383 1.136m-11.436-9v6m4.5-6v6m4.5-6v6"></path>
                            </svg>
                            Cart
                        </Link>
                        <Link href="#" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold text-[14px] ml-2">
                            Log In /Sign Up
                        </Link>
                    </nav>

                    {/* Mobile Menu Actions */}
                    <div className="flex md:hidden items-center gap-2">
                        <Link href="#" className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold text-[12px] shadow-sm tracking-tight">
                            Log In/Sign Up
                        </Link>
                        <button className="bg-white text-black rounded-full p-2 w-9 h-9 flex items-center justify-center shadow-sm">
                            <Icon icon="solar:hamburger-menu-line-duotone" width="22" height="22" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}