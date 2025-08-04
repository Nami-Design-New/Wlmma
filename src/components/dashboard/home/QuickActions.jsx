import { Link } from "react-router";

export default function QuickActions() {
  const actions = [
    {
      icon: "/icons/customize.svg",
      title: "General Settings",
      desc: "Manage your app's terms, policies, and slider content",
    },
    {
      icon: "/icons/user-plus.svg",
      title: "Providers Requests",
      desc: "Review and approve new service provider registrations",
    },
    {
      icon: "/icons/reservations.svg",
      title: "Reservations",
      desc: "View and manage all user bookings and schedules",
    },
    {
      icon: "/icons/support-messages.svg",
      title: "Support Messages",
      desc: "Respond to user inquiries and support requests",
    },
  ];

  return (
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
  );
}
