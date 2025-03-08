import React from "react";
import CouchImage from "../../assets/couch.png";
import TruckIcon from "../../assets/truck.svg";
import BagIcon from "../../assets/bag.svg";
import SupportIcon from "../../assets/support.svg";
import ReturnIcon from "../../assets/return.svg";
import WhyChooseUsImg from "../../assets/why-choose-us-img.jpg";
import Person1 from "../../assets/person_1.jpg";
import Person2 from "../../assets/person_2.jpg";
import Person3 from "../../assets/person_3.jpg";
import Person4 from "../../assets/person_4.jpg";
import "../../style/Home.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AboutUs() {
  const features = [
    {
      id: 1,
      icon: TruckIcon,
      title: "Fast & Free Shipping",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 2,
      icon: BagIcon,
      title: "Easy to Shop",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 3,
      icon: SupportIcon,
      title: "24/7 Support",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
    {
      id: 4,
      icon: ReturnIcon,
      title: "Hassle Free Returns",
      description:
        "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.",
    },
  ];

  const teamMembers = [
    { img: Person1, name: "Lawson Arnold", position: "CEO, Founder, Atty." },
    { img: Person2, name: "Jeremy Walker", position: "CEO, Founder, Atty." },
    { img: Person3, name: "Patrik White", position: "CEO, Founder, Atty." },
    { img: Person4, name: "Kathryn Ryan", position: "CEO, Founder, Atty." },
  ];

  const testimonials = [
    {
      quote:
        "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
      name: "Maria Jones",
      position: "CEO, Co-Founder, XYZ Inc.",
      img: Person1,
    },
    {
      quote:
        "Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus.",
      name: "John Doe",
      position: "CTO, ABC Ltd.",
      img: Person1,
    },
    {
      quote:
        "Integer convallis volutpat dui quis scelerisque. Pellentesque habitant morbi tristique senectus et malesuada fames.",
      name: "Sarah Smith",
      position: "Marketing Head, TechCorp",
      img: Person1,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <div className="hero" style={{ backgroundColor: "#1f4d3b"}}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>About Us</h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-white-outline">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="hero-img-wrap">
                <img src={CouchImage} className="img-fluid" alt="Couch" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="why-choose-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <h2 className="section-title">Why Choose Us</h2>
              <p>
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>

              <div className="row my-5">
                {features.map((feature) => (
                  <div key={feature.id} className="col-6 col-md-6 mb-4">
                    <div className="feature text-center">
                      <div className="icon mb-3">
                        <img
                          src={feature.icon}
                          alt={feature.title}
                          className="img-fluid"
                        />
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-5">
              <div className="img-wrap text-center">
                <img
                  src={WhyChooseUsImg}
                  alt="Why Choose Us"
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-5 mx-auto text-center">
              <h2 className="section-title">Our Team</h2>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0"
              >
                <img
                  src={member.img}
                  className="img-fluid mb-5"
                  alt={member.name}
                />
                <h3>
                  <a href="#">
                    <span>{member.name.split(" ")[0]}</span>{" "}
                    {member.name.split(" ")[1]}
                  </a>
                </h3>
                <span className="d-block position mb-4">{member.position}</span>
                <p>
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p className="mb-0">
                  <a href="#" className="more dark">
                    Learn More <span className="icon-arrow_forward"></span>
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonial-section">
        <div className="container">
          <h2 className="text-center">Testimonials</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-block text-center">
                <blockquote className="mb-4">{testimonial.quote}</blockquote>
                <div className="author-info">
                  <div className="author-pic">
                    <img
                      src={testimonial.img}
                      alt={testimonial.name}
                      className="img-fluid"
                    />
                  </div>
                  <h3 className="font-weight-bold">{testimonial.name}</h3>
                  <span className="position">{testimonial.position}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

// Fixed Custom Arrows
const PrevArrow = (props) => <div className="custom-arrow prev-arrow" onClick={props.onClick}>&#8249;</div>;

const NextArrow = (props) => <div className="custom-arrow next-arrow" onClick={props.onClick}>&#8250;</div>;

export default AboutUs;
