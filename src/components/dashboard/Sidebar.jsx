import { NavLink } from "react-router";

const navItems = [
  {
    to: "",
    icon: "/icons/dashboard.svg",
    alt: "dashboard",
    label: "Dashboard",
  },
  {
    to: "clients",
    icon: "/icons/clients.svg",
    alt: "clients",
    label: "Clients",
  },
  {
    to: "general-settings",
    icon: "/icons/settings.svg",
    alt: "settings",
    label: "General Settings",
  },
  {
    to: "provider-requests",
    icon: "/icons/requests.svg",
    alt: "requests",
    label: "Providers Requests",
  },
  {
    to: "support-messages",
    icon: "/icons/support.svg",
    alt: "support",
    label: "Support Messages",
  },
  {
    to: "bookings",
    icon: "/icons/bookings.svg",
    alt: "bookings",
    label: "Bookings",
  },
  {
    to: "tool-orders",
    icon: "/icons/orders.svg",
    alt: "orders",
    label: "Tool Orders",
  },
];

export default function Sidebar() {
  return (
    <aside>
      <div className="logo">
        <img src="/images/headerLogo.svg" alt="logo" />
      </div>

      <div className="nav_items">
        {navItems.map((item, index) => (
          <NavLink key={index} to={item.to}>
            <img src={item.icon} alt={item.alt} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>

      <div className="logout">
        <div className="link">
          <img src="/icons/logout.svg" alt="logout" />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}
