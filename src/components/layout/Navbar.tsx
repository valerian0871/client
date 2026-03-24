"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="w-full bg-black border-b border-gray-100 sticky top-0 z-50 font-nunito">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-[#f95e34] font-extrabold text-3xl tracking-tighter">
                        CP
                    </span>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-[#1a1a1a] text-sm leading-tight uppercase tracking-tight">
                            Cakes N' Pastries
                        </span>
                        <span className="font-bold text-[#1a1a1a] text-[10px] leading-tight uppercase tracking-widest">
                            Restaurant
                        </span>
                    </div>
                </Link>

                {/* Nav Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-800">
                    <Link href="#" className="hover:text-[#f95e34] transition-colors">Food Menu</Link>
                    <Link href="#" className="hover:text-[#f95e34] transition-colors">My Orders</Link>
                    <Link href="#" className="flex items-center gap-2 hover:text-[#f95e34] transition-colors">
                        <ShoppingCart size={18} />
                        Cart
                    </Link>
                    <Link href="#" className="px-5 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                        Log In/Sign Up
                    </Link>
                </nav>
            </div>
        </header>
    );
}