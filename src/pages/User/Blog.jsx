import React from 'react'
import CouchImage from "../../assets/couch.png";
import Post1 from "../../assets/post-1.jpg";
import Post2 from "../../assets/post-2.jpg";
import Post3 from "../../assets/post-3.jpg";
import Slider from "react-slick";
import PersonX from "../../assets/person-x.png";
import "../../style/Home.css";

function Blog() {
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
      <div className="hero" style={{ backgroundColor: "#1f4d3b"}}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Blog</h1>
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

      {/*----Blog section------------*/}
      <div className="blog-section">
        <div className="container">    
        
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                <img src={Post1} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={Post2} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={Post3} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                <img src={Post1} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={Post2} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={Post3} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                <img src={Post1} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">First Time Home Owner Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 19, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={Post2} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">How To Keep Your Furniture Clean</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Robert Fox</a></span> <span>on <a href="#">Dec 15, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 mb-4 mb-md-0">
              <div className="post-entry">
                <a href="#" className="post-thumbnail">
                  <img src={Post3} alt="Image" className="img-fluid" />
                </a>
                <div className="post-content-entry">
                  <h3><a href="#">Small Space Furniture Apartment Ideas</a></h3>
                  <div className="meta">
                    <span>by <a href="#">Kristin Watson</a></span> <span>on <a href="#">Dec 12, 2021</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

export default Blog

