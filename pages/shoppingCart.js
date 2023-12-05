import Header from "../components/Header";
import Image from "next/image";
import cartImg1 from "../images/cart/cart-1.jpg";
import cartImg2 from "../images/cart/cart-2.jpg";
import cartImg3 from "../images/cart/cart-3.jpg";
import cartImg4 from "../images/cart/cart-4.jpg";
import Footer from "../components/Footer";
const shoppingCart = () => {
  return (
    <>
      <Header />
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="breadcrumb__text">
                <h2>Shopping cart</h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="shopping-cart spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="shopping__cart__table">
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
                    <tr>
                      <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                          <Image src={cartImg1} />
                        </div>
                        <div class="product__cart__item__text">
                          <h6>T-shirt Contrast Pocket</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td class="quantity__item">
                        <div class="quantity">
                          <div class="pro-qty">
                            <span class="dec qtybtn">-</span>
                            <input type="text" value="1" />
                            <span class="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">$ 30.00</td>
                      <td class="cart__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                          <Image src={cartImg2} />
                        </div>
                        <div class="product__cart__item__text">
                          <h6>Diagonal Textured Cap</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td class="quantity__item">
                        <div class="quantity">
                          <div class="pro-qty">
                            <span class="dec qtybtn">-</span>
                            <input type="text" value="1" />
                            <span class="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">$ 32.50</td>
                      <td class="cart__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                          <Image src={cartImg3} />
                        </div>
                        <div class="product__cart__item__text">
                          <h6>Basic Flowing Scarf</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td class="quantity__item">
                        <div class="quantity">
                          <div class="pro-qty">
                            <span class="dec qtybtn">-</span>
                            <input type="text" value="1" />
                            <span class="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">$ 47.00</td>
                      <td class="cart__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>
                    <tr>
                      <td class="product__cart__item">
                        <div class="product__cart__item__pic">
                          <Image src={cartImg4} />
                        </div>
                        <div class="product__cart__item__text">
                          <h6>Basic Flowing Scarf</h6>
                          <h5>$98.49</h5>
                        </div>
                      </td>
                      <td class="quantity__item">
                        <div class="quantity">
                          <div class="pro-qty">
                            <span class="dec qtybtn">-</span>
                            <input type="text" value="1" />
                            <span class="inc qtybtn">+</span>
                          </div>
                        </div>
                      </td>
                      <td class="cart__price">$ 30.00</td>
                      <td class="cart__close">
                        <span class="icon_close"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="continue__btn">
                    <a href="#">Continue Shopping</a>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="continue__btn update__btn">
                    <a href="#">
                      <i class="fa fa-spinner"></i> Update cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div class="cart__total">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ 169.50</span>
                  </li>
                  <li>
                    Total <span>$ 169.50</span>
                  </li>
                </ul>
                <a href="#" class="primary-btn">
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
