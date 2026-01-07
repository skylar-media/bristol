import { BristolLocationType } from "@/lib/data/locations";
import Image from "next/image";
import Link from "next/link";
import Phone from "../svg/phone";

const Header = ({
  currentLocation,
}: {
  currentLocation: BristolLocationType;
}) => {
  return (
    <div className="bg-white sticky top-0 z-50">
      <div className="w-full max-w-[90%] mx-auto">
        <header className="flex items-center justify-between w-full py-6">
          <Image
            src="/bristol-logo.png"
            alt="Bristol Truck Rentals"
            width={100}
            height={100}
            unoptimized
            className="w-40 h-full object-cover"
            id="logo-bristol-lp-header"
          />
          <div className="flex items-center gap-10">
            <p className="font-bold text-main tracking-wide lg:block hidden">
              BOOK NOW TO SAVE $50* — LIMITED TIME OFFER
            </p>

            <Link
              href={currentLocation.ringsToPhoneTel}
              id="btn-bristol-lp-header-call"
              className="inline-flex items-center text-base gap-2 rounded-xl bg-yellow px-5 py-2 font-semibold"
            >
              <Phone />
              <span>{currentLocation.displayPhone}</span>
            </Link>
          </div>
        </header>
        <p className="font-bold mb-5 text-center text-main text-base tracking-wide lg:hidden block">
          BOOK NOW TO SAVE $50* — LIMITED TIME OFFER
        </p>
      </div>
    </div>
  );
};

export default Header;
