import React from "react";
import './style.css';
import logo from '../images/v7_2.png';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-custom">
            <div className="container-fluid">

                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Logo" width="40" height="40" className="me-2"/>
                    Maru Shabu Buffet
                </a>
                
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="About">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="Contact">Contact</a>
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav>
    );
}

export default Navbar;
