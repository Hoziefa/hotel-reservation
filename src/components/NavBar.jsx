import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaAlignRight, FaTimes } from "react-icons/fa";

import logo from "../images/logo.svg";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="logo nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>

                    <button className="nav-btn" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="nav-icon" /> : <FaAlignRight className="nav-icon" />}
                    </button>
                </div>

                <ul className={`nav-links ${isOpen ? "show-nav" : ""}`}>
                    <li>
                        <NavLink exact to="/" data-text="home">
                            home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/rooms" data-text="rooms">
                            rooms
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
