import { MainBtn } from "./MainBtn";

export default function Experience() {
  return (
    <section  className="py-5 experience_section">
      <div className="row g-3">
        <div className="col-md-3 p-0">
          <div className="experience-img">
            <img src="/images/experience.png" alt="experience" />
          </div>
        </div>
        <div className="col-12 col-md-9 d-flex align-items-center justify-align-content-center justify-content-md-start">
          <div className="d-flex flex-column align-items-center gap-2">
            <h2 className="display-5 fw-bold text-center experience-header">
              Ready for an Unforgettable Experience?
            </h2>
            <MainBtn className="m-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}
