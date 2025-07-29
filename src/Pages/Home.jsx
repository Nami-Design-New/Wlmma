import { About } from "../components/sections/About";
import { Hero } from "../components/sections/Hero";
import { How } from "../components/sections/How";
import { Experience } from "../components/sections/Experience";
import { Testimonial } from "../components/sections/Testimonial";
import { Download } from "../components/sections/Download";
import heroImg from "/images/heroImg.png";
import downloadImg from "/images/Vector.png";
import downloadApp from "/images/downloadApp.png";
import experienceImg from "/images/experience.png";
import heroShape from "/images/homeBackground.png";
import aboutShape from "/images/aboutBackground.png";
import howShape from "/images/howBackground.png";

export function Home() {
  const sectionHeader = [
    {
      title:"Where the fun begins!",
      desc:"Walamma is your all-in-one platform connecting clients with service providers for unique and customizable experiences. Whether it’s a summer getaway,  a honeymoon adventure, or renting the perfect tool for your trip, Walamma has you covered."
    },
    {
      subTitle: "About",
      title: "Why choose us?",
    },
    {
      subTitle: "Work",
      title: "How It Works",
      desc: " Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.  ",
    },
    {
      title: "Ready for an Unforgettable Experience?"
    },
    {
      subTitle: "Testimonial",
      title: "What They Are Saying",
      desc: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie dui magnis facilisis at fringilla quam.",
    },
    {
      subTitle: "Testimonial",
      title: "Have Question In Mind?",
      desc: "Download App Now and Let Us Help You",
    },
  ];
  return (
    <>
      <Hero heroImg={heroImg} heroShape={heroShape} sectionHeader={sectionHeader[0]}/>
      <About aboutShape={aboutShape} sectionHeader={sectionHeader[1]} />
      <How howShape={howShape} sectionHeader={sectionHeader[2]} />
      <Experience experienceImg={experienceImg} sectionHeader={sectionHeader[3]} />
      <Testimonial aboutShape={aboutShape} sectionHeader={sectionHeader[4]} />
      <Download downloadApp={downloadApp} downloadImg={downloadImg} sectionHeader={sectionHeader[5]} />
      
    </>
  );
}
