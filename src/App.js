import React, { createContext, useState } from "react";
import $ from "jquery";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Cart from "./components/pages/cart";
import Login from "./components/pages/login";
import Vegetables from "./components/pages/vegetables";
import Personalcare from "./components/pages/personal_care";
import Packagedfoods from "./components/pages/packaged_foods";
import Cleaningproducts from "./components/pages/cleaning_products";
import Fruits from "./components/pages/fruits";
import Staples from "./components/pages/staples";
import Page404 from "./components/pages/page404";
import Signup from "./components/pages/signup";
import DashBoard from "./components/pages/dashboard";
import ContactUs from "./components/pages/contactus";
import Addresses from "./components/pages/addresses";
import Loginprompt from "./components/pages/loginprompt";
import ComingSoon from "./components/pages/comingsoon";
import Profile from "./components/pages/profile";
import EditProfile from "./components/pages/editprofile";
import UpdateCart from "./components/firestore.operations.files/updatecart.js";
import Checkout from "./components/pages/checkout";
import Orders from "./components/pages/orders";
import Search from "./components/pages/search";
import Order from "./components/pages/order";
import { getAuth } from "firebase/auth";
import { app } from "./firebase-config.js";
import PDF from "./components/elements/pdf.jsx";
export const MyContext = createContext();

const App = () => {
  const auth = getAuth(app);
  const [cart, setcart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const uid = localStorage.getItem("uid");

  const updatecart = async (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name
    );
    let updatedCart = [...cart];
    if (existingItemIndex >= 0) {
      updatedCart = [...cart];
      updatedCart[existingItemIndex].frequency++;
    } else {
      updatedCart = [...cart];
      var newItem = { ...item, frequency: 1 };
      updatedCart = [newItem, ...cart];
    }
    setcart(updatedCart);
    await UpdateCart(uid, updatedCart);
  };

  const updatecartdec = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].frequency > 1) {
        updatedCart[existingItemIndex].frequency--;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setcart(updatedCart);
      UpdateCart(uid, updatedCart);
    }
  };

  const storedToken = localStorage.getItem("token");
  const hasAccessToken =
    !!storedToken &&
    storedToken !== "[object Promise]" &&
    localStorage.getItem("authenticated") === "true";

  return (
    <div>
      <MyContext.Provider
        value={{
          cart,
          setcart,
          updatecart,
          updatecartdec,
          discount,
          setDiscount,
          auth,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/vegetables" element={<Vegetables />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/personalcare" element={<Personalcare />} />
            <Route path="/packagedfoods" element={<Packagedfoods />} />
            <Route path="/cleaningproducts" element={<Cleaningproducts />} />
            <Route path="/fruits" element={<Fruits />} />
            <Route path="/staples" element={<Staples />} />
            <Route path="/search" element={<Search />} />
            {hasAccessToken && (
              <>
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/profile/addresses" element={<Addresses />} />
                <Route path="/profile/rewards" element={<ComingSoon />} />
                <Route path="/profile/yourorders" element={<Orders />} />
                <Route
                  path="/profile/yourorders/:orderid"
                  element={<Order />}
                />
                <Route
                  path="/profile/yourorders/view/:orderid"
                  element={<PDF />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/profile/edit" element={<EditProfile />} />
              </>
            )}
            {!hasAccessToken && (
              <>
                <Route path="/dashboard" element={<Loginprompt />} />
                <Route path="/contactus" element={<Loginprompt />} />
                <Route path="/profile/addresses" element={<Loginprompt />} />
                <Route path="/profile/rewards" element={<Loginprompt />} />
                <Route path="/profile/rewards" element={<Loginprompt />} />
                <Route path="/profile" element={<Loginprompt />} />
                <Route path="/checkout" element={<Loginprompt />} />
                <Route path="/profile/edit" element={<Loginprompt />} />
              </>
            )}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </MyContext.Provider>
    </div>
  );
};

$(".veggiesbanner").attr("src", "./accfiles/GoGrocers banner.png");

export default App;
