import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Slice для HeaderBottomLine рисуем категории

const initialState = {
  gameCategories: [],
};

// Асинхронный запрос для получения Основных категирий  для сайт (XBOB PS STEAM и тд)
// так же там лежит в sub переменной подкатегории(названия (Подписки, РПГ и тд) и их ID )
export const getGameCategories = createAsyncThunk(
  "categories/GameCategories",
  async (_, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      "https://api.digiseller.ru/api/categories?seller_id=948899&response=json"
    );
    // Диспатчем то что пришло в переменную и записиываем в наш массив
    dispatch(setGameCategories(res.data.category));
  }
);

export const gameCategoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setGameCategories: (state, action) => {
      state.gameCategories = action.payload;
    },
  },
  extraReducers: {
    //   Вызывается когда запрос прошел успешно
    [getGameCategories.fulfilled]: () => console.log("getGamesXbox fullfiled"),
    //   Вызывается когда вызывается запрос
    [getGameCategories.pending]: () => console.log("getGamesXbox pending"),
    //   Вызывается когда запрос прошел  не успешно
    [getGameCategories.rejected]: () => console.log("getGamesXbox rejected"),
  },
});

export const { setGameCategories } = gameCategoriesSlice.actions;

export default gameCategoriesSlice.reducer;
