import "./styles.css";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import mortalKombat from "../../../img/carousel/mortal_kombat_11_ultimate.jpg";
import cyberpunk2077 from "../../../img/carousel/cyberpunk2077.jpg";
import vanguard from "../../../img/carousel/callofduty_vanguard.jpg";
import forza5 from "../../../img/carousel/forza.jpg";
import eldenRing from "../../../img/carousel/eldenRing.jpg";
import valhalla from "../../../img/carousel/valhalla.png";

function CarouselHome() {
  const tooglesGroupId = "Toggles";
  const valuesGroupId = "Values";
  const mainGroupId = "Main";

  const carouserlItem = [
    { id: 3109153, img: mortalKombat, name: "Mortal kombat 11" },
    { id: 3027647, img: cyberpunk2077, name: "Cyberpunk 2077" },
    { id: 3252360, img: vanguard, name: "Call Of Duty VANGUARD" },
    { id: 3230130, img: forza5, name: "Forza Horizon 5" },
    { id: 3296508, img: eldenRing, name: "Elden Ring" },
    { id: 3315562, img: valhalla, name: "Assassin's Creed Valhalla" },
  ];
  const getConfigurableProps = () => ({
    // showArrows: ("showArrows", false, tooglesGroupId),
    // showStatus: ("showStatus", false, tooglesGroupId),
    showIndicators: ("showIndicators", true, tooglesGroupId),
    infiniteLoop: ("infiniteLoop", true, tooglesGroupId),
    showThumbs: ("showThumbs", true, tooglesGroupId),
    // useKeyboardArrows: ("useKeyboardArrows", true, tooglesGroupId),
    autoPlay: ("autoPlay", true, tooglesGroupId),
    // stopOnHover: ("stopOnHover", false, tooglesGroupId),
    // swipeable: ("swipeable", false, tooglesGroupId),
    // dynamicHeight: ("dynamicHeight", false, tooglesGroupId),
    // emulateTouch: ("emulateTouch", false, tooglesGroupId),
    // autoFocus: ("autoFocus", false, tooglesGroupId),
    // thumbWidth: ("thumbWidth", 100, {}, valuesGroupId),
    // selectedItem: ("selectedItem", 0, {}, valuesGroupId),
    // interval: ("interval", 2000, {}, valuesGroupId),
    // transitionTime: ("transitionTime", 500, {}, valuesGroupId),
    // swipeScrollTolerance: ("swipeScrollTolerance", 5, {}, valuesGroupId),
    // ariaLabel: ("ariaLabel", undefined),
  });

  const navigate = useNavigate();

  return (
    <Carousel {...getConfigurableProps()}>
      {carouserlItem.map((item) => (
        <div
          key={item.id}
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/game/${item.id}`)}
        >
          <img src={item.img} />
          <p className="legend">{item.name}</p>
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselHome;
