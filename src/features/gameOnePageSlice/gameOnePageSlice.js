import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Slice для HeaderBottomLine рисуем категории

const initialState = {
  gamesOnePage: [], // инфа о странице с фото и тд
  previewImgs: [], // фото для страницы
  isFetchingOneGame: false,
  gamesOnePageSellerName: "", //имя продавца
  gamesOnePagePrices: "",
  gamesOnePageStatisticsSales: "",
  gamesOnePageImg: "",
};

// Получаем Список подкатегорий с помощью полученного ID
export const getGameOnePage = createAsyncThunk(
  "gameonepage/getGameOnePage",
  //передаем ID при вызове функции на странице
  async (id, { rejectWithValue, dispatch }) => {
    const result = await axios.get(
      `https://api.digiseller.ru/api/products/${id}/data?format=json`
    );
    // Диспатчем то что пришло в переменную и записиываем в наш массив
    dispatch(setGamesOnePage(result.data.product));
    dispatch(setPreviewImgs(result.data.product.preview_imgs));
    dispatch(setGamesOnePageImg(result.data.product.preview_imgs[0].url));
    dispatch(setGamesOnePageSellerName(result.data.product.seller.name));
    dispatch(setGamesOnePagePrices(result.data.product.prices.initial.RUB));
    dispatch(
      setGamesOnePageStatisticsSales(result.data.product.statistics.sales)
    );
  }
);

export const gameOnePageSlice = createSlice({
  name: "gameonepage",
  initialState,
  reducers: {
    setPreviewImgs: (state, action) => {
      state.previewImgs = action.payload;
    },

    setGamesOnePageImg: (state, action) => {
      state.gamesOnePageImg = action.payload;
    },

    setGamesOnePage: (state, action) => {
      state.gamesOnePage = action.payload;
    },

    setIsFetching: (state, action) => {
      state.isFetchingOneGame = action.payload;
    },
    setGamesOnePageSellerName: (state, action) => {
      state.gamesOnePageSellerName = action.payload;
    },
    setGamesOnePagePrices: (state, action) => {
      state.gamesOnePagePrices = action.payload;
    },
    setGamesOnePageStatisticsSales: (state, action) => {
      state.gamesOnePageStatisticsSales = action.payload;
    },
  },
  extraReducers: {
    //   Вызывается когда запрос прошел успешно
    [getGameOnePage.fulfilled]: (state, action) => {
      console.log("getGameOnePage fullfiled");
      state.isFetchingOneGame = false;
    },
    //   Вызывается когда вызывается запрос
    [getGameOnePage.pending]: (state, action) => {
      console.log("getGameOnePage pending");
      state.isFetchingOneGame = true;
    },
    //   Вызывается когда запрос прошел  не успешно
    [getGameOnePage.rejected]: () => console.log("getGameOnePage rejected"),
  },
});

export const {
  setPreviewImgs,
  setGamesOnePage,
  setIsFetching,
  setGamesOnePageSellerName,
  setGamesOnePagePrices,
  setGamesOnePageStatisticsSales,
  setGamesOnePageImg,
} = gameOnePageSlice.actions;

export default gameOnePageSlice.reducer;
