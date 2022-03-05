import React from 'react';
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function Header404() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Scandiweb Logo" className="nav-logo" />
                <h1 className="nav-header">Error 404</h1>
                <Link to="/">
                    <button
                        id="add-product-btn">  Home &nbsp; <i className="fa-solid fa-house"></i>
                    </button>
                </Link>
            </nav>
        </header>
    )
}

export default Header404;