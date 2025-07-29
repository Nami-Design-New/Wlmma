import { TestSlider } from "../TestSlider";

export function Testimonial({sectionHeader,aboutShape}) {
  return (
    <section id="testimonial" className="position-relative py-5">
       <div className="container">
              <div className="d-flex flex-column gap-2">
                <h1 className="h6 text-center text-yellow-color fw-bold">
                  {sectionHeader.subTitle}
                </h1>
                <h2 className="display-5 text-center fw-bold">
                  {sectionHeader.title}
                </h2>
                <p className="text-center lead test-desc">{sectionHeader.desc}</p>
              </div>

              <TestSlider/>
            
            </div>
            <div className="about-shape">
              <img src={aboutShape} alt="Testimonial shape" />
            </div>
    </section>
  )
}
