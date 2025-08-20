import { Modal, Nav, Tab } from "react-bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useGetUserDetails from "../../hooks/users/useGetUserDetails";

export default function UserModal({ showModal, handleClose, item }) {
  const { data } = useGetUserDetails(item?.id);

  const user = data || {};
  const bookings = user?.bookings || [];

  return (
    <Modal
      show={showModal}
      centered
      onHide={handleClose}
      aria-labelledby="slider-modal"
    >
      <Modal.Header closeButton>
        <h6>
          {user?.name} {user?.last_name}
        </h6>
      </Modal.Header>

      <Modal.Body>
        <div className="user-modal">
          <Tab.Container id="user-tabs" defaultActiveKey="first">
            <Nav variant="pills" className="mb-3 gap-2">
              <Nav.Item>
                <Nav.Link eventKey="first">User Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">User Bookings</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              {/* User Info */}
              <Tab.Pane eventKey="first">
                <div className="user-info">
                  {user?.live_photo && (
                    <div className="mb-3 d-flex justify-content-center">
                      <img
                        src={user?.live_photo}
                        alt="User Live"
                        className="img-fluid rounded"
                        style={{ maxWidth: "200px" }}
                      />
                    </div>
                  )}

                  <ul className="list-unstyled">
                    <li>
                      <strong>Name:</strong> {user?.name} {user?.last_name}
                    </li>
                    <li>
                      <strong>Phone:</strong> {user?.phone_number}
                    </li>
                    <li>
                      <strong>Email:</strong> {user?.email || "N/A"}
                    </li>
                    <li>
                      <strong>Type:</strong> {user?.user_type?.type}
                    </li>
                    <li>
                      <strong>Gender:</strong> {user?.gender}
                    </li>
                    <li>
                      <strong>Country:</strong> {user?.country || "N/A"}
                    </li>
                    <li>
                      <strong>City:</strong> {user?.city || "N/A"}
                    </li>
                  </ul>
                </div>
              </Tab.Pane>

              {/* User Bookings */}
              <Tab.Pane eventKey="second">
                {bookings.length > 0 ? (
                  <div className="bookings-grid">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="booking-card">
                        <div className="booking-header">
                          <h6>Booking #{booking.id}</h6>
                          <span
                            className={`status status-${booking.status_id}`}
                          >
                            Status: {booking.status_id}
                          </span>
                        </div>
                        <div className="booking-body">
                          <p>
                            <strong>Activity ID:</strong> {booking.activity_id}
                          </p>
                          <p>
                            <strong>Date:</strong> {booking.date}
                          </p>
                          <p>
                            <strong>Time:</strong> {booking.time || "N/A"}
                          </p>
                          <p>
                            <strong>Capacity:</strong> {booking.capacity}
                          </p>
                          <p>
                            <strong>Total Price:</strong> {booking.total_price}{" "}
                            SAR
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-center mt-5">No bookings found.</p>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Modal.Body>
    </Modal>
  );
}
