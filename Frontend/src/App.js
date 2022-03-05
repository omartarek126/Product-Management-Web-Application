import React from 'react';
import Page404 from "./components/404/Page404"
import ProductAddPage from "./components/ProductAdd/ProductAddPage"
import ProductListPage from "./components/ProductList/ProductListPage"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path='*' element={<Navigate to="/404" />} />
                    <Route path='/404' element={<Page404 />} />
                    <Route path="/" element={<ProductListPage />} />
                    <Route path="/add-product" element={<ProductAddPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

export default App;