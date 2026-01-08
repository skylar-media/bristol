import { BristolLocationType } from "@/lib/data/locations";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  currentLocation,
}: {
  currentLocation: BristolLocationType;
}) => {
  return (
    <div className="relative overflow-hidden">
      <picture>
        <source srcSet="/hero_2500.jpg" media="(min-width: 2000px)" />
        <source srcSet="/hero_2000.png" media="(min-width: 1650px)" />
        <source srcSet="/hero_1200.jpg" media="(min-width: 900px)" />
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
        <h1 className="text-2xl md:text-3xl xl:text-5xl text-balance hero-heading">
          Commercial Van and Truck Rentals in{" "}
          <span className="lg:block">
            {currentLocation.label.toLowerCase() === "gta"
              ? "the GTA"
              : currentLocation.label}
          </span>
        </h1>
        <p className=" md:max-w-[60%] w-full text-balance xl:text-nowrap">
          When you book with Bristol, your reservation is guaranteed.
        </p>
        <div className="items-center gap-4 xl:mt-6 mb-1 hidden md:flex">
          <Link
            href="#contact-us"
            id="btn-bristol-lp-hero-get-quote"
            className="bg-red px-5 py-2 rounded-xl"
          >
            Get Quote & Save $50
          </Link>
          <Link
            href={currentLocation.ringsToPhoneTel}
            id="btn-bristol-lp-hero-call"
            className="bg-yellow text-black px-5 py-2 rounded-xl"
          >
            Call Now
          </Link>
        </div>
        <span className="text-yellow font-bold lg:-mt-3">
          Use PROMO CODE SAVE50
        </span>
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
