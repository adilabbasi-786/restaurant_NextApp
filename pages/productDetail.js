import Header from "../components/Header";
import Image from "next/image";
import proBig1 from "../images/productDetails/product-big-1.jpg";
import proBig2 from "../images/productDetails/product-big-2.jpg";
import proBig3 from "../images/productDetails/product-big-3.jpg";
import proBig4 from "../images/productDetails/product-big-4.jpg";

import RelatedProducts from "../components/RelatedProducts";
import Footer from "../components/Footer";
const productDetail = () => {
  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__text">
                <h2>Product detail</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <a href="./shop.html">Shop</a>
                <span>Sweet autumn leaves</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product__details__img">
                <div className="product__details__big__img">
                  <Image alt="" src={proBig1} className="big_img" />
                </div>
                <div className="product__details__thumb">
                  <div className="pt__item active">
                    <Image alt="" src={proBig2} />
                  </div>
                  <div className="pt__item">
                    <Image alt="" src={proBig3} />
                  </div>
                  <div className="pt__item">
                    <Image alt="" src={proBig4} />
                  </div>
                  <div className="pt__item">
                    <Image alt="" src={proBig2} />
                  </div>
                  <div className="pt__item">
                    <Image alt="" src={proBig1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="product__details__text">
                <div className="product__label">Cupcake</div>
                <h4>SWEET AUTUMN LEAVES</h4>
                <h5>$26.41</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida
                </p>
                <ul>
                  <li>
                    SKU: <span>17</span>
                  </li>
                  <li>
                    Category: <span>Biscuit cake</span>
                  </li>
                  <li>
                    Tags: <span>Gadgets, minimalisstic</span>
                  </li>
                </ul>
                <div className="product__details__option">
                  <div className="quantity">
                    <div className="pro-qty">
                      <span className="dec qtybtn">-</span>
                      <input type="text" value="2" />
                      {/* <span className="inc qtybtn">+</span> */}
                      <span>+</span>
                    </div>
                  </div>
                  <a href="#" className="primary-btn">
                    Add to cart
                  </a>
                  <a href="#" className="heart__btn">
                    <span className="icon_heart_alt"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="product__details__tab">
            <div className="col-lg-12">
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    Additional information
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                  >
                    Previews(1)
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div className="tab-pane active" id="tabs-1" role="tabpanel">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <p>
                        This delectable Strawberry Pie is an extraordinary treat
                        filled with sweet and tasty chunks of delicious
                        strawberries. Made with the freshest ingredients, one
                        bite will send you to summertime. Each gift arrives in
                        an elegant gift box and arrives with a greeting card of
                        your choice that you can personalize online!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-2" role="tabpanel">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <p>
                        This delectable Strawberry Pie is an extraordinary treat
                        filled with sweet and tasty chunks of delicious
                        strawberries. Made with the freshest ingredients, one
                        bite will send you to summertime. Each gift arrives in
                        an elegant gift box and arrives with a greeting card of
                        your choice that you can personalize online!2
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="tabs-3" role="tabpanel">
                  <div className="row d-flex justify-content-center">
                    <div className="col-lg-8">
                      <p>
                        This delectable Strawberry Pie is an extraordinary treat
                        filled with sweet and tasty chunks of delicious
                        strawberries. Made with the freshest ingredients, one
                        bite will send you to summertime. Each gift arrives in
                        an elegant gift box and arrives with a greeting card of
                        your choice that you can personalize online!3
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts />
      <Footer />
    </>
  );
};

export default productDetail;
