import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderTopLine from "../Header/HeaderTopLine";
import HeaderMiddleLine from "../Header/HeaderMiddleLine";
import GamePage from "../GamePage/GamePage";
import HeaderBottomLine from "../Header/HeaderBottomLine";
import GamesPage from "../GamesPage/GamesPage";
import { Container } from "@mui/system";
import HomePage from "../HomePage/HomePage";
import SearchPage from "../SearchPage/GamesSearchList";
import FaqPage from "../FaqPage";
import Footer from "../Footer/Footer";
import ErrorPage from "../ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Container>
        <nav style={{ marginTop: 10 }}>
          <HeaderTopLine />
          <HeaderMiddleLine />
          <HeaderBottomLine />
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subcategory/:id" element={<GamesPage />} />
          <Route path="/game/:id" element={<GamePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Container>
    </BrowserRouter>
  );
};

export default Router;
