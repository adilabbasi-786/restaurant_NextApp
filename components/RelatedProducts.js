import pro1 from "../images/products/product-1.jpg";
import pro2 from "../images/products/product-2.jpg";
import pro3 from "../images/products/product-3.jpg";
import pro4 from "../images/products/product-4.jpg";
import pro5 from "../images/products/product-5.jpg";
import pro6 from "../images/products/product-6.jpg";
import pro7 from "../images/products/product-7.jpg";
import pro8 from "../images/products/product-8.jpg";
import Image from "next/image";

const RelatedProducts = () => {
  return (
    <>
      <section className="related-products spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="section-title">
                <h2>Related Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="related__products__slider owl-carousel">
              <div className="col-lg-3">
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
              <div className="col-lg-3">
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
              <div className="col-lg-3">
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
              <div className="col-lg-3">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/shop/product-4.jpg"
                  >
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
              <div className="col-lg-3">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/shop/product-5.jpg"
                  >
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
              <div className="col-lg-3">
                <div className="product__item">
                  <div
                    className="product__item__pic set-bg"
                    data-setbg="img/shop/product-6.jpg"
                  >
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RelatedProducts;
