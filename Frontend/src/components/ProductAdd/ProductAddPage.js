import React from "react"
import ProductAddHeader from "./ProductAddHeader"
import ProductAddBody from "./ProductAddBody"

function ProductAddPage() {

    React.useEffect(() => {
        document.title = "Product Add"
    }, []);

    return (
        <div>
            <ProductAddHeader />
            <ProductAddBody />
        </div>
    )
}

export default ProductAddPage