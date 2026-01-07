"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <picture>
        {/* 2000px and up */}
        <source srcSet="/hero_2500.jpg" media="(min-width: 2000px)" />

        {/* 1400px – 1999px */}
        <source srcSet="/hero_2000.png" media="(min-width: 1650px)" />

        {/* 756px – 1399px */}
        <source srcSet="/hero_1200.jpg" media="(min-width: 900px)" />

        {/* fallback: below 756px */}
        <Image
          src="/hero_lg_mobile.jpg"
          width={2200}
          height={600}
          className="w-full object-cover"
          alt="Bristol Truck"
          priority
        />
      </picture>
      <div className="absolute hero-content xl:p-5 font-bold text-white md:max-w-140 flex flex-col gap-5">
        <h1 className="text-2xl md:text-3xl xl:text-5xl text-balance">
          Commercial Van and Truck Rentals in Mississauga
        </h1>
        <p className=" md:max-w-[60%] w-full">
          When you book with Bristol, your reservation is guaranteed.
        </p>
        <div className="items-center gap-4 xl:mt-6 mb-1 hidden md:flex">
          <Link href="#contact-us" className="bg-red px-5 py-2 rounded-xl">
            Get Quote & Save $50
          </Link>
          <Link
            href="tel:9058238499"
            className="bg-yellow text-black px-5 py-2 rounded-xl"
          >
            Call Now
          </Link>
        </div>
        <p className="text-balance hidden xl:block">
          Canadian Owned • Pre-Cleaned Vehicles • Fast Pick-Up
        </p>
        <ul className="text-balance hidden md:block xl:hidden">
          <li>Canadian Owned • Pre-Cleaned Vehicles</li>
          <li>Fast Pick-Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
