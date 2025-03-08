import React from 'react'
import CouchImage from "../../assets/couch.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../../style/Home.css";

function ContactUs() {
  return (
    <div>
      <div className="hero" style={{ backgroundColor: "#1f4d3b"}}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="intro-excerpt">
                <h1>Contact Us</h1>
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

     {/*---- form section-----*/}
      <div className="untree_co-section" style={{ backgroundColor: "#dee3e1"}}>
      <div className="container">
        <div className="block">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-8 pb-4">
              
              <div className="row mb-5">
                {/* Location */}
                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active">
                    <div className="service-icon color-1 mb-4">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="service-contents">
                      <p>43 Raymouth Rd. Baltemoer, London 3910</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active">
                    <div className="service-icon color-1 mb-4">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div className="service-contents">
                      <p>info@yourdomain.com</p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="col-lg-4">
                  <div className="service no-shadow align-items-center link horizontal d-flex active">
                    <div className="service-icon color-1 mb-4">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                    <div className="service-contents">
                      <p>+1 294 3925 3939</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form>
                <div className="row">
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="fname">First name</label>
                      <input type="text" className="form-control" id="fname" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label className="text-black" htmlFor="lname">Last name</label>
                      <input type="text" className="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="text-black" htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group mb-5">
                  <label className="text-black" htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" cols="30" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary-hover-outline bg-dark text-white">Send Message</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ContactUs
