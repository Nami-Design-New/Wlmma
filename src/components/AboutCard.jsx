import icon1 from "./../../public/icons/reservations-icon.svg";
import icon2 from "./../../public/icons/diverse-activities-icon.svg";
import icon3 from "./../../public/icons/online-payments-icon.svg";

export function AboutCard() {
  const aboutItems = [
    {
      icon: icon1,
      title: "Tailored Reservations",
      description:
        "Customize every detail of your booking, from selecting the perfect time and date to choosing specific services that match your needs.",
    },
    {
      icon: icon2,
      title: "Diverse Activities & Services",
      description:
        "Explore a wide range of trips, activities, and tools for rent, all designed to make your experience enjoyable and hassle-free.",
    },
    {
      icon: icon3,
      title: "Seamless Online Payments",
      description:
        "Securely pay for your reservations with ease, ensuring a smooth and user-friendly experience every time.",
    },
  ];
  return (
    <>
      <div className="row flex-column align-items-center pe-0 pe-lg-5 pt-5 me-0 me-lg-5 ">
        {aboutItems.map((item, index) => (
          <div className="col-md-7 col-lg-6 mb-4" key={index}>
            <div className="d-flex gap-5">
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
    </>
  );
}
