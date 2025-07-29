import { Button } from "react-bootstrap";
import logo from "/images/headerLogo.svg";

const navItems = [
  { name: "Home", href: "index.html" },
  { name: "About", href: "#about" },
  { name: " Testimonials", href: "#testimonial" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  // دالة لإنشاء روابط القائمة
  const renderNavLinks = () =>
    navItems.map((item, index) => (
      <li className="nav-item mx-2 fw-bold" key={index}>
        <a className="nav-link text-white" href={item.href}>
          {item.name}
        </a>
      </li>
    ));

  return (
    <header className="position-absolute px-3 w-100">
      <nav className="container navbar navbar-expand-lg">
        <div className="d-flex justify-content-between w-100">
          {/* شعار الموقع */}
          <a
            className="navbar-brand d-flex align-items-center"
            href="index.html"
          >
            <img src={logo} alt="شعار الموقع" height="40" />
          </a>

          {/* قائمة الديسكتوب */}
          <div className="d-none d-lg-flex align-items-center ms-auto">
            <ul className="navbar-nav main-menu d-flex flex-row">
              {renderNavLinks()}
            </ul>
            <button className="btn-solid-main">Download Now</button>
          </div>

          {/* زر فتح القائمة للموبايل */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasMenu"
            aria-controls="offcanvasMenu"
            aria-label="فتح القائمة"
          >
            <i href="#" className="far fa-bars" style={{fontSize: '35px'}}></i>
          </button>

        </div>
      </nav>

      {/* قائمة الموبايل (offcanvas) */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasMenu"
        aria-labelledby="offcanvasMenuLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="إغلاق"
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-2">
          <ul className="navbar-nav main-menu d-flex flex-column">
            {renderNavLinks()}
          </ul>
          <a href="#" className="btn-solid-main">
            Download Now
          </a>
        </div>
      </div>
    </header>
  );
}
