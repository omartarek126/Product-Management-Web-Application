import React from 'react';
import ProductComponent from "./ProductComponent"
//import axios from "axios";

function ProductListBody({ setToBeDeleted }) {

    const [productData, setProductData] = React.useState([])

    function toggle(id) { //called when a checkbox is toggled
        setToBeDeleted(prevToBeDeleted => {
            if (prevToBeDeleted.includes(id)) { //if the array contains the sku this means that the user is unchecking the product so we remove it from the array
                if (prevToBeDeleted.length === 1) {
                    return []
                }
                prevToBeDeleted.splice(prevToBeDeleted.indexOf(id), 1)
                return prevToBeDeleted
            } else { //else means the sku isn't in the array so the user is checking the product to be deleted using the mass delete button
                return [...prevToBeDeleted, id]
            }
        });
    }

    React.useEffect(() => {
        // const api = axios.create({
        //     baseURL: "https://prefectural-bump.000webhostapp.com/pages/"
        // })
        // api.get("/productList.php")
        //     .then(res => res.data)
        //     .then(data => {
        //         setProductData(data)
        //     })

        fetch("https://prefectural-bump.000webhostapp.com/pages/productList.php")
            .then(res => res.json())
            .then(data => setProductData(data))

    }, [])

    const productElements = productData.map(product => <ProductComponent key={product.sku} toggle={() => toggle(product.sku)} {...product} />)

    return (
        <main>
            {productElements}
        </main>
    )
}

export default ProductListBody;