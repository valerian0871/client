import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#fdfaf7] pt-16 pb-8 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
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
                        <div className="flex gap-2">
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
                        <span className="text-[#f95e34] font-extrabold text-4xl tracking-tighter">CP</span>
                        <div className="flex flex-col">
                            <span className="font-extrabold text-[#1a1a1a] text-[15px] leading-tight uppercase tracking-tight">Cakes N' Pastries</span>
                            <span className="font-bold text-[#1a1a1a] text-[11px] leading-tight uppercase tracking-[0.2em]">Restaurant</span>
                        </div>
                    </div>
                    
                    <div className="text-xs text-gray-500 font-medium text-center md:text-right flex flex-col gap-1 items-center md:items-end">
                        <p className="font-bold text-gray-800">Reach Out & Visit Us:</p>
                        <p>Email: support@cakesnpastries.com</p>
                        <p>Address: 12 Baker Street, G.R.A Phase 2, Port Harcourt</p>
                        <div className="flex gap-4 mt-2">
                            <span className="font-bold text-gray-400 cursor-pointer hover:text-[#f95e34] transition-colors">IG</span>
                            <span className="font-bold text-gray-400 cursor-pointer hover:text-[#f95e34] transition-colors">TW</span>
                            <span className="font-bold text-gray-400 cursor-pointer hover:text-[#f95e34] transition-colors">YT</span>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center text-[10px] text-gray-400 font-medium">
                    © 2024 Cakes N' Pastries. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
