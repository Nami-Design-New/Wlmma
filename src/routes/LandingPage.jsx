import Hero from "../components/landing/Hero";
import About from "../components/landing/About";
import How from "../components/landing/How";
import Experience from "../components/landing/Experience";
import Testimonial from "../components/landing/Testimonial";
import Download from "../components/landing/Download";
import useGetLandingPage from "../hooks/settings/useGetLandingPage";

export default function LandingPage() {
  const { data: landingContent, isLoading } = useGetLandingPage();
  return isLoading ? null : (
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
