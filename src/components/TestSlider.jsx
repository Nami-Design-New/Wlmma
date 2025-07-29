import { Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import user from "/images/person.jpg";

export function TestSlider() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.",
      img: user,
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Amazing experience! Everything was easy and smooth. Highly recommend it.",
      img: user,
      rating: 5,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container >
      <Slider {...settings}>
        {testimonials.map((item) => (
          <div key={item.id}>
            <Card
              className="text-center p-4 border-0 testimonial-card"
              style={{ maxWidth: 600, margin: "0 auto" }}
            >
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.name}
                className="rounded-circle mx-auto mb-3"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Text className="text-muted mb-3">{item.text}</Card.Text>
                <div className="text-warning mb-2">
                  {[...Array(item.rating)].map((_, i) => (
                    <i className="fa-solid fa-star" key={i}></i>
                  ))}
                </div>
                <h5 className="fw-bold">{item.name}</h5>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </Container>
  );
}
