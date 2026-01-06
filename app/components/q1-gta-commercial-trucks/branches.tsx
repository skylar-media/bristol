import { Location, locations } from "@/lib/data/branches";
import Link from "next/link";
import Phone from "../svg/phone";

const Branches = () => {
  return (
    <section className="bg-main">
      <div className="flex flex-col items-center text-center gap-5 md:gap-8 w-full container">
        <h2 className="text-white font-bold text-2xl md:text-5xl text-balance">
          Our Local Branches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location: Location, index: number) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-6 flex flex-col justify-between items-start"
            >
              <div className="text-left">
                <h3 className="text-lg md:text-2xl font-semibold text-main leading-snug mb-3 md:min-h-17">
                  {location.title}
                </h3>

                <p>{location.addressLine1}</p>
                <p className=" mb-6">{location.addressLine2}</p>
              </div>
              <Link
                href={`tel:${location.phoneHref}`}
                className="inline-flex items-center text-base gap-2 rounded-xl bg-yellow px-5 py-2 font-semibold w-fit"
              >
                <Phone />
                <span>{location.phone}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
