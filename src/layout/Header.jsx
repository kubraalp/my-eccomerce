import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white ">
      <div className="text-lg font-bold">BrandName</div>
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
    </header>
  );
};

export default Header;
