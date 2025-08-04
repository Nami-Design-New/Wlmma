import CountUp from "react-countup";

export default function Statistics() {
  const data = [
    {
      title: "All Users",
      icon: "fa-users",
      value: 2847,
      pointer: "/icons/up.svg",
      percent: "+20%",
    },
    {
      title: "Service Providers",
      icon: "fa-buildings",
      value: 253,
      pointer: "/icons/down.svg",
      percent: "-10%",
    },
    {
      title: "Reservations This Month",
      icon: "fa-calendar",
      value: 123,
      pointer: "/icons/up.svg",
      percent: "+20%",
    },
    {
      title: "Tools Orders",
      icon: "fa-box",
      value: 98,
      pointer: "/icons/down.svg",
      percent: "-10%",
    },
  ];

  return (
    <div className="statistics">
      {data.map(({ title, icon, value, pointer, percent }) => (
        <div className="static_card" key={title}>
          <div className="head">
            <h6>{title}</h6>
            <div className="icon">
              <i className={`fa-regular ${icon}`} />
            </div>
          </div>

          <div className="content">
            <h3>
              <CountUp start={0} end={value} duration={3} separator="," />
            </h3>

            <p>
              <img src={pointer} alt="" /> <span>{percent}</span> form last
              month
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
