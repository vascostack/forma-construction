import logo from "../../../assets/images/logo1.png";

import { LuMapPin, LuPhone, LuMail, LuGlobe } from "react-icons/lu";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

// Website satu halaman: href mengarah ke id section masing-masing
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Construction & Building",
  "Engineering & Processing",
  "Manufacturing & Testing",
  "Project Management",
];

const socials = [
  { label: "Facebook", Icon: FaFacebookF },
  { label: "Instagram", Icon: FaInstagram },
  { label: "LinkedIn", Icon: FaLinkedinIn },
  { label: "YouTube", Icon: FaYoutube },
];

const bottomLinks = ["Privacy Policy", "Terms of Use", "Sitemap"];

function Footer() {
  return (
    <footer
      className="border-t border-gray-200 bg-white text-gray-600"
      style={{
        fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-10 lg:px-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.5fr_1.1fr]">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="FORMA Solid Structure"
              className="h-auto w-44"
            />

            <p className="mt-5 max-w-xs text-sm leading-6">
              Building infrastructure that connects people, empowers
              communities, and drives sustainable growth.
            </p>

            <div className="mt-5 flex gap-3">
              {socials.map(({ label, Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition hover:text-green-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {services.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="transition hover:text-green-600"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <LuMapPin className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                <span>
                  FORMA Solid Structure, Jl. Contoh No. 123, Kotabumi, Lampung
                  Utara
                </span>
              </li>
              <li className="flex items-center gap-3">
                <LuPhone className="h-4 w-4 shrink-0 text-green-600" />
                <a
                  href="tel:+0531594390"
                  className="transition hover:text-green-600"
                >
                  +0531-594-390
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuMail className="h-4 w-4 shrink-0 text-green-600" />
                <a
                  href="mailto:info@forma.co.id"
                  className="transition hover:text-green-600"
                >
                  info@forma.co.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LuGlobe className="h-4 w-4 shrink-0 text-green-600" />
                <a href="#" className="transition hover:text-green-600">
                  www.forma.co.id
                </a>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-gray-900">
              Get In Touch
            </h4>
            <p className="text-sm leading-6">
              Have a project in mind? Let&apos;s build something extraordinary
              together.
            </p>
            <a
              href="#contact"
              className="btn mt-5 h-11 min-h-0 border-none bg-green-600 px-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-green-700"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </div>

      {/* Bar bawah */}
      <div className="border-t border-gray-200 bg-gray-50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-xs md:flex-row md:px-10 lg:px-20">
          <p>
            &copy; {new Date().getFullYear()} FORMA Solid Structure. All Rights
            Reserved.
          </p>

          <ul className="flex items-center divide-x divide-gray-300">
            {bottomLinks.map((item) => (
              <li key={item} className="px-3 first:pl-0 last:pr-0">
                <a href="#" className="transition hover:text-green-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
