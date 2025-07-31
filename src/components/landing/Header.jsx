import { Navbar, Nav, Container, Offcanvas, Button } from "react-bootstrap";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonial" },
];

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderNavLinks = () =>
    navItems.map((item, index) => (
      <Nav.Link
        key={index}
        href={item.href}
        className="text-white fw-bold mx-1"
      >
        {item.name.trim()}
      </Nav.Link>
    ));

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".position-fixed");
      header.classList.toggle("scrolled", window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar expand="lg" className="position-fixed w-100 px-3" variant="dark">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img src="/images/headerLogo.svg" alt="logo" height="40" />
          </Navbar.Brand>

          <div className="d-none d-lg-flex align-items-center ms-auto">
            <Nav className="d-flex flex-row align-items-center">
              {renderNavLinks()}
            </Nav>
            <a href="#download-app" className="btn-solid-main ms-3">
              Download Now
            </a>
          </div>

          <Button
            variant="link"
            className="d-lg-none text-white fs-3"
            onClick={handleShow}
          >
            <i className="far fa-bars"></i>
          </Button>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton />
        <Offcanvas.Body className="d-flex flex-column gap-2">
          <Nav className="flex-column " style={{ color: "#000" }}>
            {renderNavLinks()}
          </Nav>
          <a href="#download-app" className="btn-solid-main">
            Download Now
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
