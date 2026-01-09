import Image from "next/image";
import Link from "next/link";

const ThankYouHeader = () => {
  return (
    <div className="bg-white sticky top-0 z-50 shadow">
      <div className="w-full max-w-[90%] mx-auto">
        <header className="flex items-center justify-center w-full py-6">
          <Link id="logo-bristol-lp-header" href="#">
            <Image
              src="/bristol-logo.png"
              alt="Bristol Truck Rentals"
              width={100}
              height={100}
              unoptimized
              className="w-35 md:w-40 h-full object-cover"
            />
          </Link>
        </header>
      </div>
    </div>
  );
};

export default ThankYouHeader;
