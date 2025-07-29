import icon1 from "/icons/explore-icon.svg";
import icon2 from "/icons/customize-icon.svg";
import icon3 from "/icons/pay-icon.svg";
export function HowCard() {
  const steps = [
    {
      icon: icon1,
      title: "Explore & Select",
      description:
        "Browse various activities, trips, and tools tailored for every occasion, from family vacations to romantic honeymoons.",
    },
    {
      icon: icon2,
      title: "Customize Your Experience",
      description:
        "Fine-tune your reservation by picking specific dates, times, and additional options for a personalized experience.",
    },
    {
      icon: icon3,
      title: "Pay & Enjoy",
      description:
        "Complete your booking with secure online payment and get ready for an adventure like no other!",
    },
  ];
  return (
    <>
    <div className="row justify-content-center gap-4">
      {steps.map((step, index) => (
        <div className="col-md-4 bg-main-50 how-card-item text-center" key={index}>
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
    </>
  );
}
