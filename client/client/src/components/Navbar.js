import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container">
                    <a className="navbar-brand bookstore" href="#">
                        BookStore
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <Link className="nav-item nav-link nav_list " to={'#'} >
                                    Home
                                
                            </Link>
                            <Link className="nav-item nav-link nav_list " to={'#'} >
                                    BOOK
                                
                            </Link>
                            <Link className="nav-item nav-link nav_list " to={'#'} >
                                    ADD BOOK
                                
                            </Link>
                           
                           
                        </ul>
                       
                    </div>
                </div>
            </nav>

        </div>
    )
}
