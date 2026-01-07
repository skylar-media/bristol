import { Check } from "lucide-react";
import Image from "next/image";

export default function GtaTradesTrust() {
  return (
    <section className="bg-grey">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-2 md:gap-4">
            <h2 className="text-main text-center md:text-left font-bold text-2xl md:text-5xl text-balance">
              GTA Trades <br className="hidden md:inline" /> Trust Bristol
            </h2>

            <p className="font-bold md:font-lg text-center md:text-left">
              Bristol is your local <br className="hidden sm:block" />
              business partner with:
            </p>

            <ul className="space-y-4">
              <li className="flex justify-center md:justify-start md:items-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-main text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="">Guaranteed reservations, every time</span>
              </li>

              <li className="flex items-start justify-center md:justify-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-main text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="">
                  Variety of vans and trucks to suit all jobs
                </span>
              </li>

              <li className="flex items-start justify-center md:justify-start gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded bg-main text-white">
                  <Check className="h-4 w-4" />
                </span>
                <span className="">Pre-cleaned, ready-to-go vehicles</span>
              </li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full overflow-hidden ">
            <Image
              src="/gta-trades.jpg" // replace with real path
              alt="Bristol truck rental"
              width={700}
              height={450}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
