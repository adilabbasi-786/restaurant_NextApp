import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import logo from "../images/logo.png";
import searchIcon from "../images/icon/search.png";
import cartIcon from "../images/icon/cart.png";
import heartIcon from "../images/icon/heart.png";
import Image from "next/image";
const Header = () => {
  return (
    <header className="header">
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
                  <a href="/">
                    <Image
                      src={logo}
                      width={120}
                      height={52}
                      alt="Picture of the author"
                    />
                  </a>
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
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="./shop-details.html">Shop Details</a>
                    </li>
                    <li>
                      <a href="./shoping-cart.html">Shoping Cart</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="./wisslist.html">Wisslist</a>
                    </li>
                    <li>
                      <a href="./className.html">className</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
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
