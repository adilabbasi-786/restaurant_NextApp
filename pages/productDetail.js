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
      <div class="breadcrumb-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="breadcrumb__text">
                <h2>Product detail</h2>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-6">
              <div class="breadcrumb__links">
                <a href="./index.html">Home</a>
                <a href="./shop.html">Shop</a>
                <span>Sweet autumn leaves</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="product-details spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="product__details__img">
                <div class="product__details__big__img">
                  <Image src={proBig1} class="big_img" />
                </div>
                <div class="product__details__thumb">
                  <div class="pt__item active">
                    <Image src={proBig2} />
                  </div>
                  <div class="pt__item">
                    <Image src={proBig3} />
                  </div>
                  <div class="pt__item">
                    <Image src={proBig4} />
                  </div>
                  <div class="pt__item">
                    <Image src={proBig2} />
                  </div>
                  <div class="pt__item">
                    <Image src={proBig1} />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="product__details__text">
                <div class="product__label">Cupcake</div>
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
                <div class="product__details__option">
                  <div class="quantity">
                    <div class="pro-qty">
                      <span class="dec qtybtn">-</span>
                      <input type="text" value="2" />
                      {/* <span class="inc qtybtn">+</span> */}
                      <span>+</span>
                    </div>
                  </div>
                  <a href="#" class="primary-btn">
                    Add to cart
                  </a>
                  <a href="#" class="heart__btn">
                    <span class="icon_heart_alt"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="product__details__tab">
            <div class="col-lg-12">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    data-toggle="tab"
                    href="#tabs-1"
                    role="tab"
                  >
                    Description
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tabs-2"
                    role="tab"
                  >
                    Additional information
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    data-toggle="tab"
                    href="#tabs-3"
                    role="tab"
                  >
                    Previews(1)
                  </a>
                </li>
              </ul>
              <div class="tab-content">
                <div class="tab-pane active" id="tabs-1" role="tabpanel">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
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
                <div class="tab-pane" id="tabs-2" role="tabpanel">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
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
                <div class="tab-pane" id="tabs-3" role="tabpanel">
                  <div class="row d-flex justify-content-center">
                    <div class="col-lg-8">
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
