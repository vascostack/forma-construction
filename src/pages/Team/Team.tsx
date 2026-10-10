import { Fragment } from "react";
import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import Reveal from "../../components/common/Reveal";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";

const members = [
  {
    name: "Alex Greenfield",
    role: "Project Director",
    desc: "Leads project planning and delivery with more than a decade of experience in large-scale construction.",
    image: team1,
    photoOrder: "md:order-1",
    infoOrder: "md:order-2",
  },
  {
    name: "Jeffrey Brown",
    role: "Chief Engineer",
    desc: "Oversees structural design and engineering quality, making sure every build meets safety standards.",
    image: team2,
    photoOrder: "md:order-3",
    infoOrder: "md:order-6",
  },
  {
    name: "Ann Richmond",
    role: "Site Manager",
    desc: "Coordinates crews and schedules on site to keep every project safe, organized, and on time.",
    image: team3,
    photoOrder: "md:order-5",
    infoOrder: "md:order-4",
  },
];

const socials = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "X", Icon: FaXTwitter },
  { label: "Instagram", Icon: FaInstagram },
  { label: "LinkedIn", Icon: FaLinkedinIn },
];

function Team() {
  return (
    <section
      id="team"
      className="scroll-mt-16 bg-gray-100 px-5 py-20 md:px-10 lg:px-20"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold text-green-600">Our team</p>
          <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
            The people behind every project
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
            Experienced engineers and managers working together to deliver safe,
            solid, and on-time construction.
          </p>
        </Reveal>

        {/* Grid selang-seling (dibungkus sebagai satu blok agar pola tidak rusak) */}
        <Reveal delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {members.map((m) => (
              <Fragment key={m.name}>
                {/* Foto */}
                <div
                  className={`aspect-square overflow-hidden bg-gray-200 ${m.photoOrder}`}
                >
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div
                  className={`flex flex-col items-center justify-center bg-white px-6 py-10 text-center md:aspect-square ${m.infoOrder}`}
                >
                  <h3 className="text-lg font-bold uppercase tracking-wide text-gray-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-green-600">
                    {m.role}
                  </p>
                  <p className="mt-4 max-w-[16rem] text-sm leading-6 text-gray-500">
                    {m.desc}
                  </p>

                  <div className="mt-5 flex items-center gap-4 text-gray-400">
                    {socials.map(({ label, Icon }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={`${m.name} on ${label}`}
                        className="transition hover:text-green-600"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Team;
