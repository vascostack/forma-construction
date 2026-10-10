import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { LuBuilding2, LuChevronDown, LuMail, LuPhone } from "react-icons/lu";
import Reveal from "../../components/common/Reveal";
import banner from "../../assets/images/contactbg.jpg";

const contactInfo = [
  {
    Icon: LuBuilding2,
    title: "Headquarters",
    text: "Jl. Contoh No. 123, Kotabumi, Lampung Utara",
    href: undefined,
  },
  {
    Icon: LuPhone,
    title: "General inquiries",
    text: "+0531-594-390",
    href: "tel:+0531594390",
  },
  {
    Icon: LuMail,
    title: "Email",
    text: "info@forma.co.id",
    href: "mailto:info@forma.co.id",
  },
];

const faqs = [
  {
    q: "What types of projects do you handle?",
    a: "We handle residential, commercial, and industrial construction projects, from new builds to renovations and structural improvements.",
  },
  {
    q: "Do you offer both design and construction services?",
    a: "Yes. Our team covers planning, engineering, and construction, so your project is managed by one team from start to finish.",
  },
  {
    q: "Can I get a free consultation and quote?",
    a: "Absolutely. Send us your project details through the form above or call us, and we will arrange a free consultation and a clear quotation.",
  },
  {
    q: "How do you manage timelines and budgets?",
    a: "Every project starts with a detailed schedule and cost plan. We provide regular progress updates so you always know where things stand.",
  },
  {
    q: "Do you work on both residential and commercial projects?",
    a: "Yes. We have experience with houses, offices, warehouses, and industrial facilities, each handled with the same quality standards.",
  },
  {
    q: "Can changes be made after the project has started?",
    a: "Changes are possible. We will review the impact on cost and schedule with you first, then proceed once everything is agreed.",
  },
];

const inputClass =
  "w-full rounded-full border border-transparent bg-white px-5 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20";

function ContactDetail() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [sent, setSent] = useState(false);

  // Belum terhubung ke backend: ganti dengan fetch ke API / Formspree / WhatsApp
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  };

  return (
    <main
      className="bg-white"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/70 to-green-800/40"></div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-28 md:flex-row md:items-center md:gap-8 md:px-10 md:py-40 lg:px-20">
          <Reveal direction="left">
            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-6xl">
              Contact Us
            </h1>
          </Reveal>

          <Reveal
            direction="right"
            delay={300}
            className="max-w-sm md:border-l md:border-white/40 md:pl-8"
          >
            <p className="text-sm font-bold text-white">
              Building Spaces With Trust
            </p>
            <p className="mt-2 text-sm leading-6 text-white/85">
              We deliver dependable construction solutions with careful
              planning, skilled workmanship, and honest communication.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Get in touch */}
      <section className="px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
          {/* Kiri */}
          <Reveal direction="left">
            <p className="mb-3 text-sm font-semibold text-green-600">
              Get in touch
            </p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              How can we help you?
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Tell us about your project and our team will get back to you as
              soon as possible with the right solution for your needs.
            </p>

            <div className="mt-8 space-y-6 border-t border-gray-200 pt-8">
              {contactInfo.map(({ Icon, title, text, href }) => (
                <div key={title} className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-600 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{title}</p>
                    {href ? (
                      <a
                        href={href}
                        className="text-sm text-gray-600 transition hover:text-green-600"
                      >
                        {text}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-600">{text}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Kanan: form */}
          <Reveal direction="right" delay={300}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl bg-gray-100 p-6 md:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="First Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-800"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Phone"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  className="w-full resize-none rounded-3xl border border-transparent bg-white px-5 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-600/20"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
                >
                  Submit
                </motion.button>

                {sent && (
                  <p className="text-sm font-medium text-green-700">
                    Thank you! Your message has been received.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 px-5 py-20 md:px-10 lg:px-20">
        <div className="mx-auto max-w-3xl">
          <Reveal className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold text-green-600">FAQ</p>
            <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-3 text-sm text-gray-600 md:text-base">
              Quick answers to the things clients ask us most.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {faqs.map((item, i) => {
                const open = openFaq === i;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? null : i)}
                      aria-expanded={open}
                      className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span
                        className={`text-sm font-semibold transition-colors md:text-base ${
                          open ? "text-green-600" : "text-gray-800"
                        }`}
                      >
                        {item.q}
                      </span>
                      <LuChevronDown
                        className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-300 ${
                          open ? "rotate-180 text-green-600" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-5 text-sm leading-7 text-gray-600">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default ContactDetail;
