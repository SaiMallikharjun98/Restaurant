import React from "react";
import logo from "/images/logo.webp";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlineAccountCircle } from "react-icons/md";
function Header() {
  return (
    <>
      <div className="flex bg-blue-300 justify-between p-5">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-24 w-44 p-5" />
          <h1 className="text-2xl font-bold">Annapurna Treats Restaurant</h1>
        </div>
        <nav className="text-lg text-blue-600 flex  items-center gap-5 font-bold">
          <Link
            to="/"
            className=" cursor-pointer hover:border-b-2 hover:border-fuchsia-600 transition duration-200 pb-1"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className=" cursor-pointer hover:border-b-2 hover:border-fuchsia-600 transition duration-200 pb-1"
          >
            Menu
          </Link>
          <Link
            to="/cart"
            className=" cursor-pointer hover:border-b-2 hover:border-fuchsia-600 transition duration-200 pb-1"
          >
            <HiOutlineShoppingBag />
          </Link>
          <Link
            to="/account"
            className=" cursor-pointer hover:border-b-2 hover:border-fuchsia-600 transition duration-200 pb-1"
          >
            <MdOutlineAccountCircle />
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
