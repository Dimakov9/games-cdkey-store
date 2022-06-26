import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Slice для получения списка игр при поиске

const initialState = {
  gamesSearchList: [], // получаем список игр при клике на Enter
  gamesSearchTotalPages: null, // всего страниц
  gamesSearchNumberPage: 1,
  gamesSearchText: "",
  isFetchingGamesSearchList: false,
};

// Получаем Список игр с помощью того что в Inpute
export const getGamesSearchList = createAsyncThunk(
  "gamesSearchList/getGamesSearchList",
  //передаем Value при вызове функции на странице
  async ({ text, page = 1 }, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `https://plati.io/api/search.ashx?query=${text}&pagesize=15&pagenum=${page}&visibleOnly=true&response=json`
    );

    // Диспатчем то что пришло в переменную и записиываем в наш массив
    dispatch(setGamesSearchList(result.data.items));
    dispatch(setGamesSearchTotalPages(result.data.Totalpages));
  }
);

export const gamesSearchListSlice = createSlice({
  name: "gamesSearchList",
  initialState,
  reducers: {
    setGamesSearchList: (state, action) => {
      state.gamesSearchList = action.payload;
    },
    // получаем количество страниц в категории
    setGamesSearchTotalPages: (state, action) => {
      state.gamesSearchTotalPages = action.payload;
    },
    setgamesSearchNumberPage: (state, action) => {
      state.gamesSearchNumberPage = action.payload;
    },
    // Запоминаем текс запроса на поиск для пагинации
    setGamesSearchText: (state, action) => {
      state.gamesSearchText = action.payload;
    },
  },
  extraReducers: {
    //   Вызывается когда запрос прошел успешно
    [getGamesSearchList.fulfilled]: (state) => {
      state.isFetchingGamesSearchList = false;
      console.log("getGamesSearchList fullfiled");
    },
    //   Вызывается когда вызывается запрос
    [getGamesSearchList.pending]: (state) => {
      state.isFetchingGamesSearchList = true;
      console.log("getGamesSearchList pending");
    },
    //   Вызывается когда запрос прошел  не успешно
    [getGamesSearchList.rejected]: () =>
      console.log("getGamesSearchList rejected"),
  },
});

export const {
  setGamesSearchList,
  setGamesSearchTotalPages,
  setGamesSearchText,
  setgamesSearchNumberPage,
} = gamesSearchListSlice.actions;

export default gamesSearchListSlice.reducer;
