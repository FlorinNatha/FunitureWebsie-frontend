import React, { useState } from "react"; // ✅ Import useState
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import product1 from "../../assets/product-1.png";
import product2 from "../../assets/product-2.png";
import "../../style/Home.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 49.0, quantity: 1, image: product1 },
    { id: 2, name: "Product 2", price: 49.0, quantity: 1, image: product2 },
  ]);

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity (but not below 1)
  const decreaseQuantity = (id) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Calculate cart total
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero" style={{ backgroundColor: "#1f4d3b" }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Cart</h1>
              </div>
            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>

      <div className="container">
        <h2 className="my-4">Shopping Cart</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} width="50" />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button className="btn btn-sm btn-outline-dark" onClick={() => decreaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button className="btn btn-sm btn-outline-dark" onClick={() => increaseQuantity(item.id)}>
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className="btn btn-sm btn-danger" onClick={() => removeItem(item.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h4 className="text-right">Total: ${cartTotal}</h4>

        {/* Continue Shopping and Cart Totals */}
        <div className="row mt-5" style={{ marginBottom: "120px" }}>
          <div className="col-md-6">
            <div className="row mb-5">
              <div className="col-md-6 mb-3 mb-md-0">
                <button className="btn btn-black btn-sm btn-block" style={{ backgroundColor: "#4b4f4e", color: "white" }}>Update Cart</button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-outline-black btn-sm btn-block" style={{ backgroundColor: "#4b4f4e", color: "white" }}>Continue Shopping</button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <label className="text-black h4" htmlFor="coupon">Coupon</label>
                <p>Enter your coupon code if you have one.</p>
              </div>
              <div className="col-md-8 mb-3 mb-md-0">
                <input type="text" className="form-control py-3" id="coupon" placeholder="Coupon Code" />
              </div>
              <div className="col-md-4">
                <button className="btn btn-black" style={{ backgroundColor: "#4b4f4e", color: "white" }}>Apply Coupon</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pl-5">
            <div className="row justify-content-end">
              <div className="col-md-7">
                <div className="row">
                  <div className="col-md-12 text-right border-bottom mb-5">
                    <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <span className="text-black">Subtotal</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${cartTotal}</strong>
                  </div>
                </div>
                <div className="row mb-5">
                  <div className="col-md-6">
                    <span className="text-black">Total</span>
                  </div>
                  <div className="col-md-6 text-right">
                    <strong className="text-black">${cartTotal}</strong>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12  ">
                  <button
                    className="btn  py-3 btn-block"
                    onClick={() => window.location = 'checkout.html'}
                    style={{ backgroundColor: "#3b5d50", color: "white" }}
                    >
                    Proceed To Checkout
                  </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Cart;
