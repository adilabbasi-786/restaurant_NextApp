import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  let cart = [];
  if (typeof window !== "undefined" && window.localStorage) {
    const itemInString = localStorage.getItem("cartItems");
    const CartIteminArray = JSON.parse(itemInString);
    cart = CartIteminArray;
  }

  const [cartItems, setCartItems] = useState(cart || []);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let SubTotal = 0;
    cartItems.map((item) => (SubTotal += item?.quantity * item.price));
    setCartSubTotal(SubTotal);
    setTotal(SubTotal + 50);
  }, [cartItems]);

  const handleAddToCart = (id, title, price, image) => {
    const index = cartItems.findIndex((each) => each.id === id);
    console.log(index);
    let items = [
      ...cartItems,
      { id: id, title: title, quantity: 1, price: price, image: image },
    ];
    const itemInString = JSON.stringify(items);
    localStorage.setItem("cartItems", itemInString);
    setCartItems(items);
  };

  const handleRemoveFromCart = (id) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(items));
    setCartItems(items);
  };
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  };
  const increment = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };
  const decrement = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    );
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  return (
    <Context.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        cartSubTotal,
        handleAddToCart,
        handleRemoveFromCart,
        total,
        increment,
        decrement,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
