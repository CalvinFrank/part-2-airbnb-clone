import React from "react";
// import Card from "./components/old/old--Card";
// import Hero from "./components/old/old--Hero";
// import Navbar from "./components/old/old--NavBar";
// import data from "./data";
// import katie from "./images/katie.jpeg";
// import statCards from "./data"
import NavBar from "./components/NavBar";

function Root() {
  // console.log(statCards[0])
  // const cards = statCards.map(item => {
  //   return (
  //       <Card 
  //           key={item.id}
  //           item={item}
  //       />
  //   )
  // })
  return (
    <div>
      <NavBar/>
    </div>
  )
}

export default Root;