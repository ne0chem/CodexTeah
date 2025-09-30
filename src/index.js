import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ModalProvider } from "./component/Modal/Modal";

/* Стили */
import "./index.css";

/* Компоненты */
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Prava from "./component/prava/Prava";
import CursorTrail from "./component/CursorTrail/CursorTrail";
import SocSeti from "./component/SocSeti/SocSeti";
import ScrollToTop from "./component/ScrollToTo";

/* Страницы */
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service"; // Ваша страница услуг
import Product from "./pages/Product/Product"; // Ваша страница продуктов
import About from "./pages/About/About";

import Contacts from "./pages/Contacts/Contacts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <Router>
      <ScrollToTop />
      <CursorTrail />
      <SocSeti />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Navigate to="/product" replace />} />
        <Route path="/product" element={<Product />} key="product" />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
      <Prava />
    </Router>
  </ModalProvider>
);
