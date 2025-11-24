import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-25 shadow-xl flex justify-between items-center p-5">
      <h1 className="text-lg font-bold">Products Listing</h1>
      <ul className="list-none flex justify-between items-center w-50 p-5">
        <li className="text-sm font-bold">
          <Link to={"/"}>
            <button className="p-2 bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-400 rounded-md w-20 mr-2">
              Products
            </button>
          </Link>
        </li>
        <li className="text-sm font-bold text-white ">
          <Link to={"/cart"}>
            <button className="p-2 bg-blue-500 hover:cursor-pointer hover:bg-blue-400 rounded-md w-20">
              Cart
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
