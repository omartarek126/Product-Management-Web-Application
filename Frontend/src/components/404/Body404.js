import React from 'react';
import error from "../../images/404.svg"

function Body404() {

    return (
        <div>
            <img src={error} alt="404 - Not Found" className='error404Image' />
            <h1 className='error404Text'>The Page You Were Looking For Doesn't Exist.</h1>
        </div>
    )
}

export default Body404;