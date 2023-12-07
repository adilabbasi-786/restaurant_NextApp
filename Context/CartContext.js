import React, { createContext, useEffect, useState } from "react";

export const Context = createContext();

const AppContext = ({ children }) => {
  let cart = [];

  const [cartItems, setCartItems] = useState(cart || []);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    console.log(cartSubTotal);
    let count = 0;
    cartItems.map((item) => (count += item?.attributes?.quantity));
    setCartCount(count);
    let SubTotal = 0;
    cartItems.map(
      (item) => (SubTotal += item?.attributes?.quantity * item.price)
    );
    setCartSubTotal(SubTotal);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    console.log(product, quantity);
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);

    if (index !== -1) {
      // Check if attributes is defined before trying to access quantity
      if (items[index].attributes) {
        items[index].attributes.quantity += quantity;
      } else {
        // If attributes is undefined, initialize it with quantity
        items[index].attributes = { quantity };
      }
    } else {
      // Check if attributes is defined before trying to access quantity
      if (product.attributes) {
        product.attributes.quantity = quantity;
      } else {
        // If attributes is undefined, initialize it with quantity
        product.attributes = { quantity };
      }
      items = [...items, product];
    }

    setCartItems(items);
  };

  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(items));
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === product?.id);
    if (type === "inc") {
      items[index].attributes.quantity += 1;
    } else if (type === "dec") {
      if (items[index].attributes.quantity === 1) return;
      items[index].attributes.quantity -= 1;
    }
    setCartItems(items);
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
        handleCartProductQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
