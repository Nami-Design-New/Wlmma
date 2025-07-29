import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import How from "../components/landing/How";
import Experience from "../components/landing/Experience";
import Testimonial from "./../components/landing/Testimonial";
import Download from "./../components/landing/Download";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <About />
      <How />
      <Experience />
      <Testimonial />
      <Download />
    </>
  );
}
