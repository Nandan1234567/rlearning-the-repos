import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full h-25 shadow-2xl flex justify-between items-center p-5">
      <h1 className="text-lg font-bold">Products Listing</h1>
      <ul className="list-none flex justify-between items-center w-50 p-5">
        <li className="text-sm font-bold">
          <button className="p-2 bg-blue-500 text-white hover:cursor-pointer hover:bg-blue-400 rounded-md w-20 mr-2">
            Products
          </button>
        </li>
        <li className="text-sm font-bold text-white ">
          <button className="p-2 bg-blue-500 hover:cursor-pointer hover:bg-blue-400 rounded-md w-20">
            Cart
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
