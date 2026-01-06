import Branches from "../components/q1-gta-commercial-trucks/branches";
import GtaTradesTrust from "../components/q1-gta-commercial-trucks/gta-trades-trust";
import Header from "../components/q1-gta-commercial-trucks/header";
import Hero from "../components/q1-gta-commercial-trucks/hero";
import Testimonials from "../components/q1-gta-commercial-trucks/testimonials";

const page = () => {
  return (
    <div className="">
      <Header />
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
      <GtaTradesTrust />
      <Testimonials />
      <Branches />
    </div>
  );
};

export default page;
