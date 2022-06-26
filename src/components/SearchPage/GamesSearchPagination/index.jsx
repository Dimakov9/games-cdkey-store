import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getGamesSearchList,
  setgamesSearchNumberPage,
} from "../../../features/gamesSearchListSlice/gamesSearchListSlice";
import { Pagination } from "@mui/material";

const GamesSearchPagination = () => {
  const dispatch = useDispatch();
  const gamesSearchText = useSelector(
    (state) => state.gamesSearchList.gamesSearchText
  );
  const totalPages = useSelector(
    (state) => state.gamesSearchList.gamesSearchTotalPages
  ); //получаем количество страниц и результата поиска
  const numberPage = useSelector(
    (state) => state.gamesSearchList.gamesSearchNumberPage
  );

  return (
    <div>
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={numberPage}
          onChange={(_, num) => {
            dispatch(setgamesSearchNumberPage(num));
            dispatch(getGamesSearchList({ text: gamesSearchText, page: num }));
          }}
        />
      )}
    </div>
  );
};

export default GamesSearchPagination;
