import Image from "next/image";
import Link from "next/link";
import Modal from "../modal";
import PrivacyContent from "../privacy-content";
import TermsContent from "../terms-content";

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-[90%] py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <Link
            href="#"
            id="logo-bristol-lp-footer"
            className="flex items-end flex-col"
          >
            <Image
              src="/bristol-logo.png"
              alt="Bristol Truck Rentals"
              width={100}
              height={100}
              unoptimized
              className="w-40 h-full object-cover"
            />
            <span className="mt-1 text-main text-xs font-bold text-right">
              Since 1982
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center md:flex-nowrap flex-wrap gap-3 md:gap-6 text-base font-semibold text-main md:flex-row">
            <Modal
              trigger_text={
                <button
                  className="hover:underline"
                  id="lnk-bristol-lp-footer-privacy"
                >
                  Privacy Policy
                </button>
              }
              size="xl"
              id="lnk-bristol-lp-footer-privacy-modal"
              title="Bristol Rentals Ltd. - Privacy Policy"
              body={<PrivacyContent />}
            />
            <Modal
              trigger_text={
                <button
                  className="hover:underline"
                  id="lnk-bristol-lp-footer-terms"
                >
                  Terms of Service
                </button>
              }
              size="xl"
              id="lnk-bristol-lp-footer-terms-modal"
              title="TERMS AND CONDITIONS OF RENTAL AGREEMENT"
              body={<TermsContent />}
            />
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
