import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGamesList,
  setNumberPage,
} from "../../../features/GamesListSlice/GamesListSlice";
import { Pagination } from "@mui/material";

const GamesPagination = () => {
  const dispatch = useDispatch();
  const idCategories = useSelector(
    (state) => state.gameSubcategories.idCategories
  );
  const totalPages = useSelector((state) => state.gamesList.totalPages); //получаем количество страниц в подкатегории
  const numberPage = useSelector((state) => state.gamesList.numberPage); //получаем текущую страницу

  return (
    <div>
      {totalPages > 1 && (
        <Pagination
          count={Number(totalPages)}
          page={numberPage}
          onChange={(_, num) => {
            dispatch(setNumberPage(num));
            dispatch(getGamesList({ id: idCategories, page: num }));
          }}
        />
      )}
    </div>
  );
};

export default GamesPagination;
