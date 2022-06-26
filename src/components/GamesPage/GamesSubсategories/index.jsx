import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getGamesList } from "../../../features/GamesListSlice/GamesListSlice";
import { setIdCategories } from "../../../features/gameSubcategoriesSlice/gameSubcategoriesSlice";
import "./styles.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

//Рисуем подкатегории слева(Экшн, гонки и тд)
const GameSubcategories = () => {
  const dispatch = useDispatch();
  const gamesSubсategories = useSelector(
    (state) => state.gameSubcategories.gamesSubсategories
  );
  const navigate = useNavigate();

  return (
    <div className="subcategories">
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {gamesSubсategories?.map((item) => (
            <Button
              key={item.id}
              onClick={() => {
                dispatch(getGamesList({ id: item.id }));
                dispatch(setIdCategories(item.id));
                navigate(`/subcategory/${item.id}`, { replace: true });
              }}
            >
              {item.name}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default GameSubcategories;
