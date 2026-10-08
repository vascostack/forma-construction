import bg1 from "../../assets/images/bg1.jpg";

function Home() {
  return (
    <>
      <div
        className="hero relative min-h-[calc(100vh-64px)]" // tinggi layar dikurangi Navbar agar tidak scroll
        style={{
          fontFamily:
            "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif",
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        {/* Gradasi kiri-gelap supaya teks tetap terbaca dan foto pekerja di kanan tetap terlihat */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

        <div className="hero-content relative z-10 w-full max-w-7xl justify-start px-4 py-10 text-neutral-content lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 h-1 w-14 rounded-full bg-green-500"></div>

            <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              We Build Structures
              <br className="hidden sm:block" />
              That Stand the Test of Time
            </h1>

            <p className="mb-9 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8">
              From residential and commercial buildings to industrial
              facilities, we deliver engineering precision, transparent
              timelines, and craftsmanship you can trust.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="btn btn-sm h-11 gap-2 border-none bg-green-600 px-6 text-white hover:bg-green-700">
                View Our Projects
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>

              <button className="btn btn-sm btn-outline h-11 border-white/70 px-6 text-white hover:border-white hover:bg-white hover:text-neutral">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
