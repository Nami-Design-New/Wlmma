import { Modal } from "react-bootstrap";
import InputField from "./../forms/InputField";
import SubmitButton from "../forms/SubmitButton";

export default function AddSlideModal({ showModal, setShowModal }) {
  return (
    <Modal
      show={showModal}
      centered
      onHide={() => setShowModal(false)}
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header closeButton>
        <h6>Add Slide</h6>
      </Modal.Header>
      <Modal.Body>
        <form className="form_ui d-flex flex-column gap-3">
          <InputField
            label="Link"
            type="text"
            id="link"
            name="link"
            placeholder="Enter hyper link or deep link here ..."
          />

          <label htmlFor="image" className="image_fiels">
            <i className="fa-regular fa-image"></i>
            <h6>click to add image</h6>
            <input type="file" name="image" id="image" />
          </label>

          <SubmitButton text="Save" />
        </form>
      </Modal.Body>
    </Modal>
  );
}
