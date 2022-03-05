import React from "react"
import ProductListHeader from "./ProductListHeader"
import ProductListBody from "./ProductListBody"
// import axios from "axios";

function ProductListPage() {

    const [toBeDeleted, setToBeDeleted] = React.useState([]) //hold the sku of the checked products to be deleted using mass delete

    React.useEffect(() => {
        document.title = "Product List"
    }, []);

    // const api = axios.create({
    //     baseURL: "https://prefectural-bump.000webhostapp.com/pages/"
    // })
    function handleMassDelete() {
        let postData = { delete: toBeDeleted }
        //api.post("/productDelete.php", postData) //000webhost isn't compatible with axios post so I used the default fetching function
        fetch("https://prefectural-bump.000webhostapp.com/pages/productDelete.php", {
            method: 'post',
            body: JSON.stringify(postData)
        })
        //refresh the page to refetch the products after deletion and reset the state
        window.location.reload();
        setToBeDeleted([])
    }

    return (
        <div>
            <ProductListHeader handleMassDelete={handleMassDelete} disable={toBeDeleted.length === 0} />
            <ProductListBody setToBeDeleted={setToBeDeleted} />
        </div>
    )
}

export default ProductListPage