import React from "react";
import world from "../images/world.jpeg"

function NavBar() {
    return (
        <nav>
            <img src={world}/>
            <p>my travel journal</p>
        </nav>
    )
}

export default NavBar;