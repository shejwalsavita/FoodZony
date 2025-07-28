
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import FoodCard from "./Components/FoodCard";
import foodItems from "./Data/FoodData";


function App() {
  const [category, setCategory] = useState("All");
  const [searchText, setSearchText] = useState("");
  const [cart, setCart] = useState([]);

  // Add to cart
  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  // Search input
  const handleSearch = (text) => {
    setSearchText(text);
  };

  // Clear filter & search
  const handleClear = () => {
    setSearchText("");
    setCategory("All");
  };

  // Filter food items
  const filteredItems = foodItems.filter((item) => {
    return (
      (category === "All" || item.category === category) &&
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <Navbar
        onFilter={setCategory}
        onSearch={handleSearch}
        onClear={handleClear}
        cartItems={cart}
        totalPrice={totalPrice}
      />

      {/* Cart summary */}
      <div className="container mt-3">
        <h5 className="text-white">
          🛒 Cart Items:{" "}
          <span className="badge bg-primary">{cart.length}</span>
        </h5>
        <h6 className="text-white">
          💰 Total Price: ₹
          <span className="text-white">{totalPrice}</span>
        </h6>
      </div>

      {/* Food items list */}
      <div className="container flex-grow-1 py-3">
        <div className="row">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                onAddToCart={handleAddToCart}
              />
            ))
          ) : (
            <div className="text-center text-muted">
              <p>No food items found.</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-2 mt-auto">
        <p>Created By Savi Shejwal</p>
          ©2025 Foody Zone. All rights reserved.
      </footer>
    </div>
  );
}

export default App; 
