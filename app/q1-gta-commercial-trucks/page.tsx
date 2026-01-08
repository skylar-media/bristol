import { bristolLocations } from "@/lib/data/locations";
import Link from "next/link";
import Branches from "../components/q1-gta-commercial-trucks/branches";
import QuoteForm from "../components/q1-gta-commercial-trucks/contact-form";
import Footer from "../components/q1-gta-commercial-trucks/footer";
import GtaTradesTrust from "../components/q1-gta-commercial-trucks/gta-trades-trust";
import Header from "../components/q1-gta-commercial-trucks/header";
import Hero from "../components/q1-gta-commercial-trucks/hero";
import Testimonials from "../components/q1-gta-commercial-trucks/testimonials";
import TruckRentalLead from "../components/q1-gta-commercial-trucks/truck-rental-lead";
import Trucks from "../components/q1-gta-commercial-trucks/trucks";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const paramLocation = (await searchParams).city;
  const currentLocation =
    typeof paramLocation === "string" ? paramLocation.toLowerCase() : "gta";

  const locationData =
    bristolLocations.find(
      (location) => location.label.toLowerCase() === currentLocation
    ) ||
    bristolLocations.find((location) => location.fallback) ||
    bristolLocations[0];
  return (
    <div>
      <Header currentLocation={locationData} />
      <div className="flex-1">
        <Hero currentLocation={locationData} />
        <div className="items-center justify-center mt-4 gap-4 xl:mt-6 mb-1 md:hidden flex text-white font-bold">
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
        <p className="text-balance text-center mt-4 text-sm text-main font-bold md:hidden block">
          Canadian Owned • Pre-Cleaned Vehicles • Fast Pick-Up
        </p>
        <section className="flex flex-col items-center text-center gap-2 md:gap-5 w-full container">
          <h2 className="text-main font-bold text-2xl md:text-5xl text-balance">
            A Truck for Every Job, Delivery, and Trade
          </h2>
          <p className="font-bold md:max-w-xl">
            Cleaned and maintained for reliability, {locationData.name} trades
            choose Bristol commercial vans and trucks.
          </p>
        </section>
        <Trucks />
        <TruckRentalLead location={locationData.name} />
        <GtaTradesTrust />
        <Testimonials />
        <Branches />
        <section
          className="flex flex-col items-center gap-2 md:gap-5 w-full container"
          id="contact-us"
        >
          <h2 className="text-main font-bold text-2xl text-center md:text-5xl text-balance">
            Contact Your Local Bristol Location Today
          </h2>
          <div className="max-w-3xl text-center md:text-left">
            <p>
              We&apos;ll confirm vehicle availability, prepare your quote, and
              apply your $50* discount.
            </p>
            <p>Tell us how to reach you:</p>
          </div>
          <QuoteForm
            buttonId="frm-bristol-lp-bottom-submit"
            formId="contact-form"
            location={locationData.name}
          />
          <p className="font-bold text-center mt-4 max-w-3xl">
            *Offer applies to a single vehicle rental booked by March, 31 2026.
            $50 discount applies to qualifying bookings as specified in the
            promotion details. Eligible vehicles include Cargo Vans, 16&apos;
            Cube Trucks, and 20&apos;-26&apos; / 5-Ton trucks. Bristol car and
            truck rental locations include Brampton, Mississauga and Milton
            exclusively.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default page;
