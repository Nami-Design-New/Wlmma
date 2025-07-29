import { TestSlider } from "./TestSlider";

export default function Testimonial() {
  return (
    <section className="position-relative py-5 testimonial_section">
      <div className="container">
        <div className="d-flex flex-column gap-2">
          <h1 className="h6 text-center text-yellow-color fw-bold">
            Testimonial
          </h1>
          <h2 className="display-5 text-center fw-bold">
            What They Are Saying
          </h2>
          <p className="text-center lead test-desc">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
          </p>
        </div>

        <TestSlider />
      </div>
      <div className="about-shape">
        <img src="/images/aboutBackground.png" alt="Testimonial shape" />
      </div>
    </section>
  );
}
