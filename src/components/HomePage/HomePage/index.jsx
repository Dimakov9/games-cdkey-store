import "./styles.css";
import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import CarouselHome from "../Carousel";
import BestGames from "../BestGames";
import { getBestGames } from "../../../features/GamesListSlice/GamesListSlice";
import { Typography } from "@mui/material";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBestGames());
  }, []);

  return (
    <div className="game-content home-page">
      <CarouselHome />
      <Typography variant="h5">Лучшие игры</Typography>

      <BestGames />
    </div>
  );
};

export default HomePage;
