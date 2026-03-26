import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-[#fdfaf7] pt-12 md:pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-6 mt-8 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Quick Links</h4>
                        <ul className="space-y-4 text-xs text-gray-500 font-semibold">
                            <li><Link href="#">Home</Link></li>
                            <li><Link href="#">About</Link></li>
                            <li><Link href="#">Co-working Space</Link></li>
                            <li><Link href="#">Bakery</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Menu</h4>
                        <ul className="space-y-4 text-xs text-gray-500 font-semibold">
                            <li><Link href="#">Breakfast & Pastries</Link></li>
                            <li><Link href="#">African Culinary & Grills</Link></li>
                            <li><Link href="#">Continental Dishes</Link></li>
                            <li><Link href="#">Porridge & Soups</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Customer Support</h4>
                        <ul className="space-y-4 text-xs text-gray-500 font-semibold">
                            <li><Link href="#">My Orders</Link></li>
                            <li><Link href="#">Order Tracking</Link></li>
                            <li><Link href="#">FAQs</Link></li>
                            <li><Link href="#">Delivery Information</Link></li>
                        </ul>
                    </div>
                    <div className="md:col-span-2">
                        <h4 className="font-bold text-gray-900 mb-6 text-sm">Stay Updated (Email List)</h4>
                        <p className="text-xs text-gray-500 font-medium mb-4">
                            Get our latest offers and updates on new meals, fast release events all year.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-[#f95e34] bg-white text-sm"
                            />
                            <button className="px-8 py-3 bg-[#111] text-white rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm shadow-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 gap-6">
                    <div className="flex items-center gap-2">
                        <Image src="/images/Logo.svg" alt="Cakes N' Pastries Logo" width={48} height={48} className="h-10 w-auto md:h-12 object-contain" />
                        <Image src="/images/lettering.png" alt="Cakes N' Pastries Lettering" width={150} height={40} className="h-7 w-auto md:h-9 object-contain" />
                    </div>

                    <div className="text-xs text-[#1a1a1a] font-medium text-center md:text-left flex flex-col gap-2 items-center md:items-start max-w-sm">
                        <p>Phone: 0903 456 7890</p>
                        <p>Email: support@cakesnpastries.com</p>
                        <p>Address: 12 Green Street, GRA Phase 2, Port Harcourt</p>
                        <div className="flex gap-4 mt-2 mb-2">
                            <Icon icon="ri:instagram-fill" className="text-xl cursor-pointer hover:text-[#f95e34] transition-colors" />
                            <Icon icon="ri:twitter-x-line" className="text-xl cursor-pointer hover:text-[#f95e34] transition-colors" />
                            <Icon icon="ri:youtube-fill" className="text-xl cursor-pointer hover:text-[#f95e34] transition-colors" />
                        </div>
                        <p className="text-[11px] text-[#8b8b8b] font-medium">
                            © 2025 Cakes &apos;n&apos; Pastries. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
