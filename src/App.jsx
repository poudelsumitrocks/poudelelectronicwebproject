import React from "react";
import Landing from "./Pages/LandingPage/Landing";
import { BrowserRouter, Routes, Route } from "react-router";
import SignUp from "./Pages/SignUpPages/SignUp";
import Login from "./Pages/SignUpPages/Login";
import Forgotpass from "./Pages/SignUpPages/Forgotpass";
import Home from "./Pages/HomePage/Home";
import { ThemeContext } from "./Component/useContext/Toggle";
import AboutUs from "./Component/Footer/AboutUs";
import Contact from "./Component/Footer/Contact";
import BulbDetail from "./Pages/ProductsPage/BulbDetails";
import FanDetails from "./Pages/ProductsPage/FanDetails";
import LightDetails from "./Pages/ProductsPage/LightDetails";

import { ToastContainer } from "react-toastify";
import Toggle from "./Component/useContext/Toggle";
import ProductDetails from "./Pages/ProductsPage/ProductDetails";
import BuyNow from "./Pages/BuyNow/BuyNow";
import SearchResult from "./Pages/SearchPage/SearchResult";
import Cart from "./Component/Cart/Cart";
import HolderDetails from "./Pages/ProductsPage/HolderDetails";
import SwitchDetails from "./Pages/ProductsPage/SwitchDetails";
import WiresDetails from "./Pages/ProductsPage/WiresDetails";
import BoxesDetails from "./Pages/ProductsPage/BoxesDetails";
import ProductNav from "./Component/Header/ProductNav";
import FeaturedProducts from "./Pages/HomePage/FeaturedProducts";
import ProductPage from "./Pages/ProductsPage/ProductPage";
import McbDetails from "./Pages/ProductsPage/McbDetails";

export default function App() {
  return (
    <Toggle>
      <BrowserRouter>
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={true}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productpage" element={<ProductPage />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="bulbdetails" element={<BulbDetail />} />
            <Route path="fandetails" element={<FanDetails />} />
            <Route path="lightdetails" element={<LightDetails />} />
            <Route path="holderdetails" element={<HolderDetails />} />
            <Route path="switchdetails" element={<SwitchDetails />} />
            <Route path="wiresdetails" element={<WiresDetails />} />
            <Route path="boxesdetails" element={<BoxesDetails />} />
            <Route path="mcbdetails" element={<McbDetails />} />
          </Route>
          <Route path="/productdetails/:name" element={<ProductDetails />} />
          <Route path="/landing" element={<Landing />}>
            <Route index element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="forgotpass" element={<Forgotpass />} />
          </Route>
          <Route path="/buynow" element={<BuyNow />} />
          <Route path="/search" element={<SearchResult />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Toggle>
  );
}
