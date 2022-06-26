import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  basketGamesList: undefined, // получаем список игр в корзине
  isOpen: false,
  basketId: "",
  quantity: null, // колчество товаров в корзине
};

// Запрос на добавление в корзину
export const postShopCartAdd = createAsyncThunk(
  "Basket/postShopCartAdd",
  //передаем ID при вызове функции на странице ,  , &page=${numberPage}
  async ({ id, basketId }, { rejectWithValue, dispatch }) => {
    const result = await axios.post(
      `https://shop.digiseller.ru/xml/shop_cart_add.asp`,
      `product_id=${id}&product_cnt=1&typecurr=wmr&email=buyer_@email@mail.com&lang=ru-RU&cart_uid=${basketId}&id_po=`
    );
    dispatch(setBasketGamesList(result.data.products));
    dispatch(setBasketId(result.data.cart_uid));
    dispatch(setQuantity(result.data.cart_cnt));
  }
);

//Удаление товара из корзины
export const postShopCartDel = createAsyncThunk(
  "Basket/postShopCartDel",
  //передаем ID при вызове функции на странице ,  , &page=${numberPage}
  async ({ itemId, basketId }, { rejectWithValue, dispatch }) => {
    const result = await axios.post(
      `https://shop.digiseller.ru/xml/shop_cart_lst.asp`,
      `cart_uid=${basketId}&item_id=${itemId}&product_cnt=0`
    );

    dispatch(setBasketGamesList(result.data.products));
    dispatch(setQuantity(result.data.cart_cnt));
  }
);

export const BasketSlice = createSlice({
  name: "Basket",
  initialState,
  reducers: {
    setBasketGamesList: (state, action) => {
      state.basketGamesList = action.payload;
    },
    // открываем и закрываем картину
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    // храним ID корзины
    setBasketId: (state, action) => {
      state.basketId = action.payload;
    },

    setQuantity: (state, action) => {
      state.quantity = action.payload;
    },
  },
  extraReducers: {
    //   Вызывается когда запрос прошел успешно
    [postShopCartAdd.fulfilled]: () => console.log("postShopCartAdd fullfiled"),
    //   Вызывается когда вызывается запрос
    [postShopCartAdd.pending]: () => console.log("postShopCartAdd pending"),
    //   Вызывается когда запрос прошел  не успешно
    [postShopCartAdd.rejected]: () => console.log("postShopCartAdd rejected"),

    //   Вызывается когда запрос прошел успешно
    [postShopCartDel.fulfilled]: () => console.log("postShopCartDel fullfiled"),
    //   Вызывается когда вызывается запрос
    [postShopCartDel.pending]: () => console.log("postShopCartDel pending"),
    //   Вызывается когда запрос прошел  не успешно
    [postShopCartDel.rejected]: () => console.log("postShopCartDel rejected"),
  },
});

export const { setBasketGamesList, setIsOpen, setBasketId, setQuantity } =
  BasketSlice.actions;

export default BasketSlice.reducer;
