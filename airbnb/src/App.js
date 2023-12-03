import React from "react";
import Navbar from "./components/Navbar";

import Card from "./components/Card.jsx";
import Hero from "./components/Hero.jsx";
import "./App.css";
import data from './data.js'

const App = () => {
  const cards = data.map((item) => {
   return(
     <Card
      img={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.location}
      price={item.price}
      openSpots={item.openSpots}
    />
   )
  });
  return (
    <div>
      <Navbar />
      <Hero />
     <section className="cards-list">
      {cards}
     </section>
    </div>
  );
};

export default App;
