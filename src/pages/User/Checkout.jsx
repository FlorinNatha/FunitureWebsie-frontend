import React, { useState } from 'react';
import '../../style/Home.css';

function Checkout() {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    apartment: "",
    state: "",
    postalZip: "",
    email: "",
    phone: "",
    createAccount: false,
    accountPassword: "",
    shipDifferent: false,
    diffCountry: "",
    diffFirstName: "",
    diffLastName: "",
    diffCompanyName: "",
    diffAddress: "",
    diffApartment: "",
    diffState: "",
    diffPostalZip: "",
    diffEmail: "",
    diffPhone: "",
    orderNotes: "",
    couponCode: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
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
      <div className="container py-5">
        <div className='row'>
        <div className='col-6'>
          <h2 className="text-black">Billing Details</h2>
          <form onSubmit={handleSubmit} className="p-3 border bg-white">
            <div className="mb-3">
              <label className="text-black">Country *</label>
              <select name="country" className="form-control" onChange={handleChange}>
                <option value="">Select a country</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Algeria">Algeria</option>
                <option value="Afghanistan">Afghanistan</option>
              </select>
            </div>
            <div className="row">
              <div className="col-md-6">
                <label className="text-black">First Name *</label>
                <input type="text" name="firstName" className="form-control" onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="text-black">Last Name *</label>
                <input type="text" name="lastName" className="form-control" onChange={handleChange} />
              </div>
            </div>
            <div className="mb-3">
              <label className="text-black">Company Name</label>
              <input type="text" name="companyName" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="text-black">Address *</label>
              <input type="text" name="address" className="form-control" onChange={handleChange} placeholder="Street address" />
            </div>
            <div className="mb-3">
              <label className="text-black">Email *</label>
              <input type="email" name="email" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="text-black">Phone *</label>
              <input type="text" name="phone" className="form-control" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <input type="checkbox" name="createAccount" onChange={handleChange} /> Create an account?
              {formData.createAccount && (
                <input type="password" name="accountPassword" className="form-control mt-2" placeholder="Password" onChange={handleChange} />
              )}
            </div>
            <div className="mb-3">
              <input type="checkbox" name="shipDifferent" onChange={handleChange} /> Ship to a different address?
              {formData.shipDifferent && (
                <div className="mt-3">
                  <label className="text-black">Different Address *</label>
                  <input type="text" name="diffAddress" className="form-control" onChange={handleChange} />
                </div>
              )}
            </div>
            <div className="mb-3">
              <label className="text-black">Order Notes</label>
              <textarea name="orderNotes" className="form-control" onChange={handleChange}></textarea>
            </div>
            </form>
          </div>

          <div className='col-6 mt-5'>
          <form onSubmit={handleSubmit} className="p-3 border bg-white">
            <div className="border p-3 mb-3">
              <h3 className="text-black">Coupon Code</h3>
              <input type="text" name="couponCode" className="form-control" placeholder="Enter coupon code" onChange={handleChange} />
            </div>
            <h3 className="text-black">Your Order</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Top Up T-Shirt x 1</td>
                  <td>$250.00</td>
                </tr>
                <tr>
                  <td>Polo Shirt x 1</td>
                  <td>$100.00</td>
                </tr>
                <tr>
                  <td><strong>Order Total</strong></td>
                  <td><strong>$350.00</strong></td>
                </tr>
              </tbody>
            </table>
            <div className="form-group">
              <button type="submit" className="btn btn-primary w-100">Place Order</button>
            </div>
          </form>
        </div>
        </div>  
      </div>

    </div>
  );
}

export default Checkout;
