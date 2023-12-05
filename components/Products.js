import Image from "next/image";
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

const Products = () => {
  return (
    <section className="product spad">
      <div className="container">
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
        </div>
      </div>
    </section>
  );
};

export default Products;
