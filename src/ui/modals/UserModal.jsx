import { Modal, Nav, Tab } from "react-bootstrap";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useGetUserDetails from "../../hooks/users/useGetUserDetails";

export default function UserModal({ showModal, handleClose, item }) {
  const { data } = useGetUserDetails(item?.id);

  console.log(data);
  

  return (
    <Modal
      show={showModal}
      centered
      onHide={handleClose}
      aria-labelledby="slider-modal"
    >
      <Modal.Header closeButton>
        <h6>{item?.name_en}</h6>
      </Modal.Header>

      <Modal.Body>
        <div className="tool_details">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="first">User Info</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">User Bookings</Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="first">First tab content</Tab.Pane>
              <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </Modal.Body>
    </Modal>
  );
}
