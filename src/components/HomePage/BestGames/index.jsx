import React from "react";
import { useSelector } from "react-redux";
import GamesPagination from "../../GamesPage/GamesPagination";
import GameCard from "../../GameCard";
import "./styles.css";

const BestGames = () => {
  const gamesList = useSelector((state) => state.gamesList.bestGamesList);

  return (
    <div className="wrapper-card-best-games">
      <div className="card-list-best-games">
        {gamesList?.map((item) => {
          return <GameCard key={item.id} {...item} />;
        })}
      </div>
      <GamesPagination />
    </div>
  );
};

export default BestGames;
