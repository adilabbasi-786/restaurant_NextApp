import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import pro1 from "../images/products/product-1.jpg";
import pro2 from "../images/products/product-2.jpg";
import pro3 from "../images/products/product-3.jpg";
import pro4 from "../images/products/product-4.jpg";
import pro5 from "../images/products/product-5.jpg";
import pro6 from "../images/products/product-6.jpg";
import pro7 from "../images/products/product-7.jpg";
import pro8 from "../images/products/product-8.jpg";
import pro9 from "../images/products/product-9.jpg";
import pro10 from "../images/products/product-10.jpg";
import pro11 from "../images/products/product-11.jpg";
import pro12 from "../images/products/product-12.jpg";

const shop = () => {
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
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-1.jpg"
                >
                  <Image alt="" src={pro1} />
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Dozen Cupcakes</a>
                  </h6>
                  <div className="product__item__price">$32.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-2.jpg"
                >
                  <Image alt="" src={pro2} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Cookies and Cream</a>
                  </h6>
                  <div className="product__item__price">$30.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-3.jpg"
                >
                  <Image alt="" src={pro3} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Gluten Free Mini Dozen</a>
                  </h6>
                  <div className="product__item__price">$31.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-4.jpg"
                >
                  <Image alt="" src={pro4} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Cookie Dough</a>
                  </h6>
                  <div className="product__item__price">$25.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-5.jpg"
                >
                  <Image alt="" src={pro5} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Vanilla Salted Caramel</a>
                  </h6>
                  <div className="product__item__price">$05.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-6.jpg"
                >
                  <Image alt="" src={pro6} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">German Chocolate</a>
                  </h6>
                  <div className="product__item__price">$14.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-7.jpg"
                >
                  <Image alt="" src={pro7} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Dulce De Leche</a>
                  </h6>
                  <div className="product__item__price">$32.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-8.jpg"
                >
                  <Image alt="" src={pro8} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Mississippi Mud</a>
                  </h6>
                  <div className="product__item__price">$08.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-9.jpg"
                >
                  <Image alt="" src={pro9} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">VEGAN/GLUTEN FREE</a>
                  </h6>
                  <div className="product__item__price">$98.85</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-10.jpg"
                >
                  <Image alt="" src={pro10} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">SWEET CELTICS</a>
                  </h6>
                  <div className="product__item__price">$5.77</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-11.jpg"
                >
                  <Image alt="" src={pro11} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">SWEET AUTUMN LEAVES</a>
                  </h6>
                  <div className="product__item__price">$26.41</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="img/shop/product-12.jpg"
                >
                  <Image alt="" src={pro12} />

                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">PALE YELLOW SWEET</a>
                  </h6>
                  <div className="product__item__price">$22.47</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
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

export default shop;
