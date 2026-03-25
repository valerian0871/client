"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <header className="w-full flex flex-col sticky top-0 z-50">
            {/* Top Bar */}
            <div className="hidden sm:block w-full bg-[#FCF6F0] text-[12px] font-semibold text-gray-700">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1.5">
                    <div className="flex items-center gap-1.5 hover:text-black cursor-pointer transition-colors">
                        <Icon icon="solar:routing-2-bold-duotone" width="16" height="16" className="text-[#f95e34]" />
                        <span>Futa Southgate</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="#" className="hover:text-black transition-colors">About Cakes&apos;n&apos;Pastries</Link>
                        <Link href="#" className="hover:text-black transition-colors">FAQs</Link>
                        <span className="font-bold text-black text-[13px]">070-555-555-54</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="w-full bg-black">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2.5">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/images/Logo.svg" alt="Cakes N' Pastries Logo" width={220} height={45} priority className="h-9 w-auto md:h-11 object-contain" />
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-7 text-[14px] font-medium text-gray-100">
                        <Link href="#" className="hover:text-white transition-colors">Food Menu</Link>
                        <Link href="#" className="hover:text-white transition-colors">My Orders</Link>
                        <Link href="#" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Icon icon="solar:bag-3-outline" width="20" height="20" />
                            Cart
                        </Link>
                        <Link href="#" className="px-5 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold text-[14px] ml-2">
                            Log In /Sign Up
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-white p-2">
                        <Icon icon="solar:hamburger-menu-line-duotone" width="28" height="28" />
                    </button>
                </div>
            </div>
        </header>
    );
}