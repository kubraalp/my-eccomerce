import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex flex-col items-center p-4 bg-white ">
      <div className="flex justify-between w-full items-center">
        <div className="text-lg font-bold">Bandage</div>
        <div className="flex space-x-4">
          <button>
            <i className="fas fa-search text-gray-600"></i>
          </button>
          <button>
            <i className="fas fa-shopping-cart text-gray-600"></i>
          </button>
          <button>
            <i className="fas fa-align-right text-gray-600"></i>
          </button>
        </div>
      </div>

      <nav className="mt-8 flex flex-col items-center space-y-4 text-gray-600">
        <NavLink exact
          to="/"
           activeClassName="text-lg font-normal"
          className="text-lg font-bold"
        >
          Home
        </NavLink>
        <NavLink
          to="/ProductPage"
           activeClassName="text-lg font-normal"
          className="text-lg font-bold"
        >
          Product
        </NavLink>
        <NavLink
          to="/PricingPage"
          activeClassName="text-lg font-normal"
          className="text-lg font-bold"
        >
          Pricing
        </NavLink>
        <NavLink
          to="/ContactPage"
           activeClassName="text-lg font-normal"
          className="text-lg font-bold"
          
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
