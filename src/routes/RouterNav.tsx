import { Route, Routes } from "react-router-dom";
// import Home from "../pages/Home";
// import SecondPage from "../pages/SecondPage";
import { About, CardById, Catalog, Contacts, Delivery, Error, Exchange, Home, Order, SecondPage } from "../pages";

//Routes -строит навигацию  , в компоненте указываем  по какому запросу открывать  нужную страницу

const RouterNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<CardById />} />
      <Route path="/order" element={<Order />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/about" element={<About />} />
      <Route path="/exchange" element={<Exchange />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/second" element={<SecondPage />} />
      {/* 
      <Route path="/reactquery" element={<ReactQueryCatalog />} />
      <Route path="/thanks" element={<ThanksFroOrder />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default RouterNav;
