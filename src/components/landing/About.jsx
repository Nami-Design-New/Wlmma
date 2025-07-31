export default function About() {
  const aboutItems = [
    {
      icon: "/icons/reservations-icon.svg",
      title: "Tailored Reservations",
      description:
        "Customize every detail of your booking, from selecting the perfect time and date to choosing specific services that match your needs.",
    },
    {
      icon: "/icons/diverse-activities-icon.svg",
      title: "Diverse Activities & Services",
      description:
        "Explore a wide range of trips, activities, and tools for rent, all designed to make your experience enjoyable and hassle-free.",
    },
    {
      icon: "/icons/online-payments-icon.svg",
      title: "Seamless Online Payments",
      description:
        "Securely pay for your reservations with ease, ensuring a smooth and user-friendly experience every time.",
    },
  ];

  return (
    <section className="py-5 about_section" id="about">
      <div className="about-shape">
        <img src="/images/aboutBackground.png" alt="about shape" />
      </div>
      <div className="container">
        <h1 className="h6 text-center text-yellow-color fw-bold" data-aos="fade-up">About</h1>
        <h2 className="display-5 text-center fw-bold" data-aos="fade-up">Why choose us?</h2>

        <div className="row flex-column align-items-center gap-4 pt-5  ">
          {aboutItems.map((item, index) => (
            <div className="col-lg-8 col-xxl-6 " key={index} data-aos="fade-up">
              <div className="d-flex flex-column gap-2 gap-md-4 flex-md-row">
                <div className="section-icon">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mx-auto mb-3"
                    width="60"
                  />
                </div>
                <div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
       <div className="tourGuide">
        <img src="/images/tour-guide.png" alt="about shape" />
      </div>
    </section>
  );
}
