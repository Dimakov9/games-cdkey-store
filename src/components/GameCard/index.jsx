import "./styles.css";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postShopCartAdd } from "../../features/basketSlice/basketSlice";
import { getGameOnePage } from "../../features/gameOnePageSlice/gameOnePageSlice";

function GameCard({ id, name, price_rub, price_rur }) {
  const dispatch = useDispatch();
  const basketId = useSelector((state) => state.basket.basketId);
  const imgId = `//graph.digiseller.ru/img.ashx?id_d=${id}&w=200&h=150&crop=true`;
  const navigate = useNavigate();

  return (
    <div className="product-item">
      <div className="product-list">
        <div>
          <img
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/game/${id}`, { replace: true });
              dispatch(getGameOnePage(id));
            }}
            src={imgId}
            alt={id}
          />
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate(`/game/${id}`, { replace: true });
              dispatch(getGameOnePage(id));
            }}
          >
            <Typography variant="body2" sx={{ height: 61 }}>
              {name}
            </Typography>

            <span className="price">
              {" "}
              ₽ {price_rur} {price_rub}
            </span>
          </div>
        </div>
        <div
          className="button"
          onClick={() => {
            dispatch(postShopCartAdd({ id: id, basketId: basketId }));
          }}
        >
          В корзину
        </div>
      </div>
    </div>
  );
}

export default GameCard;
