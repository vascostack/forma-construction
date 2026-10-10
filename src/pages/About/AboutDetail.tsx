import { Link } from "react-router-dom";
import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import Reveal from "../../components/common/Reveal";

import heroImg from "../../assets/images/bg1.jpg";
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
import card3 from "../../assets/images/card3.jpg";

// Isi artikel: ganti dengan informasi perusahaan yang sebenarnya
const sections = [
  {
    title: "Our Story",
    paragraphs: [
      "Forma Solid Structure was founded in 2010 with a simple goal: to build structures that people can trust. What started as a small team handling local projects has grown into a full-service construction company serving residential, commercial, and industrial clients.",
      "Over the years, we have kept the same principles that guided us from day one: careful planning, skilled workmanship, and honest communication with every client.",
    ],
  },
  {
    title: "Our Vision & Mission",
    paragraphs: [
      "Our vision is to be a trusted construction partner known for quality, safety, and lasting results.",
      "To get there, we focus on:",
    ],
    list: [
      "Delivering dependable construction solutions tailored to each project.",
      "Maintaining strict quality and safety standards on every site.",
      "Keeping clients informed with clear schedules and transparent costs.",
      "Developing a skilled, professional team that grows with the company.",
    ],
  },
  {
    title: "Our Core Values",
    paragraphs: ["Every decision we make is guided by a few core values:"],
    list: [
      "Integrity: we do what we say and stand behind our work.",
      "Quality: attention to detail from foundation to finishing.",
      "Safety: protecting our people, our clients, and the community.",
      "Collaboration: working closely with clients, engineers, and partners.",
    ],
  },
  {
    title: "What We Do",
    paragraphs: [
      "We offer a complete range of construction services, managed by one team from planning to handover:",
    ],
    list: [
      "Construction and building for residential, commercial, and industrial projects.",
      "Engineering and processing support for complex structures.",
      "Manufacturing and testing with quality-focused control.",
      "Project management covering schedules, budgets, and site coordination.",
    ],
  },
  {
    title: "Why Clients Choose Us",
    paragraphs: [
      "Clients return to Forma because we treat every project as our own. You can expect a professional team, clear communication, and results built to last, delivered on time and within the agreed budget.",
    ],
  },
];

// Kartu rekomendasi di sidebar
const related = [
  {
    image: card1,
    tag: "Services",
    title: "Construction & Building",
    desc: "Reliable construction solutions designed around your needs and vision.",
    to: "/#services",
    action: "View services",
  },
  {
    image: card2,
    tag: "Our Team",
    title: "Meet the people behind every project",
    desc: "Experienced engineers and managers working together on every build.",
    to: "/#team",
    action: "Meet the team",
  },
  {
    image: card3,
    tag: "Contact",
    title: "Start your project with us",
    desc: "Tell us about your plans and get a free consultation and quotation.",
    to: "/contact-us",
    action: "Get in touch",
  },
];

function AboutDetail() {
  return (
    <main
      className="bg-white"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-10 md:py-16 lg:px-8">
        {/* Header */}
        <Reveal className="mb-10">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-green-600"
          >
            <LuArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-green-600">
            About Us
          </p>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
            Building Excellence &amp; Trust With Quality
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 md:text-base">
            Learn who we are, what we believe in, and how we deliver dependable
            construction solutions.
          </p>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
          {/* Artikel */}
          <article>
            <Reveal>
              <img
                src={heroImg}
                alt="Forma Solid Structure construction project"
                className="h-[260px] w-full rounded-2xl object-cover sm:h-[340px] md:h-[420px]"
              />
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-8 text-sm leading-7 text-gray-600 md:text-base md:leading-8">
                Forma Solid Structure is a construction company focused on
                delivering dependable solutions for residential, commercial, and
                industrial projects. Through careful planning, skilled
                workmanship, and attention to detail, we build structures that
                meet our clients&apos; needs and stand the test of time.
              </p>
            </Reveal>

            <div className="mt-10 space-y-10">
              {sections.map((section) => (
                <Reveal key={section.title}>
                  <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
                    {section.title}
                  </h2>

                  {section.paragraphs.map((text) => (
                    <p
                      key={text}
                      className="mt-3 text-sm leading-7 text-gray-600 md:text-base md:leading-8"
                    >
                      {text}
                    </p>
                  ))}

                  {section.list && (
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600 marker:text-green-600 md:text-base">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside>
            <div className="lg:sticky lg:top-24">
              <Reveal direction="right">
                <h3 className="mb-4 text-sm font-semibold text-gray-900">
                  Explore more
                </h3>
              </Reveal>

              <div className="space-y-5">
                {related.map((item, i) => (
                  <Reveal key={item.title} direction="right" delay={i * 150}>
                    <Link
                      to={item.to}
                      className="group block rounded-2xl bg-green-50 p-3 ring-1 ring-green-100 transition hover:shadow-md"
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <span className="absolute left-3 top-3 rounded-md bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-800">
                          {item.tag}
                        </span>
                      </div>

                      <div className="px-1 pb-1 pt-4">
                        <h4 className="text-base font-bold leading-snug text-gray-900">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-xs leading-5 text-gray-600">
                          {item.desc}
                        </p>

                        <div className="mt-4 flex items-center justify-between border-t border-green-100 pt-3">
                          <span className="text-xs font-semibold text-green-700">
                            {item.action}
                          </span>
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-green-600 text-white transition group-hover:bg-green-700">
                            <LuArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

export default AboutDetail;
