import logo from "../../../assets/images/logo1.png";

function Navbar() {
  return (
    <div className="h-[72px] bg-white shadow-sm sticky top-0 z-50 px-5 md:px-10 lg:px-14 grid grid-cols-[1fr_auto_1fr] items-center">
      {/* Logo + Mobile Menu */}
      <div className="flex items-center h-full relative">
        {/* Mobile Menu */}
        <div className="dropdown lg:hidden mr-2">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
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
            className="menu menu-sm dropdown-content bg-white rounded-box z-[100] mt-3 w-52 p-2 shadow-lg border border-gray-100"
          >
            <li>
              <a className="text-green-600 font-bold">HOME</a>
            </li>
            <li>
              <a>ABOUT US</a>
            </li>
            <li>
              <a>SERVICES</a>
            </li>
            <li>
              <a>PROJECTS</a>
            </li>
            <li>
              <a>OUR TEAM</a>
            </li>
            <li>
              <a>CONTACT</a>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <img
          src={logo}
          alt="Forma Construction"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[100px] w-auto object-contain z-10"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-center h-full">
        <ul className="flex items-center gap-1 text-[12px] font-bold tracking-wide text-gray-800 whitespace-nowrap h-full">
          <li>
            <a className="inline-flex items-center justify-center px-4 h-[72px] text-green-600 border-b-2 border-green-600">
              HOME
            </a>
          </li>

          <li>
            <a className="inline-flex items-center justify-center px-4 h-[72px] hover:text-green-600 transition-colors whitespace-nowrap">
              ABOUT US
            </a>
          </li>

          <li>
            <a className="inline-flex items-center justify-center px-4 h-[72px] hover:text-green-600 transition-colors whitespace-nowrap">
              SERVICES
            </a>
          </li>

          <li>
            <a className="inline-flex items-center justify-center px-4 h-[72px] hover:text-green-600 transition-colors whitespace-nowrap">
              PROJECTS
            </a>
          </li>

          <li>
            <a className="inline-flex items-center justify-center px-4 h-[72px] hover:text-green-600 transition-colors whitespace-nowrap">
              OUR TEAM
            </a>
          </li>

          <li>
            <a className="inline-flex items-center justify-center px-4 h-[72px] hover:text-green-600 transition-colors whitespace-nowrap">
              CONTACT
            </a>
          </li>
        </ul>
      </nav>

      {/* Get a Quote */}
      <div className="flex justify-end">
        <button className="h-10 px-7 bg-green-600 hover:bg-green-700 border-none text-white rounded-md text-[11px] font-bold tracking-wide shadow-sm transition-colors">
          Get In Touch 
        </button>
      </div>
    </div>
  );
}

export default Navbar;
