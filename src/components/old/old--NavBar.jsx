import React from "react"
import airbnb from "../images/airbnb.jpeg"

export default function OldNavbar() {
    return (
        <nav>
            <img src={airbnb} className="nav--logo" />
        </nav>
    )
}