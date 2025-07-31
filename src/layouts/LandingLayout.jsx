import { useEffect } from "react";
import { Outlet } from "react-router";
import { Footer } from "../components/landing/Footer";
import { Header } from "../components/landing/Header";
import AOS from "aos";

export default function LandingLayout() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const sectionDivs = section.querySelectorAll("[data-aos]");
      sectionDivs.forEach((div, index) => {
        div.setAttribute("data-aos-delay", (index + 1) * 50);
      });
    });

    AOS.init({
      offset: 100,
      delay: 50,
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <div style={{ background: "#fffcfc" }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
