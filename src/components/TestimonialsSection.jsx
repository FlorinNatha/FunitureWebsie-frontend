import React from 'react'
import Slider from "react-slick";
import PersonX from "../assets/person-x.png";
import "../style/Home.css";

function TestimonialsSection() {
    const testimonials = [
          {
            id: 1,
            text: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.",
            name: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: PersonX,
          },
          {
            id: 2,
            text: "Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus.",
            name: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: PersonX,
          },
          {
            id: 3,
            text: "Integer convallis volutpat dui quis scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames.",
            name: "Maria Jones",
            position: "CEO, Co-Founder, XYZ Inc.",
            image: PersonX,
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
    };
  return (
    <div>
    {/*---------Textimonial------*/}
    <div className="testimonial-section before-footer-section py-5" style={{backgroundColor: "#cad1ce"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h2 className="section-title">Testimonials</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="testimonial-slider-wrap text-center">
              <Slider {...settings}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="item">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 mx-auto">
                        <div className="testimonial-block text-center">
                          <blockquote className="mb-5">
                            <p>&ldquo;{testimonial.text}&rdquo;</p>
                          </blockquote>
                          <div className="author-info">
                            <div className="author-pic" style={{ display: "flex", justifyContent: "center" }}>
                              <img src={testimonial.image} alt={testimonial.name} className="img-fluid" />
                            </div>
                            <h3 className="font-weight-bold">{testimonial.name}</h3>
                            <span className="position d-block mb-3">{testimonial.position}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default TestimonialsSection
