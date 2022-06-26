import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../features/basketSlice/basketSlice";
import BasketItem from "../BasketItem";
import "./styles.css";

function Basket() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.basket.isOpen);
  const basketGamesList = useSelector((state) => state.basket.basketGamesList);
  const basketId = useSelector((state) => state.basket.basketId);
  return (
    <div>
      <ShoppingCartIcon
        style={{ cursor: "pointer" }}
        onClick={() => {
          dispatch(setIsOpen(true));
        }}
      />

      <Drawer
        anchor="right"
        open={isOpen}
        onClose={() => dispatch(setIsOpen(false))}
      >
        <Box color="light">
          <List sx={{ width: 400 }}>
            <ListItem>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>

              <ListItemText primary="Корзина" />
            </ListItem>
            <Divider />
            {!basketGamesList ? (
              <ListItem>Ваша корзина пуста... </ListItem>
            ) : (
              basketGamesList?.map((item) => (
                <BasketItem key={item.id} {...item} />
              ))
            )}
          </List>
          <Divider />
        </Box>

        {!basketGamesList ? (
          ""
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            sx={{ pr: 4, mt: 2 }}
          >
            <Typography variant="body1">
              Итого:{" "}
              {basketGamesList?.reduce((acc, item) => {
                const price = parseFloat(item.price.replace(",", "."));

                return acc + price;
              }, 0)}{" "}
              ₽
            </Typography>
            <form
              id="digiselller_form"
              action="https://oplata.info/asp2/pay.asp"
              method="post"
            >
              <base target="_blank" />
              <input type="hidden" name="id_d" value="" />
              <input type="hidden" name="cart_uid" value={basketId} />
              <input type="hidden" name="typecurr" value="WMZ" />
              <input type="hidden" name="email" value="test@test.com" />
              <input type="hidden" name="lang" value="ru-RU" />
              <input
                type="hidden"
                name="failpage"
                value={window.location.href}
              />
              <input type="hidden" name="agent" value="1" />
              <input type="hidden" name="promocode" value="" />
              <input type="hidden" name="unit_cnt" value="" />
              <input type="hidden" name="id_po" value="" />
              <div className="btn-pay-wrapper">
                <button className="btn-pay">Оплатить</button>
              </div>
            </form>
          </Box>
        )}
      </Drawer>
    </div>
  );
}

export default Basket;
