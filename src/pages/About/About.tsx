import {
  LuArrowRight,
  LuCheck,
  LuHardHat,
  LuShieldCheck,
  LuTrophy,
} from "react-icons/lu";
import aboutImg from "../../assets/images/card1.jpg";

const checks = [
  "Reliable construction solutions",
  "Quality-focused workmanship",
  "Professional project management",
];

function About() {
  return (
    <section className=" bg-gray-200 px-5 py-14 md:px-10 md:py-16 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
        {/* Image */}
        <div className="relative mx-auto w-full max-w-[500px] pb-8 pr-3 pt-3">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={aboutImg}
              alt="Forma Solid Structure construction project"
              className="h-[300px] w-full object-cover sm:h-[340px] md:h-[360px]"
            />
          </div>

          {/* Since label */}
          <div className="absolute left-0 top-0 z-10 rounded-md bg-green-700 px-5 py-3 text-white shadow-md">
            <p className="text-lg font-extrabold leading-tight">Since 2010</p>
          </div>

          {/* Experience card */}
          <div className="absolute bottom-0 right-0 flex items-center gap-3 rounded-lg bg-white p-4 shadow-lg ring-1 ring-gray-100 sm:p-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50">
              <LuTrophy className="h-5 w-5 text-green-700" />
            </div>

            <div>
              <p className="text-sm font-bold leading-tight text-gray-900">
                Quality Construction
              </p>
              <p className="mt-1 text-[11px] text-gray-500">
                Built with care and precision
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-green-700">
            About Us
          </p>

          <h2 className="max-w-lg text-3xl font-extrabold leading-[1.15] tracking-tight text-gray-900 md:text-4xl">
            Building Excellence &amp; Trust With Quality
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
            Forma Solid Structure is focused on delivering dependable
            construction solutions for residential, commercial, and industrial
            projects.
          </p>

          <p className="mt-3 max-w-lg text-sm leading-6 text-gray-600">
            Through careful planning, skilled workmanship, and attention to
            detail, we aim to build structures that meet our clients' needs and
            stand the test of time.
          </p>

          {/* Benefits */}
          <div className="mt-5 space-y-3">
            {checks.map((text) => (
              <div key={text} className="flex items-center gap-2.5">
                <LuCheck className="h-4 w-4 shrink-0 text-green-700" />
                <span className="text-sm font-semibold text-gray-800">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="mt-6 flex flex-wrap gap-x-7 gap-y-4 border-t border-gray-200 pt-5">
            <div className="flex items-center gap-2.5">
              <LuHardHat className="h-5 w-5 text-green-700" />
              <span className="text-xs font-semibold text-gray-800">
                Professional Team
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              <LuShieldCheck className="h-5 w-5 text-green-700" />
              <span className="text-xs font-semibold text-gray-800">
                Quality Focused
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="mt-7 inline-flex items-center gap-2 rounded-md bg-green-700 px-5 py-3 text-xs font-bold text-white transition hover:bg-green-800">
            READ MORE
            <LuArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
