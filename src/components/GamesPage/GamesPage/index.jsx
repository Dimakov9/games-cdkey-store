import "./styles.css";
import React from "react";
import GameSubcategories from "../GamesSubсategories";
import GamesList from "../GamesList";

const GamesPage = () => {
  return (
    <div className="game-content">
      <GameSubcategories />
      <GamesList />
    </div>
  );
};

export default GamesPage;
