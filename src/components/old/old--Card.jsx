import React from "react";
import star from "../images/star.jpeg";

export default function Card({item}) {
    // console.log(props.rating)
    let isOpen;
    if(item.openSpots) {
        isOpen = "ONLINE"
    } else {
        isOpen ="SOLD OUT"
    }
    console.log(item)

    return (
        <div className="card">
            <div className="image">
                <img src={item.coverImg} className="card--image" />
                <h6 className="isOpen" id="stop">{isOpen}</h6> 
            </div>
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{item.stats.rating}</span>
                <span className="gray">({item.stats.reviewCount}) • </span>
                <span className="gray">{item.country}</span>
            </div>
            <p className="card--title">{item.title}</p>
            <p className="card--price"><span className="bold">From ${item.price}</span> / person</p>
        </div>
    )
}


