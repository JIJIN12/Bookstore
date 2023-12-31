import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";
export default function Navtop() {
  


  return (
    <div>
      <div className="">
        <header className="header">
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
              />
              <label className="search_title fas fa-search"></label>
            </form>

            <div className="icons">
              <div className="search_title fas fa search"></div>
              <a
                href="/book/favourite"
                className="shpping_cart fas fa-heart"
              ></a>
              <a href="/cart" className="fa-solid fa-book"></a>
              <a href="/profile" className="user fas fa-user"></a>
            </div>
          </div>

          <div className="header_2">
            <nav className="navbar ">
              <>
                <a href="/" className="header_2_a">
                  HOME
                </a>
                <a href="/featured" className="header_2_a">
                  FEATURED
                </a>
                <a href="/author" className="header_2_a">
                  AUTHOR
                </a>
                <a href="/book" className="header_2_a">
                  BOOKS
                </a>
               
              </>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}
