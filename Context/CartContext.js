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
  // const increment=(id)=>{
  //   const index=

  // }
  const handleRemoveFromCart = (id) => {
    // const index = cartItems.findIndex((each) => each.id === id);
    let items = [...cartItems];
    items = items?.filter((p) => p.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(items));
    setCartItems(items);
  };
  const handleCartProductQuantity = (type, id) => {
    let items = [...cartItems];
    let index = items?.findIndex((p) => p.id === id);
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
        total,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
