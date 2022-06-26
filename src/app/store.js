import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../features/basketSlice/basketSlice";
import gameCategoriesSlice from "../features/gameCategoriesSlice/gameCategoriesSlice";
import GamesListSlice from "../features/GamesListSlice/GamesListSlice";
import gamesSearchListSlice from "../features/gamesSearchListSlice/gamesSearchListSlice";
import gameSubcategoriesSlice from "../features/gameSubcategoriesSlice/gameSubcategoriesSlice";
import gameOnePageSlice from "../features/gameOnePageSlice/gameOnePageSlice";

export const store = configureStore({
  reducer: {
    gameCategories: gameCategoriesSlice, // загрузка категорий(хбоск стим сони)
    gameSubcategories: gameSubcategoriesSlice, // загрузка подкатегорий (типа экшн, гонки и тд)
    gamesList: GamesListSlice, // загрузка списка игр после клика
    gamesSearchList: gamesSearchListSlice, // Запрос и загрузка игр при поиске
    basket: basketSlice, // POST запрос и работа с корзиной
    gameOnePage: gameOnePageSlice, // Запрос и загрузка 1 игры на странице
  },
});
