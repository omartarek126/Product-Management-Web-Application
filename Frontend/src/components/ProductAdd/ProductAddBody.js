import React from "react";
import { useNavigate } from "react-router-dom";
import isNumber from "is-number";
// import axios from "axios";

function ProductAddBody() {

    const [formData, setFormData] = React.useState(
        { sku: "", name: "", price: "", productType: "", size: "", height: "", width: "", length: "", weight: "" }
    )

    const [formSubmitted, setFormSubmitted] = React.useState(false); //created to start validating inputs only after submission

    const [errorMessage, setErrorMessage] = React.useState("");

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
        if (name === "productType") { //Reset product-specific input fields when the product type is changed using the type switcher
            for (var key in formData) {
                if (formData.hasOwnProperty(key) && key !== "sku" && key !== "name" && key !== "price" && key !== "productType") {
                    formData[key] = "";
                }
            }
        }
        //resetting back the states to default after changing the inputs to be revalidated after resubmission
        setFormSubmitted(false);
        setErrorMessage("");
    }

    function conditionalRender(type) {
        if (formData.productType === type) {
            return true;
        }
        return false;
    }

    function validateOne(value, type) { //validate each field on its own to color the border of only wrong fields
        if (formSubmitted) {
            if (type === "text" && value.trim() === "") { //trim to avoid submission of whitespaces
                return false;
            }
            else if (type === "number") {
                if (value.trim() === "") {
                    return false;
                }
                else if (!isNumber(value)) {
                    return false;
                }
            }

        }
        return true;
    }

    let navigate = useNavigate()
    // const api = axios.create({
    //     baseURL: "https://prefectural-bump.000webhostapp.com/pages/"
    // })
    function handleSubmit(event) {
        event.preventDefault()
        setFormSubmitted(true);
        // api.post("/productAdd.php", formData) //000webhost isn't compatible with axios post so I used the default fetching function
        fetch("https://prefectural-bump.000webhostapp.com/pages/productAdd.php", {
            method: 'post',
            body: JSON.stringify(formData)
        }).then(response => response.text())
            .then(result => {
                if (result !== "") { //result here is the echoed error message from php
                    setErrorMessage(result)
                }
                else {
                    navigate("/");
                    window.location.reload();
                }
            });
    }

    return (

        < form id="product_form" onSubmit={handleSubmit} >

            <label>SKU</label>
            <input
                id="sku"
                type="text"
                placeholder="SKU"
                onChange={handleChange}
                className={!validateOne(formData.sku, "text") ? "errorInput" : ""}
                name="sku"
                value={formData.sku}
            />

            <br />

            <label>Name</label>
            <input
                id="name"
                type="text"
                placeholder="Name"
                onChange={handleChange}
                className={!validateOne(formData.name, "text") ? "errorInput" : ""}
                name="name"
                value={formData.name}
            />

            <br />

            <label>Price ($)</label>
            <input
                id="price"
                type="text"
                placeholder="Price ($)"
                onChange={handleChange}
                className={!validateOne(formData.price, "number") ? "errorInput" : ""}
                name="price"
                value={formData.price}
            />

            <br />

            <label>Product Type</label>
            <select
                id="productType"
                value={formData.productType}
                onChange={handleChange}
                className={!validateOne(formData.productType, "text") ? "errorInput" : ""}
                name="productType"
            >
                <option value="">-- Choose --</option>
                <option value="DVD">DVD</option>
                <option value="Book">Book</option>
                <option value="Furniture">Furniture </option>
            </select>

            <br />

            {conditionalRender("DVD") &&
                <div className="div-typeswitcher">
                    <label>Size (MB)</label>
                    <input
                        id="size"
                        type="text"
                        placeholder="Size (MB)"
                        onChange={handleChange}
                        className={!validateOne(formData.size, "number") ? "errorInput" : ""}
                        name="size"
                        value={formData.size}
                    />
                    <h3>Please, provide size in MB</h3>
                </div>
            }
            {conditionalRender("Book") &&
                <div className="div-typeswitcher">
                    <label>Weight (KG)</label>
                    <input
                        id="weight"
                        type="text"
                        placeholder="Weight (KG)"
                        onChange={handleChange}
                        className={!validateOne(formData.weight, "number") ? "errorInput" : ""}
                        name="weight"
                        value={formData.weight}
                    />
                    <h3>Please, provide weight in KG</h3>
                </div>
            }
            {conditionalRender("Furniture") &&
                <div className="div-typeswitcher">

                    <label>Height (CM)</label>
                    <input
                        id="height"
                        type="text"
                        placeholder="Height (CM)"
                        onChange={handleChange}
                        className={!validateOne(formData.height, "number") ? "errorInput" : ""}
                        name="height"
                        value={formData.height}
                    />

                    <br />

                    <label>Width (CM)</label>
                    <input
                        id="width"
                        type="text"
                        placeholder="Width (CM)"
                        onChange={handleChange}
                        className={!validateOne(formData.width, "number") ? "errorInput" : ""}
                        name="width"
                        value={formData.width}
                    />

                    <br />

                    <label>Length (CM)</label>
                    <input
                        id="length"
                        type="text"
                        placeholder="Length (CM)"
                        onChange={handleChange}
                        className={!validateOne(formData.length, "number") ? "errorInput" : ""}
                        name="length"
                        value={formData.length}
                    />

                    <h3>Please, provide dimensions in HxWxL format</h3>
                </div>
            }

            <br />

            {errorMessage !== "" &&
                <h3 className="errorInputMessage">{errorMessage}</h3>
            }

        </form >

    )
}

export default ProductAddBody;