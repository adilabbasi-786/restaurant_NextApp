import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from "../images/logo.png";
import searchIcon from "../images/icon/search.png";
import cartIcon from "../images/icon/cart.png";
import heartIcon from "../images/icon/heart.png";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import AppContext from "../Context/CartContext";
import { Context } from "../Context/CartContext";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
const Header = ({ updateCartIcon }) => {
  const Cart = useContext(AppContext);
  const { cartCount, cartItems, cartSubTotal } = useContext(Context);
  const router = useRouter();
  console.log(router.asPath);
  const currentroute = router.asPath;
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const [isPagesOpen, setPagesOpen] = useState(false);

  const togglePagesDropdown = () => {
    setPagesOpen(!isPagesOpen);
  };
  return (
    <header className="header">
      <div
        className={`offcanvas-menu-overlay ${navbarOpen ? "active" : ""}`}
      ></div>
      <div className={`offcanvas-menu-wrapper ${navbarOpen ? "active" : ""}`}>
        <div className="offcanvas__cart">
          <div className="canvas__open">
            <RxCross2 onClick={handleToggle} />
          </div>
          <div className="offcanvas__cart__links">
            <a href="#" className="search-switch">
              <Image
                src={searchIcon}
                width={24}
                height={25}
                alt="Picture of the author"
              />
            </a>
            <a href="#">
              <Image
                src={heartIcon}
                width={24}
                height={25}
                alt="Picture of the author"
              />
            </a>
          </div>
          <div className="offcanvas__cart__item">
            <a href="#">
              <Image
                src={cartIcon}
                width={24}
                height={25}
                alt="Picture of the author"
              />{" "}
              <span>{cartCount}</span>
            </a>
            <div className="cart__price">
              Cart: <span>${cartSubTotal}</span>
            </div>
          </div>
        </div>
        <div className="offcanvas__logo">
          <a href="./index.html">
            <Image src={logo} />
          </a>
        </div>
        <div id="mobile-menu-wrap">
          <div class="slicknav_menu">
            <a
              href="#"
              aria-haspopup="true"
              role="button"
              tabindex="0"
              class="slicknav_btn slicknav_collapsed"
              style={{ outline: "none" }}
            ></a>
            <nav
              class="slicknav_nav slicknav_hidden"
              aria-hidden="true"
              role="menu"
              style={{ outline: "none" }}
            >
              <ul>
                <li class="active">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/shop">Shop</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="offcanvas__option">
          <ul>
            <li>
              USD <span className="arrow_carrot-down"></span>
              <ul>
                <li>EUR</li>
                <li>USD</li>
              </ul>
            </li>
            <li>
              ENG <span className="arrow_carrot-down"></span>
              <ul>
                <li>Spanish</li>
                <li>ENG</li>
              </ul>
            </li>
            <li>
              <a href="#">Sign in</a>{" "}
              <span className="arrow_carrot-down"></span>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header__top__inner">
                <div className="header__top__left">
                  <ul>
                    <li>
                      USD{" "}
                      <span className="arrow_carrot-down">
                        <MdKeyboardArrowDown />
                      </span>
                      <ul>
                        <li>EUR</li>
                        <li>USD</li>
                      </ul>
                    </li>
                    <li>
                      ENG{" "}
                      <span className="arrow_carrot-down">
                        <MdKeyboardArrowDown />
                      </span>
                      <ul>
                        <li>Spanish</li>
                        <li>ENG</li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Sign in</a>{" "}
                      <span className="arrow_carrot-down"></span>
                    </li>
                  </ul>
                </div>
                <div className="header__logo">
                  <Link href="/">
                    <Image
                      src={logo}
                      width={120}
                      height={52}
                      alt="Picture of the author"
                    />
                  </Link>
                </div>
                <div className="header__top__right">
                  <div className="header__top__right__links">
                    <a href="#" className="search-switch">
                      <Image
                        src={searchIcon}
                        width={24}
                        height={25}
                        alt="Picture of the author"
                      />
                    </a>
                    <a href="#">
                      <Image
                        src={heartIcon}
                        width={26}
                        height={23}
                        alt="Picture of the author"
                      />
                    </a>
                  </div>
                  <div className="header__top__right__cart">
                    <a href="#">
                      <Image
                        src={cartIcon}
                        width={23}
                        height={27}
                        alt="Picture of the author"
                      />
                      <span>{cartCount}</span>
                    </a>
                    <div className="cart__price">
                      Cart: <span>${cartSubTotal}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <FaBars onClick={handleToggle} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className={currentroute === "/" ? "active" : ""}>
                  <Link href="/">Home</Link>
                </li>

                <li className={currentroute === "/shop" ? "active" : ""}>
                  <Link href="/shop">Shop</Link>
                </li>
                <li>
                  <Link href="#">Pages</Link>
                  <ul className="dropdown">
                    <li>
                      <Link href="/shoppingCart">Shoping Cart</Link>
                    </li>
                    <li>
                      <Link href="/checkout">Check Out</Link>
                    </li>
                  </ul>
                </li>

                <li className={currentroute === "/contact" ? "active" : ""}>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
