import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { CartProvider } from "../context/CartContext";


const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cakes N' Pastries Restaurant",
  description: "Order awesome Breakfast, African dishes, and continental meals prepared fresh daily. Enjoy our Best Sellers, Special Offers, and comfortable dining.",
  keywords: ["cakes", "pastries", "restaurant", "african dishes", "continental meals", "breakfast", "food delivery", "grills", "pasta"],
  icons: {
    icon: "/images/Logo.svg",
    shortcut: "/images/Logo.svg",
    apple: "/images/Logo.svg",
  },
  openGraph: {
    title: "Cakes N' Pastries Restaurant",
    description: "Order awesome Breakfast, African dishes, and continental meals prepared fresh daily.",
    type: "website",
    locale: "en_NG",
    siteName: "Cakes N' Pastries",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cakes N' Pastries Restaurant",
    description: "Order awesome Breakfast, African dishes, and continental meals prepared fresh daily.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${nunito.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-white">
        <CartProvider>
          <Navbar />
          <main className="flex-1 w-full mx-auto">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
