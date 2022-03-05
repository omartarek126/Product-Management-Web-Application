import React from "react"
import Header404 from "./Header404"
import Body404 from "./Body404"

function Page404() {

    React.useEffect(() => {
        document.title = "Error 404"
    }, []);

    return (
        <div>
            <Header404 />
            <Body404 />
        </div>
    )
}

export default Page404