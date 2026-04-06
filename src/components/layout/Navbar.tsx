"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function Navbar() {
    const { totalCartItems } = useCart();
    return (
        <header className="w-full flex flex-col sticky top-0 z-50">
            {/* Top Bar */}
            <div className="w-full bg-[#FCF6F0] text-[11px] sm:text-[12px] font-semibold text-gray-700">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between px-3 md:px-6 py-1.5">
                    <div className="flex items-center gap-1 sm:gap-1.5 hover:text-[#ff4700] cursor-pointer transition-colors shrink-0">
                        <Icon icon="solar:map-point-bold-duotone" width="16" height="16" className="text-[#ff4700] sm:w-[18px] sm:h-[18px]" />
                        <span className="text-[10px] sm:text-[11px] whitespace-nowrap">Futa Southgate</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-6 text-[9.5px] sm:text-[12px]">
                        <Link href="#" className="hover:text-[#ff4700] transition-colors whitespace-nowrap">About Cakes&apos;n&apos;Pastries</Link>
                        <Link href="#" className="hidden sm:block hover:text-[#ff4700] transition-colors">FAQs</Link>
                        <span className="font-bold text-black text-[10px] sm:text-[13px] whitespace-nowrap">070-555-555-54</span>
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
                        <Link href="#" className="hover:text-[#ff4700] transition-colors">Food Menu</Link>
                        <Link href="#" className="hover:text-[#ff4700] transition-colors">My Orders</Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-[#ff4700] transition-colors relative">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 8.625L9 3.375m10.5 5.25L15 3.375m3.936 17.25H5.064a1.44 1.44 0 0 1-1.383-1.136l-2.138-9a1.484 1.484 0 0 1 1.383-1.864h18.148a1.484 1.484 0 0 1 1.383 1.864l-2.138 9a1.44 1.44 0 0 1-1.383 1.136m-11.436-9v6m4.5-6v6m4.5-6v6"></path>
                                </svg>
                                {totalCartItems > 0 && (
                                    <span className="absolute -top-1.5 -right-2 bg-[#ff4700] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                        {totalCartItems}
                                    </span>
                                )}
                            </div>
                            Cart
                        </Link>
                        <Link href="#" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold text-[14px] ml-2">
                            Log In /Sign Up
                        </Link>
                    </nav>

                    {/* Mobile Menu Actions */}
                    <div className="flex md:hidden items-center gap-2 shrink-0">
                        <Link href="#" className="px-3 py-1.5 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold text-[11px] sm:text-[12px] shadow-sm tracking-tight whitespace-nowrap">
                            Log In /Sign Up
                        </Link>
                        <button className="bg-white text-black rounded-full p-1.5 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow-sm relative">
                            {totalCartItems > 0 && (
                                <span className="absolute -top-1 -right-1 bg-[#ff4700] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-md">
                                    {totalCartItems}
                                </span>
                            )}
                            <Icon icon="solar:hamburger-menu-line-duotone" width="20" height="20" className="sm:w-[22px] sm:h-[22px]" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}