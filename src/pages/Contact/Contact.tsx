import { Link } from "react-router-dom";
import { LuPhone, LuArrowRight } from "react-icons/lu";
import { motion } from "motion/react";
import Reveal from "../../components/common/Reveal";
import banner from "../../assets/images/banner.jpg";

function Contact() {
  return (
    <section
      id="contact"
      className="relative w-full scroll-mt-16 overflow-hidden"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Degradasi hijau transparan: pekat di kiri (teks), makin transparan ke kanan */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-800/65 to-green-600/20"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-8 px-5 py-20 md:flex-row md:items-center md:justify-between md:px-10 md:py-24 lg:px-20">
        {/* Kiri: teks */}
        <Reveal direction="left" className="max-w-xl">
          <p className="mb-3 text-sm font-semibold text-green-300">
            Contact us now!
          </p>

          <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
            Need our services?
          </h2>

          <p className="mt-3 text-sm leading-7 text-white/85 md:text-base">
            Contact us at FORMA Solid Structure for expert solutions and
            dedicated service.
          </p>
        </Reveal>

        {/* Kanan: telepon + tombol */}
        <Reveal
          direction="right"
          delay={300}
          className="flex flex-col gap-5 md:items-end"
        >
          <a
            href="tel:+0531594390"
            className="flex items-center gap-3 text-white transition hover:text-green-200"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40">
              <LuPhone className="h-5 w-5" />
            </span>
            <span className="text-2xl font-bold md:text-3xl">
              +0531-594-390
            </span>
          </a>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="w-fit"
          >
            <Link
              to="/contact-us"
              className="btn h-11 min-h-0 w-fit gap-2 border-none bg-green-500 px-6 text-white hover:bg-green-600"
            >
              Contact Us
              <LuArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
