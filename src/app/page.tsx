// page.tsx
"use client";

import Image from "next/image";
import { ArrowBigRightDash } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
      <div className="grid grid-cols-2 gap-10 items-center ml-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Indulge in our Delicious Bakery</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, delectus aperiam. Amet quos consectetur veritatis quod impedit aperiam reprehenderit, vitae animi cum quae?</p>
          <div className="flex gap-7">
              <Link href="/orders">
                  <button className="text-amber-800 font-bold hover:bg-amber-800 hover:text-white transition-all duration-500 px-4 py-2 rounded">Order Now</button>
              </Link>
              <button className="flex gap-2 items-center text-amber-800 font-bold hover:bg-amber-800 hover:text-white transition-all duration-500 px-3 py-2 rounded">
                Explore More <ArrowBigRightDash/>
              </button>
          </div>
        </div>
        <div>
          <Image
            src="/showcase.png"
            alt="showcase"
            width={600}
            height={600}
            className="object-contain mt-7"
          />
        </div>
      </div>

  );
}