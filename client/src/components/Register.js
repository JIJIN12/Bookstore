import React, { useEffect, useState } from "react";

import "./Register.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { registrataion } from "./redux/slice/registerslice";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function Register() {
  const dispatch = useDispatch();
  const { register_data } = useSelector((state) => state.register);

  const [registerstate, set_register] = useState({});
  const navigate = useNavigate();
  const register_input = (event) => {
    const { name, value } = event.target;
    set_register({ ...registerstate, [name]: value });
  };

  const register_submit = (event) => {
    event.preventDefault();
    dispatch(registrataion(registerstate));
    // navigate("/");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="header">
        <div className="header_1">
          <a href="#" className="logo">
            <i className="book_title fas fa-book"></i>Bookly
          </a>

          <form action="" className="search_form">
            <input
              type="search"
              className="search_input"
              name=""
              placeholder="search here"
              disabled
            />
            <label className="search_title fas fa-search"></label>
          </form>

          <div className="icons">
            <div className="search_title fas fa search"></div>
            <a
              href="/book/favourite"
              className="shpping_cart fas fa-heart disabled"
            ></a>
            <a href="/cartcompo" className="fa-solid fa-book disabled"></a>
            <a href="/profile" className="user fas fa-user disabled"></a>
          </div>
        </div>
      </div>

      <div className="register-form-container">
        <form action="" className="register_form">
          <h3 className="register_title">Sign in</h3>
          <span>Full Name</span>
          <input
            type="text"
            name="FullName"
            className="box"
            placeholder="Enter your Full Name"
            onChange={register_input}
          />
          <span>Email</span>
          <input
            type="email"
            name="Email"
            className="box"
            placeholder="Enter your Email"
            onChange={register_input}
          />
          <span>username</span>
          <input
            type="text"
            name="username"
            className="box"
            placeholder="Enter your Username"
            onChange={register_input}
          />
          <span>Password</span>
          <input
            type="password"
            name="password"
            className="box"
            placeholder="Enter your password"
            onChange={register_input}
          />

          <div className="checkbox">
            <input type="checkbox" name="" />
            <label className="register_label">remember me</label>
          </div>

          <input
            type="submit"
            value={"signin"}
            className="register_btn"
            onClick={register_submit}
          />
          <p>
            forget password?<a href="#">Click here</a>
          </p>
          <p>
            Already have an account?<a href="/login">Click here</a>
          </p>
        </form>
      </div>
    </div>
  );
}
