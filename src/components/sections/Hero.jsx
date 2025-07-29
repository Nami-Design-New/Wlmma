// import React from 'react';
import { Row, Col } from "react-bootstrap";
import { MainBtn } from "../MainBtn";

export function Hero({heroImg, heroShape,sectionHeader}) {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="text-center overflow-hidden">
          <Row className="hero-content align-items-center position-absolute z-3">
            <Col sm={12} lg={5}  className="text-center p-0">
              <div className="hero-img">
                <img
                src={heroImg}
                alt="hero image"
                className="img-fluid"
              />
              </div>
            </Col>
            <Col sm={12} lg={7} className="text-lg-start text-center my-4">
              <div className="hero-content-text">
                <h1 className="hero-header display-5 fw-bold mb-3">
                {sectionHeader.title}
              </h1>
              <p className="hero-desc lead text-muted mx-auto mx-md-0 mb-4">
                {sectionHeader.desc}
              </p>
              <MainBtn/>
              </div>
            </Col>
          </Row>
        <div className="hero-shape">
          <img src={heroShape} alt="hero shape" />
        </div>
      </section>
    </>
  );
}
