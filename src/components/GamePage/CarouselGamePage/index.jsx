import { useSelector } from "react-redux";
import "./styles.css";

const CarouselGamePage = () => {
  const previewImgs = useSelector((state) => state.gameOnePage.previewImgs);

  return (
    <div className="gallery-img">
      {previewImgs.map((img) => (
        <div key={img.id} className="gallery-img__item-wrapper">
          <img style={{ cursor: "pointer" }} src={img.url} alt={img.id} />
        </div>
      ))}
    </div>
  );
};

export default CarouselGamePage;
