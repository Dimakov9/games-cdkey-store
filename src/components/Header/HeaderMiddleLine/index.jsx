import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getGamesSearchList,
  setGamesSearchText,
  setgamesSearchNumberPage,
} from "../../../features/gamesSearchListSlice/gamesSearchListSlice";
import { useDispatch } from "react-redux";
import "./styles.css";

function HeaderMiddleLine() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  return (
    <div className="search">
      <div className="search__input">
        <TextField
          id="outlined-basic"
          label="Поиск"
          variant="outlined"
          fullWidth
          onBlur={(event) => {
            event.target.value = "";
          }}
          onKeyDown={(event) => {
            if (event.keyCode === 13) {
              dispatch(getGamesSearchList({ text: searchText, num: 1 })); // делаем запрос
              dispatch(setGamesSearchText(searchText)); // записываем текст поиска в переменную
              dispatch(setgamesSearchNumberPage(1)); // обнуляем пагинацию
              navigate("/search");
            }
          }}
          onChange={(event) => {
            // Ловим что ввел пользователь
            setSearchText(event.target.value);
          }}
        ></TextField>
      </div>
    </div>
  );
}

export default HeaderMiddleLine;
