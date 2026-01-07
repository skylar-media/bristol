import Branches from "../components/q1-gta-commercial-trucks/branches";
import QuoteForm from "../components/q1-gta-commercial-trucks/contact-form";
import GtaTradesTrust from "../components/q1-gta-commercial-trucks/gta-trades-trust";
import Hero from "../components/q1-gta-commercial-trucks/hero";
import Testimonials from "../components/q1-gta-commercial-trucks/testimonials";
import TruckRentalLead from "../components/q1-gta-commercial-trucks/truck-rental-lead";
import Trucks from "../components/q1-gta-commercial-trucks/trucks";

const page = async () => {
  return (
    <div className="">
      <Hero />
      <section className="flex flex-col items-center text-center gap-2 md:gap-5 w-full container">
        <h2 className="text-main font-bold text-2xl md:text-5xl text-balance">
          A Truck for Every Job, Delivery, and Trade
        </h2>
        <p className="font-bold md:max-w-xl">
          Cleaned and maintained for reliability, Mississauga trades choose
          Bristol commercial vans and trucks.
        </p>
      </section>
      <Trucks />
      <TruckRentalLead />
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
        <QuoteForm buttonId="contact-form-btn" formId="contact-form" />
        <p className="font-bold text-center mt-4 max-w-3xl">
          *Offer applies to a single vehicle rental booked by March, 31 2026.
          $50 discount applies to qualifying bookings as specified in the
          promotion details. Eligible vehicles include Cargo Vans, 16&apos; Cube
          Trucks, and 20&apos;-26&apos; / 5-Ton Trucks.
        </p>
      </section>
    </div>
  );
};

export default page;
