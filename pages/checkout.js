import Footer from "../components/Footer";
import Header from "../components/Header";
import AppContext, { Context } from "../Context/CartContext";
import { useContext } from "react";
import { useForm } from "react-hook-form";
const axios = require("axios");

const Checkout = () => {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      data: {
        firstName: "",
        lastName: "",
        address: "",
        email: "",
        phoneNumber: "",
        postCode: "",
        notes: "",
        items: [],
      },
    },
  });
  const Cart = useContext(AppContext);
  const { cartItems, cartSubTotal, total } = useContext(Context);
  const onSubmit = async (formdata) => {
    // Exclude the "image" property from each item in the "items" array
    formdata.data.items = cartItems.map(({ image, ...rest }) => rest);
    await axios.post(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`,
      formdata
    );
    reset();
    alert("order place successfull");
  };

  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__text">
                <h2>Checkout</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="breadcrumb__links">
                <a href="./index.html">Home</a>
                <span>Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="checkout spad">
        <div className="container">
          <div className="checkout__form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <h6 className="coupon__code">
                    <span className="icon_tag_alt"></span> Have a coupon?{" "}
                    <a href="#">Click here</a> to enter your code
                  </h6>
                  <h6 className="checkout__title">Billing Details</h6>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Fist Name<span>*</span>
                        </p>
                        <input type="text" {...register("data.firstName")} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Last Name<span>*</span>
                        </p>
                        <input type="text" {...register("data.lastName")} />
                      </div>
                    </div>
                  </div>
                  {/* <div className="checkout__input">
                    <p>
                      Country<span>*</span>
                    </p>
                    <input type="text" />
                  </div> */}
                  <div className="checkout__input">
                    <p>
                      Address<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Street Address"
                      className="checkout__input__add"
                      {...register("data.address")}
                    />
                    {/* <input
                      type="text"
                      placeholder="Apartment, suite, unite ect (optinal)"
                    /> */}
                  </div>
                  {/* <div className="checkout__input">
                    <p>
                      Town/City<span>*</span>
                    </p>
                    <input type="text" />
                  </div> */}
                  {/* <div className="checkout__input">
                    <p>
                      Country/State<span>*</span>
                    </p>
                    <input type="text" />
                  </div> */}
                  <div className="checkout__input">
                    <p>
                      Postcode / ZIP<span>*</span>
                    </p>
                    <input type="text" {...register("data.postCode")} />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Phone<span>*</span>
                        </p>
                        <input type="text" {...register("data.phoneNumber")} />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input type="text" {...register("data.email")} />
                      </div>
                    </div>
                  </div>
                  {/* <div className="checkout__input__checkbox">
                    <label htmlFor="acc">
                      Create an account?
                      <input type="checkbox" id="acc" />
                      <span className="checkmark"></span>
                    </label>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page
                    </p>
                  </div> */}
                  {/* <div className="checkout__input">
                    <p>
                      Account Password<span>*</span>
                    </p>
                    <input type="text" />
                  </div> */}
                  {/* <div className="checkout__input__checkbox">
                    <label htmlFor="diff-acc">
                      Note about your order, e.g, special noe for delivery
                      <input type="checkbox" id="diff-acc" />
                      <span className="checkmark"></span>
                    </label>
                  </div> */}
                  <div className="checkout__input">
                    <p>
                      Order notes<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Notes about your order, e.g. special notes for delivery."
                      {...register("data.notes")}
                    />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h6 className="order__title">Your order</h6>
                    <div className="checkout__order__products">
                      Product <span>Total</span>
                    </div>
                    <ul className="checkout__total__products">
                      {cartItems.map((item) => (
                        <li key={item.id}>
                          <span>{item.quantity}.</span> {item.title}{" "}
                          <span>$ {item.price * item.quantity}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="checkout__total__all">
                      <li>
                        Subtotal <span>${cartSubTotal}</span>
                      </li>
                      <li>
                        Total <span>${total}</span>
                      </li>
                    </ul>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="acc-or">
                        Create an account?
                        <input type="checkbox" id="acc-or" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <button type="submit" className="site-btn">
                      PLACE ORDER
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
