import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import { Button, CircularProgress, Paper, Typography } from "@mui/material";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getGameOnePage } from "../../../features/gameOnePageSlice/gameOnePageSlice";
import { postShopCartAdd } from "../../../features/basketSlice/basketSlice";
import CarouselGamePage from "../CarouselGamePage";

const GamePage = () => {
  const { id } = useParams(); //достаем ID из URL адреса в браузере
  const basketId = useSelector((state) => state.basket.basketId);
  const gameOnePage = useSelector((state) => state.gameOnePage.gamesOnePage);
  // const previewImgs = useSelector((state) => state.gameOnePage.previewImgs);
  const gamesOnePageImg = useSelector(
    (state) => state.gameOnePage.gamesOnePageImg
  );
  const isFetching = useSelector(
    (state) => state.gameOnePage.isFetchingOneGame
  );
  const seller = useSelector(
    (state) => state.gameOnePage.gamesOnePageSellerName
  );

  const statisticsSales = useSelector(
    (state) => state.gameOnePage.gamesOnePageStatisticsSales
  );
  const price = useSelector((state) => state.gameOnePage.gamesOnePagePrices);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(getGameOnePage(id));
  }, []);

  useEffect(() => {
    dispatch(getGameOnePage(id));
  }, [id]);

  function createIfno() {
    return { __html: gameOnePage.info };
  }

  function createAddIfno() {
    return { __html: gameOnePage.add_info };
  }

  return (
    <div className="one-game-wrapper">
      {isFetching ? (
        <div className="preloader">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <Button onClick={goBack}>Назад</Button>

          <Typography variant="h4">{gameOnePage?.name}</Typography>

          <div className="summary-wrapper">
            <Paper sx={{ mt: 2, p: 2, maxWidth: 700 }}>
              <img className="preview-imgs" src={gamesOnePageImg} />
            </Paper>

            <Paper sx={{ mt: 2, p: 2 }}>
              <Typography variant="subtitle2">Продавец: {seller}</Typography>
              <Typography variant="subtitle2">
                Количество продаж: {statisticsSales}
              </Typography>
              <div className="item-price">
                <Typography variant="h6">Цена:</Typography>
                <Typography variant="h6" color={"#fc5a5a"}>
                  {price} ₽
                </Typography>
              </div>
            </Paper>

            <Paper sx={{ mt: 2, p: 2 }}>
              <form
                id="digiselller_form"
                action="https://oplata.info/asp2/pay.asp"
                method="post"
              >
                <base target="_blank" />
                <input type="hidden" name="id_d" value={id} />
                <input type="hidden" name="cart_uid" value={basketId} />
                <input type="hidden" name="typecurr" value="WMZ" />
                <input type="hidden" name="email" value=" " />
                <input type="hidden" name="lang" value="ru-RU" />
                <input
                  type="hidden"
                  name="failpage"
                  value={`http://localhost:3000/game/${id}`}
                />
                <input type="hidden" name="agent" value="1" />
                <input type="hidden" name="promocode" value="" />
                <input type="hidden" name="unit_cnt" value="" />
                <input type="hidden" name="id_po" value="" />
                <div>
                  <button className="btn-pay">Оплатить</button>
                </div>
              </form>
              <Button
                onClick={() =>
                  dispatch(postShopCartAdd({ id: id, basketId: basketId }))
                }
              >
                В корзину
              </Button>
            </Paper>
          </div>

          <Typography sx={{ mt: 2 }} variant="h5">
            Описание товара
          </Typography>
          <Paper
            sx={{ p: 2 }}
            variant="outlined"
            dangerouslySetInnerHTML={createIfno()}
          />

          <Paper sx={{ mt: 2, p: 2 }}>
            <CarouselGamePage />
          </Paper>
        </div>
      )}
    </div>
  );
};

export default GamePage;
