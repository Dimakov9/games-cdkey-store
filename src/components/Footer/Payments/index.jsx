import "./styles.css";
import React from "react";
import { Typography } from "@mui/material";
import img from "../../../img/footer/payments.png";

const Payments = () => {
  return (
    <div className="payments-wrapper">
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        ОПЛАЧИВАЙТЕ ТОВАРЫ УДОБНЫМ ДЛЯ ВАС СПОСОБОМ
      </Typography>
      <img className="payments-img" src={img} alt="payments" />
    </div>
  );
};

export default Payments;
