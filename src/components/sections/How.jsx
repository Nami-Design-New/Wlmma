import { HowCard } from "../HowCard";

export function How({ howShape, sectionHeader }) {
  return (
    <section id="how" className="py-5">
      <div className="container">
        <div className="d-flex flex-column gap-2">
          <h1 className="h6 text-center text-yellow-color fw-bold">
            {sectionHeader.subTitle}
          </h1>
          <h2 className="display-5 text-center fw-bold">
            {sectionHeader.title}
          </h2>
          <p className="text-center lead how-desc">{sectionHeader.desc}</p>
        </div>

        <HowCard />

      </div>
      <div className="how-shape">
        <img src={howShape} alt="how shape" />
      </div>
    </section>
  );
}
