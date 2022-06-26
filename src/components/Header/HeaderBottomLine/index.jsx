import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { getGameCategories } from "../../../features/gameCategoriesSlice/gameCategoriesSlice";
import {
  setIdCategories,
  getGamesSubсategories,
} from "../../../features/gameSubcategoriesSlice/gameSubcategoriesSlice";
import { getGamesList } from "../../../features/GamesListSlice/GamesListSlice";
import { Button } from "@mui/material";

//Загрузка категорий из API
function HeaderBottomLine() {
  const dispatch = useDispatch();
  const gameCategories = useSelector(
    (state) => state.gameCategories.gameCategories
  );

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getGameCategories());
  }, []);

  return (
    <div className="product-categories">
      {gameCategories.map((item) => {
        return (
          <Button
            variant="outlined"
            key={item.id}
            onClick={() => {
              // 1 передаем ID для контроля изменений
              // 2 передаем ID для отрисовки субкатегорий(экшен, гонки)
              // 3 передаем ID для отрисовки списка игры из нужной категории
              dispatch(setIdCategories(item.id));
              dispatch(getGamesSubсategories(item.id));
              dispatch(getGamesList({ id: item.id, page: 1 }));
              navigate(`/subcategory/${item.id}`);
            }}
          >
            {item.name}
          </Button>
        );
      })}
    </div>
  );
}

export default HeaderBottomLine;
