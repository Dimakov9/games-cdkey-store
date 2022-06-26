import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Slice для HeaderBottomLine рисуем категории

const initialState = {
  gamesSubсategories: [], // будем получать после клика и рисовать на странице
  idCategories: 0, // будем получать при клике
};

// Получаем Список подкатегорий с помощью полученного ID
export const getGamesSubсategories = createAsyncThunk(
  "subcategories/GamesSubсategories",
  //передаем ID при вызове функции на странице
  async (id, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `https://api.digiseller.ru/api/categories?seller_id=948899&category_id=${id}&response=json`
    );
    // Диспатчем то что пришло в переменную и записиываем в наш массив
    dispatch(setGamesSubсategories(result.data.category));
  }
);

export const gameSubcategoriesSlice = createSlice({
  name: "subcategories",
  initialState,
  reducers: {
    setIdCategories: (state, action) => {
      state.idCategories = action.payload;
    },

    setGamesSubсategories: (state, action) => {
      state.gamesSubсategories = action.payload;
    },
  },
  extraReducers: {
    //   Вызывается когда запрос прошел успешно
    [getGamesSubсategories.fulfilled]: () =>
      console.log("getGamesSubсategories fullfiled"),
    //   Вызывается когда вызывается запрос
    [getGamesSubсategories.pending]: () =>
      console.log("getGamesSubсategories pending"),
    //   Вызывается когда запрос прошел  не успешно
    [getGamesSubсategories.rejected]: () =>
      console.log("getGamesSubсategories rejected"),
  },
});

export const { setIdCategories, setGamesSubсategories } =
  gameSubcategoriesSlice.actions;

export default gameSubcategoriesSlice.reducer;
