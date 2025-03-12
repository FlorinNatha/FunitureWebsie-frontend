import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 "
      style={{ backgroundColor: "#cad1ce" }}
    >
      <div className="bg-white p-3 rounded w-35">
        <form>
          <h2 className="m-5"> Login to Website</h2>
          <div className="mb-3">
            <label for="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-4"
            />
          </div>
          <div className="mb-3">
            <label for="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control rounded-4"
            />
          </div>
          <button className="btn btn-success w-100 mb-5 mt-4">Login now</button>
          <div className="mb-3 ms-3">
            <p>Forgot Your Password? Get help </p>
          </div>
          <div className="mb-3 ms-3">
            <Link to="/register">
              <p>Not Registered? Create an account</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
