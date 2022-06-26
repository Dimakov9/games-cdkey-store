import { useEffect } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.css";
import GamesPagination from "../GamesPagination";
import GameCard from "../../GameCard";
import { CircularProgress } from "@mui/material";
import { setNumberPage } from "../../../features/GamesListSlice/GamesListSlice";

const GamesList = () => {
  const dispatch = useDispatch();

  const gamesList = useSelector((state) => state.gamesList.gamesList);
  const isFetchingGamesList = useSelector(
    (state) => state.gamesList.isFetchingGamesList
  );

  const idCategories = useSelector(
    (state) => state.gameSubcategories.idCategories
  );

  useEffect(() => {
    dispatch(setNumberPage(1)); //ставим первую страницу при смене категории
  }, [idCategories]);

  return (
    <>
      <div className="wrapper-card-list">
        {isFetchingGamesList ? (
          <div className="preloader-games-list">
            <CircularProgress />
          </div>
        ) : (
          <>
            <div className="card-list">
              {gamesList?.map((item) => {
                return <GameCard key={item.id} {...item} />;
              })}
            </div>
            <GamesPagination />
          </>
        )}
      </div>
    </>
  );
};

export default GamesList;
