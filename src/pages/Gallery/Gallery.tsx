import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuX } from "react-icons/lu";
import Reveal from "../../components/common/Reveal";

import hero from "../../assets/images/bggallery.jpg";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";
import banner from "../../assets/images/banner.jpg";
import contactbg from "../../assets/images/contactbg.jpg";

// Gambar masih placeholder: ganti dengan foto proyek asli
const photos = [
  { image: card1, category: "Residential", title: "Modern Family Residence" },
  {
    image: card2,
    category: "Commercial",
    title: "Office Building Construction",
  },
  { image: card3, category: "Industrial", title: "Warehouse Structure" },
  { image: hero, category: "Commercial", title: "Mixed-Use Development" },
  { image: banner, category: "On Site", title: "Our Team at Work" },
  { image: contactbg, category: "On Site", title: "Planning and Inspection" },
];

function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  // Tutup lightbox dengan tombol Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main
      className="bg-gray-50"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        className="relative flex min-h-[320px] items-center justify-center overflow-hidden md:min-h-[400px]"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/80 via-green-900/60 to-green-900/70"></div>

        <Reveal className="relative z-10 px-5 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            Our Gallery
          </h1>
          <p className="mt-3 text-sm text-white/85 md:text-base">
            A look at our work, from groundwork to final finish.
          </p>
        </Reveal>
      </section>

      {/* Grid */}
      <section className="px-5 py-16 md:px-10 md:py-20 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Projects We Are Proud Of
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-600 md:text-base">
              Every build reflects careful planning, skilled workmanship, and
              attention to detail. Take a look at some of our recent work.
            </p>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {photos.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 200}>
                <button
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-label={`View ${item.title}`}
                  className="group block w-full bg-white text-left shadow-sm transition hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="px-4 py-5 text-center">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-600">
                      {item.category}
                    </p>
                    <p className="mt-1.5 text-base font-semibold text-gray-800">
                      {item.title}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-5"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-gray-900"
            >
              <LuX className="h-5 w-5" />
            </button>

            <motion.figure
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl"
            >
              <img
                src={photos[selected].image}
                alt={photos[selected].title}
                className="max-h-[75vh] w-full rounded-lg object-contain"
              />
              <figcaption className="mt-4 text-center text-white">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-green-400">
                  {photos[selected].category}
                </p>
                <p className="mt-1 text-lg font-semibold">
                  {photos[selected].title}
                </p>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

export default Gallery;
