import { Row, Col } from "react-bootstrap";
import { MainBtn } from "./MainBtn";

export default function Hero() {
  return (
    <section className="hero_section" id="home">
      <Row className="hero-content align-items-center position-absolute z-3">
        <Col sm={12} lg={5} className="text-center p-0">
          <div className="hero-img" data-aos="fade-right">
            <img
              src="/images/heroImg.png"
              alt="hero image"
              className="img-fluid"
            />
          </div>
        </Col>
        <Col sm={12} lg={7} className="text-lg-start text-center my-4">
          <div className="hero-content-text" data-aos="fade-left">
            <h1 className="hero-header display-5 fw-bold mb-3">
              Where the fun begins!
            </h1>
            <p className="hero-desc lead text-muted mx-auto mx-md-0 mb-4">
              Walamma is your all-in-one platform connecting clients with
              service providers for unique and customizable experiences. Whether
              it’s a summer getaway, a honeymoon adventure, or renting the
              perfect tool for your trip, Walamma has you covered.
            </p>
            <MainBtn />
          </div>
        </Col>
      </Row>
      <div className="hero-shape">
        <img src="/images/homeBackground.svg" alt="hero shape" />
      </div>
    </section>
  );
}
