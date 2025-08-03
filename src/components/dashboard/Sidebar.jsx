import { NavLink } from "react-router";
import { Accordion } from "react-bootstrap";
import useLogout from "../../hooks/auth/useLogout";

export default function Sidebar() {
  const { logout, isPending } = useLogout();

  return (
    <aside>
      <div className="logo">
        <img src="/images/headerLogo.svg" alt="logo" />
      </div>

      <div className="nav_items">
        <NavLink to="" end>
          <img src="/icons/dashboard.svg" alt="dashboard" />
          <span>Dashboard</span>
        </NavLink>

        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <div>
                <img src="/icons/clients.svg" alt="clients" />
                <span>Clients</span>
              </div>
              <i className="fa-regular fa-angle-right"></i>
            </Accordion.Header>

            <Accordion.Body>
              <NavLink to="users">
                <span className="circle"></span> Users
              </NavLink>
              <NavLink to="providers">
                <span className="circle"></span> Providers
              </NavLink>
              <NavLink to="companies">
                <span className="circle"></span> Companies
              </NavLink>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div>
                <img src="/icons/settings.svg" alt="settings" />
                <span>General Settings</span>
              </div>
              <i className="fa-regular fa-angle-right"></i>
            </Accordion.Header>
            <Accordion.Body>
              <NavLink to="app-sliders">
                <span className="circle"></span> App Sliders
              </NavLink>
              <NavLink to="terms-conditions">
                <span className="circle"></span> Terms & Conditions
              </NavLink>
              <NavLink to="about-us">
                <span className="circle"></span> About us
              </NavLink>
              <NavLink to="privacy-policy">
                <span className="circle"></span> Privacy Policy
              </NavLink>
              <NavLink to="faqs">
                <span className="circle"></span> FAQs
              </NavLink>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <NavLink to="requests">
          <img src="/icons/requests.svg" alt="requests" />
          <span>Providers Requests</span>
        </NavLink>

        <NavLink to="support">
          <img src="/icons/support.svg" alt="support" />
          <span>Support Messages</span>
        </NavLink>

        <NavLink to="bookings">
          <img src="/icons/bookings.svg" alt="bookings" />
          <span>Bookings</span>
        </NavLink>

        <NavLink to="orders">
          <img src="/icons/orders.svg" alt="orders" />
          <span>Tool Orders</span>
        </NavLink>
      </div>

      <div className="logout">
        <div className="link" onClick={logout} disabled={isPending}>
          <img src="/icons/logout.svg" alt="logout" />
          <span>Logout</span>
        </div>
      </div>
    </aside>
  );
}
