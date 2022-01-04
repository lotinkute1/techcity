import logo from "../../assets/images/logo-web.png";
import AuthFeature from "../../features/Auth";
import Register from "../../features/Auth/components/Register";
import LoginForm from "../../features/Auth/components/LoginForm";
import Login from "../../features/Auth/components/Login";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/Auth/userSlice";
import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import HeaderCartPopup from "../../features/HeaderCartPopup/HeaderCartPopup";
export default function Header() {
  const dispatch = useDispatch();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);


  const loggedInUser = useSelector((state) => state.user.current);
  const isLoggedIn = !!loggedInUser.id;

  const hanleLogout = () => {
    setTimeout(() => {
      dispatch(logout());
    }, 2000);
  };

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
    setOpenLogin(false);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const handleClickOpenLogin = () => {
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  return (
    <div id="header" className="">
      <div className="div-wrapper">
        <div className="header-top">
          <div className="header-top-wrapper">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
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
            <HeaderCartPopup/>
            <div className="header__user">
              {/* logined */}
              {isLoggedIn && (
                <>
                  <div className="header__user-status-logined">
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
                        <a onClick={hanleLogout} href="/#">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </div>
                </>
              )}

              {/* not login */}

              {!isLoggedIn && (
                <>
                  <div className="header__user-not-login">
                    <a onClick={handleClickOpenRegister} href="/#">
                      Đăng ký
                    </a>{" "}
                    /{" "}
                    <a onClick={handleClickOpenLogin} href="/#">
                      Đăng nhập
                    </a>
                  </div>
                </>
              )}
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
                <i className="fas fa-swatchbook"></i>
                  <span>Phụ Kiện Điện Thoại</span>
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
                  <span>Link kiện PC</span>
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
      {openRegister && (
        <Register
          handleCloseRegister={handleCloseRegister}
          handleClickOpenLogin={handleClickOpenLogin}
        />
      )}
      {openLogin && (
        <Login
          handleClickOpenRegister={handleClickOpenRegister}
          handleCloseLogin={handleCloseLogin}
        />
      )}
    </div>
  );
}