import { BristolLocationType } from "@/lib/data/locations";
import Image from "next/image";
import Link from "next/link";
import CanadaFlag from "../svg/canana-flag";
import Phone from "../svg/phone";

const Header = ({
  currentLocation,
}: {
  currentLocation: BristolLocationType;
}) => {
  return (
    <div className="bg-white sticky top-0 z-50 shadow">
      <div className="w-full max-w-[90%] mx-auto">
        <header className="flex items-center justify-between w-full py-6">
          <Link id="logo-bristol-lp-header" href="#" className="flex flex-col">
            <Image
              src="/bristol-logo.png"
              alt="Bristol Truck Rentals"
              width={160}
              height={60}
              loading="eager"
              className="object-contain"
            />
            <span className="mt-1 text-main text-xs font-bold text-right">
              Since 1982
            </span>
          </Link>
          <div className="flex items-center gap-10">
            <p className="font-bold text-main tracking-wide lg:block hidden">
              BOOK NOW TO SAVE $50* — LIMITED TIME OFFER
            </p>

            <Link
              href={currentLocation.ringsToPhoneTelRail}
              id="btn-bristol-lp-header-call"
              className="inline-flex items-center text-base gap-2 rounded-xl bg-yellow px-5 py-2 font-semibold"
            >
              <Phone />
              <span>{currentLocation.displayPhone}</span>
            </Link>
            <CanadaFlag className="-ml-4 md:inline hidden" />
          </div>
        </header>
        <p className="font-bold mb-5 text-center text-main text-base tracking-wide lg:hidden block">
          BOOK NOW TO SAVE $50* —
          <br />
          LIMITED TIME OFFER
        </p>
      </div>
    </div>
  );
};

export default Header;
