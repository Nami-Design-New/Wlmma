import { TestSlider } from "./TestSlider";

export default function Testimonial() {
  return (
    <section className="position-relative py-5 testimonial_section" id="testimonial">
      <div className="container">
        <div className="d-flex flex-column gap-2">
          <h1
            className="h6 text-center text-yellow-color fw-bold"
            data-aos="fade-up"
          >
            Testimonial
          </h1>
          <h2 className="display-5 text-center fw-bold" data-aos="fade-up">
            What They Are Saying
          </h2>
          <p className="text-center lead test-desc" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>

        <div data-aos="fade-up">
          <TestSlider />
        </div>
      </div>

      <div className="about-shape" data-aos="fade-right">
        <img src="/images/aboutBackground.png" alt="Testimonial shape" />
      </div>
    </section>
  );
}
