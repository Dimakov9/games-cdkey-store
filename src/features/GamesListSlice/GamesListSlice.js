import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Slice для получаем список игр при клике на категории и подкатегории

const initialState = {
  gamesList: [], // получаем список игр при клике на категории и подкатегории
  totalPages: 1, // всего страниц
  numberPage: 1, //текущая страница
  bestGamesList: [],
  isFetchingGamesList: false,
};

// Получаем Список игр с помощью полученного ID
export const getGamesList = createAsyncThunk(
  "gameslist/getgameslist",
  //передаем ID при вызове функции на странице ,  , &page=${numberPage}
  async ({ id, page = 1 }, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `https://api.digiseller.ru/api/shop/products?seller_id=948899&category_id=${id}&rows=12&page=${page}&response=json`
    );
    // Диспатчем то что пришло в переменную и записиываем в наш массив
    dispatch(setGamesList(result.data.product));
    dispatch(setTotalPages(result.data.totalPages));
  }
);

// Получаем Список игр для главной страницы
export const getBestGames = createAsyncThunk(
  "gameslist/getBestGames",
  //передаем ID при вызове функции на странице ,  , &page=${numberPage}
  async (_, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `https://api.digiseller.ru/api/shop/products?seller_id=948899&category_id=0&rows=12&page=1&response=json`
    );
    // Диспатчем то что пришло в переменную и записиываем в наш массив
    dispatch(setBestGamesList(result.data.product));
    dispatch(setTotalPages(result.data.totalPages));
  }
);

export const GamesListSlice = createSlice({
  name: "gameslist",
  initialState,
  reducers: {
    setGamesList: (state, action) => {
      state.gamesList = action.payload;
    },
    // получаем количество страниц в категории
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },

    setNumberPage: (state, action) => {
      state.numberPage = action.payload;
    },

    setBestGamesList: (state, action) => {
      state.bestGamesList = action.payload;
    },

    setIsFetchingGamesList: (state, action) => {
      state.isFetchingGamesList = action.payload;
    },
  },
  extraReducers: {
    //   Вызывается когда запрос прошел успешно
    [getGamesList.fulfilled]: (state) => {
      console.log("getGamesList fullfiled");
      state.isFetchingGamesList = false;
    },
    //   Вызывается когда вызывается запрос
    [getGamesList.pending]: (state) => {
      console.log("getGamesList pending");
      state.isFetchingGamesList = true;
    },
    //   Вызывается когда запрос прошел  не успешно
    [getGamesList.rejected]: () => console.log("getGamesList rejected"),

    //   Вызывается когда запрос прошел успешно
    [getBestGames.fulfilled]: () => console.log("getBestGames fullfiled"),
    //   Вызывается когда вызывается запрос
    [getBestGames.pending]: () => console.log("getBestGames pending"),
    //   Вызывается когда запрос прошел  не успешно
    [getBestGames.rejected]: () => console.log("getBestGames rejected"),
  },
});

export const { setGamesList, setTotalPages, setNumberPage, setBestGamesList } =
  GamesListSlice.actions;

export default GamesListSlice.reducer;
