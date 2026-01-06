import Header from "../components/q1-gta-commercial-trucks/header";
import Hero from "../components/q1-gta-commercial-trucks/hero";

const page = () => {
  return (
    <div className="">
      <Header />
      <Hero />
      <section className="flex flex-col items-center text-center gap-2 md:gap-5 w-full max-w-[90%] mx-auto">
        <h2 className="text-main font-bold text-2xl md:text-5xl">
          A Truck for Every Job, Delivery, and Trade
        </h2>
        <p className="font-bold md:max-w-xl">
          Cleaned and maintained for reliability, Mississauga trades choose
          Bristol commercial vans and trucks.
        </p>
      </section>
    </div>
  );
};

export default page;
