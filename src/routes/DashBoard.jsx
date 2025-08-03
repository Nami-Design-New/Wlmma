import { Link } from "react-router";

export default function DashBoard() {
  const actions = [
    {
      icon: "/icons/customize.svg",
      title: "General Settings",
      desc: "Customize your app settings",
    },

    {
      icon: "/icons/user-plus.svg",
      title: "Providers Requests",
      desc: "Customize your app settings",
    },

    {
      icon: "/icons/reservations.svg",
      title: "Reservations",
      desc: "Customize your app settings",
    },

    {
      icon: "/icons/support-messages.svg",
      title: "Support Messages",
      desc: "Customize your app settings",
    },
  ];
  return (
    <section className="dashboard_section">
      <div className="home_banner">
        <div>
          <h1>Welcome to Walamma</h1>
          <p>Overview of app statistics and recent activities</p>
        </div>

        <div className="img">
          <img src="/icons/travel.png" alt="" />
        </div>
      </div>

      <div className="quick_actions">
        <h5>Quick Actions</h5>
        <p>Quick access to important tasks</p>

        <div className="actions_links">
          {actions.map((action, index) => (
            <Link
              to="/dashboard/general-settings"
              className="action_link"
              key={index}
            >
              <div className="icon">
                <img src={action.icon} alt="" />
              </div>

              <div className="action_text">
                <h6>{action.title}</h6>
                <p>{action.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="statistics">
        <div className="static_card">
          <div className="head">
            <h6>All Users</h6>
            <div className="icon">
              <img src="/icons/users.svg" alt="" />
            </div>
          </div>

          <div className="content">
            h
          </div>
        </div>
        <div className="static_card"></div>
        <div className="static_card"></div>
        <div className="static_card"></div>
      </div>
    </section>
  );
}
