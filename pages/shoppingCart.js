import Header from "../components/Header";
import Image from "next/image";

import Footer from "../components/Footer";
import AppContext, { Context } from "../Context/CartContext";
import { useContext } from "react";
const shoppingCart = () => {
  const Cart = useContext(AppContext);

  const { cartItems, handleAddToCart, cartSubTotal, handleRemoveFromCart } =
    useContext(Context);
  const shippingPrice = 50.0;
  const total = cartSubTotal + shippingPrice;
  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__text">
                <h2>Shopping cart</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="shopping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr>
                        <td>
                          <div
                            style={{
                              display: "flex",
                              gap: "10px",
                              alignItems: "center",
                            }}
                          >
                            <div style={{ width: "25%", height: "25%" }}>
                              <Image alt="" src={item.image} />
                            </div>
                            <div className="product__cart__item__text">
                              <h6
                                style={{
                                  color: "#111111",
                                  fontSize: "16px",
                                  fontWeight: "500",
                                  textTransform: "uppercase",
                                  marginBottom: "10px",
                                }}
                              >
                                {item.title}
                              </h6>
                              <h5
                                style={{
                                  color: "#111111",
                                  fontWeight: "600",
                                  fontSize: "16px",
                                }}
                              >
                                ${item.price}
                              </h5>
                            </div>
                          </div>
                        </td>
                        <td className="quantity__item">
                          <div className="quantity">
                            <div className="pro-qty">
                              <span className="dec qtybtn">-</span>
                              <input type="text" value="1" />
                              <span className="inc qtybtn">+</span>
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">
                          $ {item.price * item.quantity}
                        </td>
                        <td className="cart__close">
                          <span
                            className="icon_close"
                            style={{ cursor: "pointer" }}
                            onClick={() => handleRemoveFromCart(item.id)}
                          ></span>
                        </td>
                      </tr>
                      // <tr>
                      //   <td className="product__cart__item">
                      //     <Image alt="" src={item.image} />
                      //     <div className="product__cart__item__text">
                      //       <h6>{item.title}</h6>
                      //       <h5>${item.price}</h5>
                      //     </div>
                      //   </td>

                      // </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn">
                    <a href="#">Continue Shopping</a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner"></i> Update cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ 169.50</span>
                  </li>
                  <li>
                    Total <span>$ 169.50</span>
                  </li>
                </ul>
                <a href="#" className="primary-btn">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default shoppingCart;
