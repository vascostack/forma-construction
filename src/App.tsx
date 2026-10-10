import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/layout/Header/Navbar";
import Footer from "./components/layout/Footer/Footer";
import ScrollToHash from "./components/common/ScrollToHash";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";

import AboutDetail from "./pages/About/AboutDetail";
import ContactDetail from "./pages/Contact/ContactDetail";
import Gallery from "./pages/Gallery/Gallery";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function Landing() {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Contact />
      <Team />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/contact-us" element={<ContactDetail />} />
          <Route path="/about-us" element={<AboutDetail />} />
          <Route path="/gallery" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
}
