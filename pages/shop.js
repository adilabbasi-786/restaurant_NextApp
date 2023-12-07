import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

import { useContext } from "react";
import { Context } from "../Context/CartContext";
import { useState } from "react";
import { menu } from "../menu";
const Shop = ({ updateCartIcon }) => {
  const { handleAddToCart } = useContext(Context);
  const [quantity, setQuantity] = useState(1);

  const [data, setData] = useState([]);
  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__text">
                <h2>Shop</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="shop spad">
        <div className="container">
          <div className="shop__option">
            <div className="row">
              <div className="col-lg-7 col-md-7">
                <div className="shop__option__search">
                  <form action="#">
                    <select>
                      <option value="">Categories</option>
                      <option value="">Red Velvet</option>
                      <option value="">Cup Cake</option>
                      <option value="">Biscuit</option>
                    </select>

                    <input type="text" placeholder="Search" />
                    <button type="submit">
                      <FaSearch />
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-5 col-md-5">
                <div className="shop__option__right">
                  <select style={{ border: "none" }}>
                    <option value="">Default sorting</option>
                    <option value="">A to Z</option>
                    <option value="">1 - 8</option>
                    <option value="">Name</option>
                  </select>
                  <a href="#">
                    <i className="fa fa-list"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-reorder"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {menu.map((item) => (
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
                      <div className="cart_add">
                        <p
                          style={{
                            cursor: "pointer",
                            color: "#111111",
                            fontSize: "16px",
                            fontWeight: "600",
                            display: "inline-block",
                            borderBottom: "2px solid #f08632",
                            paddingBottom: "4px",
                          }}
                          onClick={() => {
                            handleAddToCart(item, quantity);
                            console.log(item);
                            item.isCartAdded = true;
                          }}
                        >
                          Add to Cart
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="shop__last__option">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="shop__pagination">
                  <a href="#">1</a>
                  <a href="#">2</a>
                  <a href="#">3</a>
                  <a href="#">
                    <span className="arrow_carrot-right"></span>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="shop__last__text">
                  <p>Showing 1-9 of 10 results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shop;
