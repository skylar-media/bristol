import Link from "next/link";
import ThankYouHeader from "../components/q1-gta-commercial-trucks/thank-you-header";

const page = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <ThankYouHeader />
      <div className="flex flex-1 items-center justify-center py-15 bg-[#F4F6F8]">
        <section className="mx-auto bg-white max-w-150 w-[90%] flex flex-col items-center justify-center p-4 md:p-13 border rounded-2xl border-[#E0E0E0]">
          <div className="md:w-20 w-14 h-14 md:h-20 text-[#2E7D32] rounded-[50%] flex items-center justify-center bg-[#E8F5E9] mb-5">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="md:w-10 md:h-10 w-7 h-7"
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          </div>
          <h1 className="text-main text-center font-bold text-2xl mb-4 md:mb-8 md:text-5xl text-balance">
            Thanks
          </h1>
          <div className="font-semibold text-center flex flex-col gap-2 md:gap-4">
            <p>
              We&apos;ll call you in the next couple hours (or sooner!) during
              business hours.
            </p>
            <p>
              If our location is currently closed, we&apos;ll reach out as soon
              as we&apos;re open in the morning.
            </p>
          </div>
          <div className="rounded-md max-w-100 p-2 md:p-5 w-full bg-[#F8FAFC] border border-[#DAE1E7] my-7">
            <h3 className="text-main md:text-2xl text-lg text-center border-b-[#DAE1E7] border-b pb-3 mb-4 font-semibold">
              General Bristol Hours
            </h3>
            <ul className="list-none p-0 m-0 text-base">
              <li className="flex justify-between mb-2">
                <strong>Mon - Fri:</strong> 7:30 AM - 5:00 PM
              </li>
              <li className="flex justify-between mb-2">
                <strong>Saturday:</strong> 8:00 AM - 3:00 PM
              </li>
              <li className="flex justify-between mb-2">
                <strong>Sunday:</strong> 9:00 AM - 3:00 PM
              </li>
            </ul>
            <div className="text-center text-xs">*Hours vary by location.</div>
          </div>
          <Link
            href="https://bristoltruckrentals.com"
            className="text-main font-bold text-center"
          >
            ← Return to BristolTruckRentals.com
          </Link>
        </section>
      </div>
      <footer className="p-5 text-center border-t-[#DAE1E7] border-t text-base">
        &copy; {new Date().getFullYear()} Bristol Car & Truck Rentals. All
        rights reserved.
      </footer>
    </div>
  );
};

export default page;
