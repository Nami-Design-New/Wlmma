import { AboutCard } from "../AboutCard";

export function About({aboutShape,sectionHeader}) {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h1 className="h6 text-center text-yellow-color fw-bold">
            {sectionHeader.subTitle}
        </h1>
        <h2 className="display-5 text-center fw-bold">
            {sectionHeader.title}
        </h2>

        <AboutCard/>
      </div>
      <div className="about-shape">
        <img src={aboutShape} alt="about shape" />
      </div>
    </section>
  );
}
