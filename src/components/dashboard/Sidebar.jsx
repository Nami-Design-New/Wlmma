import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside>
      <div className="logo">
        <img src="/images/headerLogo.svg" alt="logo" />
      </div>

      <ul className="nav_items">
        <li>
          <Link to="">Dashboard</Link>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Invoices</a>
        </li>
        <li>
          <a href="#">Settings</a>
        </li>
      </ul>
    </aside>
  );
}
