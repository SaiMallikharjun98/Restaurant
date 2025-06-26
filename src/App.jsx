import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import Account from "./pages/Account";
function App() {
  // const menuItems = [
  //   {
  //     id: 1,
  //     name: "Paneer Butter Masala",
  //     category: "Main Course",
  //     price: 220,
  //     rating: 4.5,
  //     image: "./images/paneer_butter_masala.avif",
  //     description:
  //       "Soft paneer cubes cooked in a rich, buttery tomato-based gravy infused with cream and aromatic spices. A smooth, mildly sweet North Indian favorite perfect with naan or jeera rice.",
  //   },
  //   {
  //     id: 2,
  //     name: "Paneer Tikka Masala",
  //     category: "Main Course",
  //     price: 250,
  //     rating: 4.3,
  //     image: "./images/paneer-tikka-masala.jpg",
  //     description:
  //       "Succulent cubes of marinated paneer grilled to perfection and simmered in a rich, spiced tomato-cream gravy. A smoky and flavorful North Indian classic that's best paired with naan or rice.",
  //   },
  // ];
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
export default App;
