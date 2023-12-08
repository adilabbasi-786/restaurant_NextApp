import Image from "next/image";

import { Context } from "../Context/CartContext";
import { useState } from "react";
import { menu } from "../menu";
import { useContext } from "react";

const Products = () => {
  const { handleAddToCart } = useContext(Context);
  const displayedItems = menu.slice(0, 8);
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          {displayedItems.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-6" key={item.id}>
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-1.jpg"
                >
                  <Image alt="" src={item.image} />
                  <div className="product__label">
                    <span>{item.category}</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">{item.title}</a>
                  </h6>
                  <div className="product__item__price">${item.price}</div>
                  {!item.isCartAdded && (
                    <div className="cart_add" style={{ cursor: "pointer" }}>
                      <a
                        onClick={() => {
                          handleAddToCart(
                            item.id,
                            item.title,
                            item.price,
                            item.image
                          );
                          console.log(item);
                          item.isCartAdded = true;
                        }}
                      >
                        Add to cart
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
