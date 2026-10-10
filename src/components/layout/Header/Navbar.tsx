import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import logo from "../../../assets/images/logo1.png";

// id  = section di landing page (menggulung ke /#id)
// path = halaman terpisah (membuka halaman baru)
const links = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Gallery", path: "/gallery" },
  { label: "Our Team", id: "team" },
  { label: "Contact", id: "contact" },
] as { label: string; id?: string; path?: string }[];

const getTo = (link: { id?: string; path?: string }) =>
  link.path ?? `/#${link.id}`;

function Navbar() {
  const { pathname } = useLocation();
  const [active, setActive] = useState("home");

  // Menandai menu aktif sesuai section yang terlihat (hanya di landing page)
  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    links.forEach(({ id }) => {
      if (!id) return;
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link: { id?: string; path?: string }) =>
    link.path ? pathname === link.path : pathname === "/" && active === link.id;

  // Tutup dropdown mobile setelah menu diklik
  const closeMenu = () =>
    (document.activeElement as HTMLElement | null)?.blur();

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      className="sticky top-0 z-50 grid h-[72px] grid-cols-[1fr_auto_1fr] items-center bg-white px-5 shadow-sm md:px-10 lg:px-14"
    >
      <div className="relative flex h-full items-center">
        <div className="dropdown mr-2 lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[100] mt-3 w-52 rounded-box border border-gray-100 bg-white p-2 shadow-lg"
          >
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={getTo(link)}
                  onClick={closeMenu}
                  className={
                    isActive(link)
                      ? "font-semibold text-green-600"
                      : "text-gray-800"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/#home">
          <img
            src={logo}
            alt="Forma Construction"
            className="absolute left-0 top-1/2 z-10 h-[100px] w-auto -translate-y-1/2 object-contain"
          />
        </Link>
      </div>

      {/* Menu tengah berbentuk pill */}
      <nav className="hidden items-center justify-center lg:flex">
        <ul className="flex items-center gap-0.5 whitespace-nowrap rounded-full bg-gray-100 px-2 py-1.5 text-[13px] font-medium text-gray-800">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to={getTo(link)}
                className={`inline-flex items-center rounded-full px-3.5 py-1.5 transition-colors ${
                  isActive(link) ? "text-green-600" : "hover:text-green-600"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex justify-end">
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <Link
            to="/#contact"
            className="inline-flex h-10 items-center rounded-full border-none bg-green-600 px-6 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Navbar;
