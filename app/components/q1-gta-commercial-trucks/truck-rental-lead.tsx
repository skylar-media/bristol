import { industries } from "@/lib/data/industries";
import QuoteForm from "./contact-form";

const TruckRentalLead = ({ location }: { location: string }) => {
  return (
    <section className="bg-white container">
      <div>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* LEFT: Form */}
          <div className="lg:col-span-7 flex flex-col gap-2 md:gap-5">
            <h2 className="text-main text-center md:text-left font-bold text-2xl md:text-5xl text-balance">
              Let&apos;s Talk Truck Rentals
            </h2>

            <p className="max-w-2xl text-center md:text-left">
              We&apos;ll confirm vehicle availability, prepare your quote, and
              apply your <strong>$50*</strong> discount.
              <br />
              Tell us how to reach you:
            </p>

            <QuoteForm
              buttonId="frm-bristol-lp-top-submit"
              formId="truck-lead"
              location={location}
            />
          </div>

          <aside className="lg:col-span-5">
            <p className="mb-6 font-bold uppercase tracking-wide text-black">
              We serve your industry:
            </p>

            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <span
                  key={industry}
                  className="rounded-full bg-[#E4F4FF] px-3 md:px-5 py-2 font-bold text-main"
                >
                  {industry}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default TruckRentalLead;
