import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'Rs';
  const delivery_fee = 250;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  // ✅ Add to Cart - no size check
  const addToCart = async (itemId) => {
    let cartData = { ...cartItems };

    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }

    setCartItems(cartData);
    toast.success('Item added to cart');
  };

  // ✅ Get total count of items
  const getCartCount = () => {
    return Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
  };

  // ✅ Update quantity directly
  const updateQuantity = async (itemId, quantity) => {
    let cartData = { ...cartItems };

    if (quantity <= 0) {
      delete cartData[itemId]; // Remove item from cart if quantity is 0
    } else {
      cartData[itemId] = quantity;
    }

    setCartItems(cartData);
  };

  // ✅ Get total amount
  const getCartAmount = () => {
    let totalAmount = 0;

    for (const itemId in cartItems) {
      const product = products.find((product) => product._id === itemId);
      if (product) {
        totalAmount += product.price * cartItems[itemId];
      }
    }

    return totalAmount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
