import "./styles.css";
import React from "react";
import { useSelector } from "react-redux";
import GamesSearchPagination from "../GamesSearchPagination";
import GameCard from "../../GameCard";
import { CircularProgress } from "@mui/material";

const SearchPage = () => {
  const gamesSearchList = useSelector(
    (state) => state.gamesSearchList.gamesSearchList
  );
  const isFetchingGamesSearchList = useSelector(
    (state) => state.gamesSearchList.isFetchingGamesSearchList
  );

  return (
    <>
      <div className="wrapper-card-search-list">
        {isFetchingGamesSearchList ? (
          <CircularProgress />
        ) : (
          <>
            <div className="game-content">
              <div className="card-list">
                {gamesSearchList?.map((item) => {
                  return <GameCard {...item} key={item.id} />;
                })}
              </div>
            </div>
            <GamesSearchPagination />
          </>
        )}
      </div>
    </>
  );
};

export default SearchPage;
