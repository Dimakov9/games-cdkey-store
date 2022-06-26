import { Close } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setIsOpen,
  postShopCartDel,
} from "../../../features/basketSlice/basketSlice";
import "./styles.css";

function BasketItem({ name, price, cnt_item, item_id, id }) {
  const dispatch = useDispatch();
  const basketId = useSelector((state) => state.basket.basketId);
  const imgId = `//graph.digiseller.ru/img.ashx?id_d=${id}&w=200&h=150&crop=true`;
  const navigate = useNavigate();

  return (
    <ListItem>
      <ListItemButton>
        <ListItemAvatar
          onClick={() => {
            navigate(`/game/${id}`, { replace: true });
            dispatch(setIsOpen(false));
          }}
        >
          <Avatar>
            <img className="basket-item__img" src={imgId} alt={item_id} />
          </Avatar>
        </ListItemAvatar>

        <ListItemText
          onClick={() => {
            navigate(`/game/${id}`, { replace: true });
            dispatch(setIsOpen(false));
          }}
          primary={name}
          secondary={`Количество ${cnt_item}`}
        />

        <Typography variant="body2">₽</Typography>
        <Typography variant="body2">
          {"   "} {price}
        </Typography>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() =>
            dispatch(postShopCartDel({ itemId: item_id, basketId: basketId }))
          }
        >
          <Close />
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
}

export default BasketItem;
