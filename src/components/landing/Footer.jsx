export function Footer() {
  const footerItems = [
    { name: "About", href: "#about" },
    { name: "Testimonials", href: "#testimonial" },
    { name: "Contact", href: "#contact" },
  ];

  const footerContact = {
    title: "Contact us:",
    tel: "244-5333-7783",
    mail: "press@food.com",
    contact: "contact@food.com",
  };

  const renderFooterLinks = () =>
    footerItems.map((item, index) => (
      <li className="nav-item mx-2" key={index}>
        <a className="nav-link text-white" href={item.href}>
          {item.name}
        </a>
      </li>
    ));

  const renderFooterContacts = () => (
    <>
      <li className="mx-2">
        <span className="text-white">{footerContact.title}</span>
      </li>
      <li>
        <a href={`tel:${footerContact.tel}`} className="text-white">
          {footerContact.tel}
        </a>
      </li>
      <li>
        <a href={`mailto:${footerContact.mail}`} className="text-white">
          {footerContact.mail}
        </a>
      </li>
      <li>
        <a href={footerContact.contact} className="text-white">
          {footerContact.contact}
        </a>
      </li>
    </>
  );

  return (
    <footer>
      <div className="">
        <div className="row">
          <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-start ps-0 ps-md-5 pt-5">
            <div className="d-flex flex-column gap-3 justify-content-center ps-0 ps-md-5 pt-5">
              <div className="footer-logo">
                <img src="/images/footerLogo.svg" alt="footer logo" />
              </div>
              <div className="d-flex gap-3">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fs-4 fa-twitter"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fs-4 fa-linkedin"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fs-4 fa-youtube"></i>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fs-4 fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-end p-0">
            <div className="">
              <div className="footer-shape position-relative">
                <img
                  src="/images/footerBackground.png"
                  alt="footer background"
                />
                <div className="position-absolute footer-items d-flex gap-5">
                  <ul className="d-flex flex-column gap-2">
                    {renderFooterLinks()}
                  </ul>
                  <ul className="d-flex flex-column gap-2">
                    {renderFooterContacts()}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
