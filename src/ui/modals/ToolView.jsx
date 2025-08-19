import { Modal } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ToolView({ showModal, handleClose, item }) {
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
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
          >
            {item?.tool_images?.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image.image_path}
                  alt={`Tool image ${index + 1}`}
                  className="img-fluid"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text mt-3">
            <h6>
              {item?.name_en} <span>{item?.price} SAR</span>
            </h6>
            <p>{item?.description_en}</p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
