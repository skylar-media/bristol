import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/hero.png"
        width={2200}
        height={100}
        className="object-center object-cover w-full"
        alt="Bristol Truck"
        loading="eager"
      />
      <div className="absolute hero-content p-5 font-bold text-white max-w-140 flex flex-col gap-5">
        <h1 className="text-2xl md:text-5xl">
          Commercial Van and Truck Rentals in Mississauga
        </h1>
        <p className=" md:max-w-[60%] w-full">
          When you book with Bristol, your reservation is guaranteed.
        </p>
        <div className="flex items-center gap-4 mt-6 mb-1">
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
        <p>Canadian Owned • Pre-Cleaned Vehicles • Fast Pick-Up</p>
      </div>
    </div>
  );
};

export default Hero;
