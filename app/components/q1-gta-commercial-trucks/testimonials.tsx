import { Testimonial, testimonials } from "@/lib/data/testimonials";

const Testimonials = () => {
  return (
    <section className="container flex flex-col items-center gap-5 md:gap-8 w-full">
      <h2 className="text-main font-bold text-2xl md:text-5xl">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item: Testimonial, index: number) => (
          <div
            key={index}
            className="rounded-xl border border-main bg-white p-6 shadow-lg transition hover:shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green text-white font-semibold">
                {item.initial}
              </div>
              <p className="font-semibold text-gray-900">{item.name}</p>
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg">
                  ★
                </span>
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-700 leading-relaxed ">{item.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
