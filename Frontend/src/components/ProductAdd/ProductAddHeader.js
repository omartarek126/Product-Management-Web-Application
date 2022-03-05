import React from 'react';
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function ProductAddHeader() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Scandiweb Logo" className="nav-logo" />
                <h1 className="nav-header">Product Add</h1>
                <ul className="nav-items">
                    <li>
                        <button
                            type='submit' form='product_form' id="add-product-btn"> Save &nbsp; <i className="fa-solid fa-floppy-disk"></i>
                        </button>
                    </li>
                    <Link to="/">
                        <li>
                            <button
                                id="delete-product-btn">  Cancel &nbsp; <i className="fa-solid fa-xmark"></i>
                            </button>
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default ProductAddHeader;