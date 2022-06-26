import "./styles.css";
import React from "react";
import Payments from "../Payments";
import Copyright from "../Copyright";

const Footer = () => {
  return (
    <div className="footer">
      <Payments />
      <Copyright />
    </div>
  );
};

export default Footer;
