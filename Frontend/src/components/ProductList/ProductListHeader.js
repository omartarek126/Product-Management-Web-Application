import React from 'react';
import { Link } from "react-router-dom"
import logo from "../../images/logo.svg"

function ProductListHeader(props) {
    return (
        <header>
            <nav className="nav">
                <img src={logo} alt="Scandiweb Logo" className="nav-logo" />
                <h1 className="nav-header">Product List</h1>
                <ul className="nav-items">
                    <Link to="/add-product">
                        <li>
                            <button
                                id="add-product-btn"> ADD &nbsp; <i className="fa-solid fa-plus"></i>
                            </button>
                        </li>
                    </Link>
                    <li>
                        <button
                            onClick={props.handleMassDelete} id="delete-product-btn" disabled={props.disable}>MASS DELETE &nbsp;
                            <i className="fa-solid fa-trash-can"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default ProductListHeader;