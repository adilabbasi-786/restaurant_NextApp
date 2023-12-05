import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from "../images/logo.png";
import searchIcon from "../images/icon/search.png";
import cartIcon from "../images/icon/cart.png";
import heartIcon from "../images/icon/heart.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  console.log(router.asPath);
  const currentroute = router.asPath;

  return (
    <header className="header">
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__cart">
          <div className="offcanvas__cart__links">
            <a href="#" className="search-switch">
              <img src="img/icon/search.png" alt="" />
            </a>
            <a href="#">
              <img src="img/icon/heart.png" alt="" />
            </a>
          </div>
          <div className="offcanvas__cart__item">
            <a href="#">
              <img src="img/icon/cart.png" alt="" /> <span>0</span>
            </a>
            <div className="cart__price">
              Cart: <span>$0.00</span>
            </div>
          </div>
        </div>
        <div className="offcanvas__logo">
          <a href="./index.html">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div id="mobile-menu-wrap"></div>
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
                      <span>0</span>
                    </a>
                    <div className="cart__price">
                      Cart: <span>$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
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
                {/* <li className={currentroute === "/about" ? "active" : ""}>
                  <a href="/about">About</a>
                </li> */}
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
