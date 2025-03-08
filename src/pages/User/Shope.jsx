import React from 'react'
import '../../style/Home.css'
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import product3 from "../../assets/product-3.png";
import crossIcon from "../../assets/cross.svg";

function Shope() {

  const products = [
    { id: 1, img: product3, title: "Nordic Chair", price: "$50.00" },
    { id: 2, img: product1, title: "Nordic Chair", price: "$50.00" },
    { id: 3, img: product2, title: "Kruzo Aero Chair", price: "$78.00" },
    { id: 4, img: product3, title: "Ergonomic Chair", price: "$43.00" },
    { id: 5, img: product3, title: "Nordic Chair", price: "$50.00" },
    { id: 6, img: product1, title: "Nordic Chair", price: "$50.00" },
    { id: 7, img: product2, title: "Kruzo Aero Chair", price: "$78.00" },
    { id: 8, img: product3, title: "Ergonomic Chair", price: "$43.00" },
  ];
  

  return (
    <>
      {/* Hero Section */}
      <div className="hero" style={{ backgroundColor: "#1f4d3b"}}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Shop</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="untree_co-section product-section before-footer-section">
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-12 col-md-4 col-lg-3 mb-5">
                <a className="product-item" href="#">
                  <img src={product.img} className="img-fluid product-thumbnail" alt={product.title} />
                  <h3 className="product-title">{product.title}</h3>
                  <strong className="product-price">{product.price}</strong>
                  <span className="icon-cross">
                    <img src={crossIcon} className="img-fluid" alt="Cross" />
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shope
