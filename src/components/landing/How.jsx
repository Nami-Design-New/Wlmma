export default function How() {
  const steps = [
    {
      icon: "/icons/explore-icon.svg",
      title: "Explore & Select",
      description:
        "Browse various activities, trips, and tools tailored for every occasion, from family vacations to romantic honeymoons.",
    },
    {
      icon: "/icons/customize-icon.svg",
      title: "Customize Your Experience",
      description:
        "Fine-tune your reservation by picking specific dates, times, and additional options for a personalized experience.",
    },
    {
      icon: "/icons/pay-icon.svg",
      title: "Pay & Enjoy",
      description:
        "Complete your booking with secure online payment and get ready for an adventure like no other!",
    },
  ];

  return (
    <section className="py-5 how_section">
      <div className="container">
        <div className="d-flex flex-column gap-2">
          <h1 className="h6 text-center text-yellow-color fw-bold" data-aos="fade-up">Work</h1>
          <h2 className="display-5 text-center fw-bold" data-aos="fade-up">How It Works</h2>
          <p className="text-center lead how-desc" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
            elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.{" "}
          </p>
        </div>

        <div className="row justify-content-center gap-4">
          {steps.map((step, index) => (
            <div
              className="col-md-4 bg-main-50 how-card-item text-center"
              key={index}
              data-aos="fade-up"
            >
              <div className="d-flex flex-column gap-3 h-100">
                <div className="section-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="how-shape" data-aos="fade-left">
        <img src="/images/howBackground.png" alt="how shape" />
      </div>
    </section>
  );
}
