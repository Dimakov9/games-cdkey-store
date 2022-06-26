import "./styles.css";
import React from "react";
import { Typography } from "@mui/material";
import img from "../../img/404/404.jpg";

const ErrorPage = () => {
  return (
    <div className="error-page-wrapper">
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Мы потеряли эту страницу
      </Typography>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Мы искали все ниже и ниже, но не смогли найти то, что вы ищете.
      </Typography>

      <img className="error-page__img" src={img} />
    </div>
  );
};

export default ErrorPage;
