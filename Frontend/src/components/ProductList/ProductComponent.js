import React from 'react';

function ProductComponent(props) {
    return (
        <div className="product">
            <input className="delete-checkbox" type="checkbox" onClick={props.toggle} />
            <h3>{props.sku}</h3>
            <h3>{props.name}</h3>
            <h3>{props.price}$</h3>
            <h3>{props.special}</h3>
        </div>
    )
}

export default ProductComponent;