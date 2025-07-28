
import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../Components/Navbar.css";
function Navbar({ onFilter, onSearch, onClear, cartItems, totalPrice }) {
  const [inputValue, setInputValue] = useState("");

  const handleSearchClick = () => {
    onSearch(inputValue.trim());
  };

  const handleClear = () => {
    setInputValue("");
    onClear();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning px-3">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="./images/OIP-AnyEraser.png" alt="logo" width="60" height="56"  className="me-2 slide-in"/>
          <strong >Foody Zone</strong>
        </a>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navItems"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navItems">
          {/* Category buttons */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-wrap">
            {["All", "Breakfast", "Lunch", "Dinner"].map((category) => (
              <li className="nav-item" key={category}>
                <button
                  className="btn btn-light mx-1 my-1"
                  onClick={() => onFilter(category)}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>

          {/* Search and Cart */}
          <div className="d-flex align-items-center">
            {/* Search Input */}
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search food..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="btn btn-dark me-2" onClick={handleSearchClick}>
              Search
            </button>
            <button className="btn btn-outline-dark me-3" onClick={handleClear}>
              Clear
            </button>

              <ul
                className="dropdown-menu dropdown-menu-end p-2"
                style={{ minWidth: "250px" }}
              >
                <li className="fw-bold text-center">🛒 Cart Items</li>
                <hr className="my-1" />
                {cartItems.length === 0 ? (
                  <li className="text-muted text-center">Cart is empty</li>
                ) : (
                  <>
                    {cartItems.map((item, index) => (
                      <li
                        key={index}
                        className="d-flex justify-content-between small border-bottom py-1"
                      >
                        <span>{item.name}</span>
                        <span>₹{item.price}</span>
                      </li>
                    ))}
                    <li className="fw-bold d-flex justify-content-between pt-2">
                      <span>Total:</span>
                      <span>₹{totalPrice}</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      {/* </div> */}
    </nav>
  );
}

export default Navbar;