import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-[90%] py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/bristol-logo.png"
              alt="Bristol Truck Rentals"
              width={100}
              height={100}
              unoptimized
              id="logo-bristol-lp-footer"
              className="w-40 h-full object-cover"
            />
          </div>

          {/* Links */}
          <nav className="flex flex-col items-center gap-6 text-base font-semibold text-main md:flex-row">
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
    </footer>
  );
};

export default Footer;
