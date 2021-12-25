import React from "react";
import  "./style.css";
import logo from "../../assets/images/logo-web.png";
export default function Header() {
  return (
    <div id="" className="header">
      <div className="div-wrapper">
        <div className="header-top">
          <div className="header-top-wrapper">
            <div className="header__logo">
              <a href="/#">
                <img src={logo} alt="" />
              </a>
            </div>
            {/* <div class="header__menu">
                      <div class="header__menu-icon"></div>
                      <div class="header__menu-title">Tất cả phụ kiện</div>
                  </div> */}
            <div className="header__search">
              <input
                placeholder="Tìm kiếm sản phẩm"
                type="text"
                className="header__search-input"
              />
              <button type="text" className="header__search-search">
                <i className="fas fa-search" />
                Tìm kiếm
              </button>
            </div>
            <div className="header__cart">
              <i className="fas fa-shopping-cart" />
              <div className="header__cart__popup">
                <div>
                  <h3 className="header__cart__title">sản phẩm vừa mới thêm</h3>
                  <a href="/#">
                    <div className="header__cart__item">
                      <div className="header__cart__item-img">
                        <img
                          src="https://cf.shopee.vn/file/750a433e6af5e7709900f81fa751cd4a"
                          alt=""
                        />
                      </div>
                      <div className="header__cart__item-name text-wrap1">
                        Apple Watch Series 7 45mm GPS Sport Band
                      </div>
                      <div className="header__cart__item-price">
                        14.000.000 <span>₫</span>
                      </div>
                    </div>
                  </a>
                  <a href="/#">
                    <div className="header__cart__item">
                      <div className="header__cart__item-img">
                        <img
                          src="https://cf.shopee.vn/file/b4d8f2c5ec5de05b98a68ba1fdc17d4c"
                          alt=""
                        />
                      </div>
                      <div className="header__cart__item-name text-wrap1">
                        Apple Watch Series 7 45mm GPS Sport Band
                      </div>
                      <div className="header__cart__item-price">
                        990.000 <span>₫</span>
                      </div>
                    </div>
                  </a>
                  <a href="/#">
                    <div className="header__cart__item">
                      <div className="header__cart__item-img">
                        <img
                          src="https://cf.shopee.vn/file/750a433e6af5e7709900f81fa751cd4a"
                          alt=""
                        />
                      </div>
                      <div className="header__cart__item-name text-wrap1">
                        Apple Watch Series 7 45mm GPS Sport Band
                      </div>
                      <div className="header__cart__item-price">
                        99.999.999 <span>₫</span>
                      </div>
                    </div>
                  </a>
                  <a
                    name="tocart"
                    id="tocart"
                    className="btn btn-tocart"
                    href="/#"
                    role="button"
                  >
                    Đến giỏ hàng
                  </a>
                </div>
              </div>
            </div>
            <div className="header__user">
              {/* logined */}
              <div className="header__user-status-logined hidenull">
                <a href="/#" className="header__user-main ">
                  <div className="header__user-ava">
                    <img src="./assets/images/avatest2.jpg" alt="" />
                  </div>
                  <div className="header__user-name">Minh Huy</div>
                  <div className="header__user-moreinfo">
                    <i className="fas fa-ellipsis-v" />
                  </div>
                </a>
                <ul className="subnav">
                  <li>
                    <a href="/#">Tài khoản của tôi</a>
                  </li>
                  <li>
                    <a href="/#">Đơn mua</a>
                  </li>
                  <li>
                    <a href="/#">Đăng xuất</a>
                  </li>
                </ul>
              </div>
              {/* not login */}
              <div className="header__user-not-login">
                <a href="/#">Đăng nhập</a> / <a href="/#">Đăng ký</a>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom ">
          <div className="header__nav">
            <ul className="header__nav-wrapper">
              <li className="nav-item">
                <a href="/#">
                  <i className="fas fa-mobile-alt" />
                  <span>Điện thoại</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="fas fa-laptop" />
                  <span>Laptop</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="far fa-clock" />
                  <span>Đồng hồ</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="fas fa-tablet-alt" />
                  <span>Tablet</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="fas fa-headphones-alt" />
                  <span>Âm thanh</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="fas fa-laptop-house" />
                  <span>Smart home</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="far fa-keyboard" />
                  <span>Phụ kiện</span>
                </a>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <a href="/#">Apple</a>
                  </li>
                  <li>
                    <a href="/#">Sammsung</a>
                  </li>
                  <li>
                    <a href="/#">Xiaomi</a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#">
                  <i className="fas fa-bolt" />
                  <span>Flash sale</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
