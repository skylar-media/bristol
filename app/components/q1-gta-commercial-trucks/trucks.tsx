"use client";

import { vehicleCards } from "@/lib/data/trucks";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./embla/EmblaCarouselArrowButtons";

useEmblaCarousel.globalOptions = { loop: true };

const Trucks = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const populateTruck = (vehicleTitle: string) => {
    const formIds = ["contact-form", "truck-lead"];

    formIds.forEach((formId) => {
      const form = document.getElementById(formId) as HTMLFormElement | null;
      if (!form) return;
      const select = form.querySelector(
        'select[name="vehicle"]'
      ) as HTMLSelectElement | null;
      if (!select) return;
      select.value = vehicleTitle;
      select.dispatchEvent(new Event("change", { bubbles: true }));
    });

    document
      .getElementById("contact-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const sortedVehicles = [...vehicleCards].sort((a, b) => a.order - b.order);
  return (
    <section className="bg-main">
      <div className="embla mt-12 container mb-12 md:mt-20 md:mb-0">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {sortedVehicles.map((vehicle) => {
              return (
                <div className="embla__slide" key={vehicle.id}>
                  <div className=" flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.title}
                      width={2500}
                      height={200}
                      className="mb-6 md:h-55 w-full object-contain"
                    />

                    <h3 className="mb-2 text-lg md:text-xl font-bold uppercase tracking-wide text-main">
                      {vehicle.title}
                    </h3>

                    <p className="mb-6 leading-relaxed text-gray-800">
                      {vehicle.description}
                    </p>

                    <ul className="mb-8 space-y-2 text-gray-800">
                      {vehicle.features.map((feature) => (
                        <li key={feature} className="flex gap-2 items-center">
                          <span className="h-1.5 w-1.5 rounded-full bg-gray-800" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <button
                      className="mt-auto w-full rounded-xl bg-red px-6 py-4 text-lg font-semibold text-white transition hover:bg-red-600"
                      onClick={() => populateTruck(vehicle.title)}
                      id={vehicle.btnId}
                    >
                      {vehicle.ctaText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            color="white"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            color="white"
          />
        </div>
      </div>
    </section>
  );
};

export default Trucks;
