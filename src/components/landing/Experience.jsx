import { MainBtn } from "./MainBtn";

export default function Experience() {
  return (
    <section className="py-5 experience_section">
      <div className="row g-3">
        <div className="col-md-3 p-0">
          <div className="experience-img" data-aos="zoom-in-up">
            <img src="/images/experience.png" alt="experience" />
          </div>
        </div>
        <div className="col-12 col-md-9 d-flex align-items-center justify-align-content-center justify-content-md-start">
          <div className="d-flex flex-column align-items-center gap-2">
            <h2
              className="display-5 fw-bold text-center experience-header"
              data-aos="fade-up"
            >
              Ready for an Unforgettable Experience?
            </h2>
            <div data-aos="fade-up">
              <MainBtn className="m-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
