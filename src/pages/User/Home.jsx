import React, { useState } from 'react'
import Couch from "../../assets/couch.png"
import cross from "../../assets/cross.svg";
import Product1 from "../../assets/product-1.png";
import Product2 from "../../assets/product-2.png";
import Product3 from "../../assets/product-3.png";
import TruckIcon from "../../assets/truck.svg";
import BagIcon from "../../assets/bag.svg";
import SupportIcon from "../../assets/support.svg";
import ReturnIcon from "../../assets/return.svg";
import WhyChooseUsImg from "../../assets/why-choose-us-img.jpg";
import Img1 from "../../assets/img-grid-1.jpg";
import Img2 from "../../assets/img-grid-2.jpg";
import Img3 from "../../assets/img-grid-3.jpg";
import Person1 from "../../assets/person-1.png";
import Post1 from "../../assets/post-1.jpg";
import Post2 from "../../assets/post-2.jpg";
import Post3 from "../../assets/post-3.jpg";
import '../../style/Home.css';
import TestimonialsSection from '../../components/TestimonialsSection';

function Home() {

  const products = [
    { id: 1, name: "Nordic Chair", price: "$50.00", image:  Product1},
    { id: 2, name: "Kruzo Aero Chair", price: "$78.00", image: Product2 },
    { id: 3, name: "Ergonomic Chair", price: "$43.00", image: Product3 },
  ];

  const features = [
    { id: 1, icon: TruckIcon, title: "Fast & Free Shipping", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 2, icon: BagIcon, title: "Easy to Shop", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 3, icon: SupportIcon, title: "24/7 Support", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
    { id: 4, icon: ReturnIcon, title: "Hassle Free Returns", description: "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate." },
  ];

  const productss = [
    { id: 1, name: "Nordic Chair", image: Product1, description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio" },
    { id: 2, name: "Kruzo Aero Chair", image: Product2, description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio" },
    { id: 3, name: "Ergonomic Chair", image: Product3, description: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio" },
  ];

  

  return (
    <div>
      <div className="hero text-light py-5"  style={{ backgroundColor: "#1f4d3b" }}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            {/* Left Section */}
            <div className="col-lg-5 text-center text-lg-start">
              <div className="intro-excerpt">
                <h1>
                  Modern Interior <span className="d-block">Design Studio</span>
                </h1>
                <p className="mb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                </p>
                <p>
                  <a href="#" className="btn btn-secondary me-2">
                    Shop Now
                  </a>
                  <a href="#" className="btn btn-outline-dark">
                    Explore
                  </a>
                </p>
              </div>
            </div>
            {/* Right Section (Image) */}
            <div className="col-lg-7 text-center">
              <div className="hero-img-wrap">
                <img src={Couch} className="img-fluid" alt="Couch" />
              </div>
            </div>
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
                <a href="shop.html" className="btn btn-primary">Explore</a>
              </p>
            </div>
            {/* Products */}
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-4">
                <a className="product-item text-decoration-none text-dark" href="cart.html">
                  <img src={product.image} className="img-fluid product-thumbnail" alt={product.name} />
                  <h3 className="product-title mt-3">{product.name}</h3>
                  <strong className="product-price d-block">{product.price}</strong>
                  <span className="icon-cross d-block mt-2">
                    <img src={cross} className="img-fluid" alt="Add to cart" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*------why choose section-------*/}
      <div className="why-choose-section py-5">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Left Side Content */}
          <div className="col-lg-6">
            <h2 className="section-title">Why Choose Us</h2>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

            <div className="row my-5">
              {features.map((feature) => (
                <div key={feature.id} className="col-6 col-md-6 mb-4">
                  <div className="feature text-center">
                    <div className="icon mb-3">
                      <img src={feature.icon} alt={feature.title} className="img-fluid" />
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="col-lg-5">
            <div className="img-wrap text-center">
              <img src={WhyChooseUsImg} alt="Why Choose Us" className="img-fluid rounded shadow" />
            </div>
          </div>
        </div>
      </div>
    </div>

    {/*-----we help section-----*/}
    {/* We Help Section */}
    <div className="we-help-section">
      <div className="container">
        <div className="row justify-content-between">
          {/* Left Section */}
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src={Img1} alt="Untree.co" />
              </div>
              <div className="grid grid-2">
                <img src={Img2} alt="Untree.co" />
              </div>
              <div className="grid grid-3">
                <img src={Img3} alt="Untree.co" />
              </div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="col-lg-5 ps-lg-5">
            <h2 className="section-title mb-4">We Help You Make Modern Interior Design</h2>
            <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>

            <ul className="list-unstyled custom-list my-4">
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
              <li>Donec vitae odio quis nisl dapibus malesuada</li>
            </ul>
            <p><a href="#" className="btn btn-primary">Explore</a></p>
          </div>
        </div>
      </div>
    </div>
              
      {/* Popular Products Section */}
      <div className="popular-product py-5">
        <div className="container">
          <div className="row">
            {productss.map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <div className="product-item-sm d-flex align-items-center border p-3 rounded shadow-sm">
                  <div className="thumbnail me-3">
                    <img src={product.image} alt={product.name} className="img-fluid rounded" />
                  </div>
                  <div className="pt-2">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>
                      <a href="#" className="text-primary text-decoration-none">Read More</a>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialsSection/>
      

    {/*----Blog section------------*/}
    <div className="blog-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="section-title">Recent Blog</h2>
          </div>
          <div className="col-md-6 text-start text-md-end">
            <a href="#" className="more">View All Posts</a>
          </div>
        </div>

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
      </div>
    </div>
    
  </div>
  )
}

export default Home;
