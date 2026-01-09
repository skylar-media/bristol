import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-[90%] py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link
            href="#"
            id="logo-bristol-lp-footer"
            className="flex items-center"
          >
            <Image
              src="/bristol-logo.png"
              alt="Bristol Truck Rentals"
              width={100}
              height={100}
              unoptimized
              className="w-40 h-full object-cover"
            />
          </Link>

          {/* Links */}
          <nav className="flex items-center md:flex-nowrap flex-wrap gap-3 md:gap-6 text-base font-semibold text-main md:flex-row">
            <Link
              href="/"
              id="lnk-bristol-lp-footer-privacy"
              className="hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              id="lnk-bristol-lp-footer-terms"
              className="hover:underline"
            >
              Terms of Service
            </Link>
            <Link
              href="#contact-us"
              id="lnk-bristol-lp-footer-contact"
              className="hover:underline"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
      <div className="p-5 text-center border-t-[#DAE1E7] border-t text-base">
        &copy; {new Date().getFullYear()} Bristol Car & Truck Rentals. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
