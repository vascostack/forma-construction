import { useRef } from "react";
import { LuArrowUpRight, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Reveal from "../../components/common/Reveal";

import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";

const services = [
  {
    image: card1,
    lead: "Forma is ready to",
    title: "Build Your Dream",
    desc: "Reliable construction solutions designed around your needs and vision.",
    theme: "from-black/75 via-black/20 to-transparent",
    tint: "",
  },
  {
    image: card2,
    lead: "Forma is committed to",
    title: "Quality Construction",
    desc: "Professional workmanship and careful planning at every stage.",
    theme: "from-black/75 via-black/20 to-transparent",
    tint: "bg-green-700/45",
  },
  {
    image: card3,
    lead: "We deliver with",
    title: "Precision & Quality",
    desc: "Practical solutions with attention to detail and lasting performance.",
    theme: "from-black/75 via-black/20 to-transparent",
    tint: "",
  },
];

function Services() {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector("article");
    if (!card) return;

    const gap = 20;

    track.scrollBy({
      left: direction * (card.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="scroll-mt-16 bg-white px-5 py-14 md:px-10 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-7xl text-center">
        <Reveal className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-green-700">
            Our Services
          </p>

          <h2 className="text-2xl font-bold leading-tight text-gray-900 md:text-3xl">
            What We Build, We Build with Purpose
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Full-service construction solutions, delivered with care, quality,
            and precision.
          </p>
        </Reveal>

        {/* Slider */}
        <Reveal delay={300} className="relative">
          <button
            type="button"
            onClick={() => slide(-1)}
            aria-label="Previous services"
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-900 shadow-md backdrop-blur transition hover:bg-green-700 hover:text-white md:-left-5 md:h-12 md:w-12"
          >
            <LuChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((item) => (
              <article
                key={item.title}
                className="group relative h-[300px] w-full shrink-0 snap-start overflow-hidden rounded-lg bg-gray-200 sm:h-[340px] md:w-[calc(50%-10px)]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t ${item.theme}`}
                />

                {item.tint && (
                  <div
                    className={`absolute inset-0 ${item.tint} transition-colors duration-500 group-hover:bg-green-700/55`}
                  />
                )}

                <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/15 px-3 py-1.5 backdrop-blur-sm md:left-5 md:top-5">
                  <span className="text-[10px] font-medium text-white md:text-xs">
                    Forma Solid Structure
                  </span>
                </div>

                <button
                  type="button"
                  aria-label={`Explore ${item.title}`}
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/65 text-gray-900 backdrop-blur-md transition hover:bg-white hover:text-green-700 md:right-5 md:top-5 md:h-14 md:w-14"
                >
                  <LuArrowUpRight className="h-6 w-6" />
                </button>

                <div className="absolute bottom-0 left-0 max-w-xl p-5 text-white md:p-7">
                  <p className="text-sm font-medium md:text-base">
                    {item.lead}
                  </p>

                  <h3 className="mt-0.5 text-2xl font-extrabold leading-tight md:text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-md text-xs leading-5 text-white/90 md:text-sm md:leading-6">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={() => slide(1)}
            aria-label="Next services"
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/90 text-gray-900 shadow-md backdrop-blur transition hover:bg-green-700 hover:text-white md:-right-5 md:h-12 md:w-12"
          >
            <LuChevronRight className="h-5 w-5" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Services;
