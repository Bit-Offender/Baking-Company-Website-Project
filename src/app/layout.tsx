import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BakeOven",  
    template: "%s | BakeOven",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-orange-100 flex flex-col min-h-screen">
        <header>
          <ul className="flex justify-start gap-10 content-center ml-5">
            <Link href="/"><Image src="/logo.png" alt="logo" width={50} height={50} className="object-contain"></Image></Link>
            <li className="hover:underline mt-3"><Link href="/">Home</Link></li>
            <li className="hover:underline mt-3"><Link href="/recipes">Recipes</Link></li>
            <li className="hover:underline mt-3"><Link href="/about">About Us</Link></li>
            <li className="hover:underline mt-3"><Link href="/contact">Contact Us</Link></li>
          </ul>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-amber-800 text-amber-100 py-5">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <p className="text-center text-white mt-3">&copy; 2025 BakeOven. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}