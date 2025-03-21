import React from 'react'
import { Link } from "react-router-dom";
import CouchImage from "../../assets/couch.png";
import TruckIcon from "../../assets/truck.svg";
import BagIcon from "../../assets/bag.svg";
import SupportIcon from "../../assets/support.svg";
import ReturnIcon from "../../assets/return.svg";
import Product1 from "../../assets/product-1.png";
import Product2 from "../../assets/product-2.png";
import Product3 from "../../assets/product-3.png";
import CrossIcon from "../../assets/cross.svg";
import "../../style/Home.css";
import TestimonialsSection from '../../components/TestimonialsSection';


function Services() {
  const features = [
    { id: 1, icon: TruckIcon, title: "Fast & Free Shipping", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 2, icon: BagIcon, title: "Easy to Shop", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 3, icon: SupportIcon, title: "24/7 Support", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 4, icon: ReturnIcon, title: "Hassle Free Returns", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 5, icon: TruckIcon, title: "Fast & Free Shipping", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 6, icon: BagIcon, title: "Easy to Shop", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 7, icon: SupportIcon, title: "24/7 Support", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 8, icon: ReturnIcon, title: "Hassle Free Returns", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." }
  ];

  const products = [
      { id: 1, name: "Nordic Chair", price: "$50.00", image:  Product1},
      { id: 2, name: "Kruzo Aero Chair", price: "$78.00", image: Product2 },
      { id: 3, name: "Ergonomic Chair", price: "$43.00", image: Product3 },
    ];


  return (
    <div>
      <div className="hero" style={{ backgroundColor: "#1f4d3b"}}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Services</h1>
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

      {/*-----Why you choo us section----------*/}
      <div className="why-choose-section">
      <div className="container">
        <div className="row my-5">
          {features.map((feature) => (
            <div key={feature.id} className="col-6 col-md-6 col-lg-3 mb-4">
              <div className="feature">
                <div className="icon">
                  <img src={feature.icon} alt="Image" className="imf-fluid" />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/*------Start Product Section -------*/}
    <div className="product-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-md-12 col-lg-3 mb-4 mb-lg-0">
            <h2 className="mb-4 section-title">Crafted with excellent material.</h2>
            <p className="mb-4">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. 
              Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
            <p>
              <Link to="/shop" className='btn btn-primary'>Explore</Link>
            </p>
          </div>
          {/* Products */}
          {products.map((product) => (
            <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-4">
              <Link to="/cart" className="product-item text-decoration-none text-dark" >
                <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                <h3 className="product-title mt-3">{product.name}</h3>
                <strong className="product-price d-block">{product.price}</strong>
                <span className="icon-cross d-block mt-2">
                  <img src={CrossIcon} className="img-fluid" alt="Add to cart" />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
    <TestimonialsSection/>
    </div>
  )
}

export default Services
