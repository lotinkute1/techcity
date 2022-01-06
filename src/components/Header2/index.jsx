import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-web.png";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";
import HeaderCartPopup from "../../features/HeaderCartPopup/HeaderCartPopup";
import { typing } from "./searchSlice";
import "./style.css";
import StorageKeys from "../../constants";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const loggedInUser = JSON.parse(localStorage.getItem(StorageKeys.USER));

  const [inputValue, setInputValue] = useState("");
  const isLoggedIn = !!loggedInUser?.id;

 

  const hanleLogout = () => {
    dispatch(logout());
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    const action = typing(e.target.value);
    dispatch(action);
    // navigate("/show-all-product");
  };

  const handleSearchClick = () => {
    navigate("/show-all-product");
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
                value={inputValue}
                onChange={(e) => handleInputChange(e)}
              />
              <button
                type="text"
                className="header__search-search"
                onClick={handleSearchClick}
              >
                <i className="fas fa-search" />
                Tìm kiếm
              </button>
            </div>
            <HeaderCartPopup />
            <div className="header__user">
              {/* logined */}
              {isLoggedIn && (
                <>
                  <div className="header__user-status-logined">
                    <a href="/#" className="header__user-main ">
                      <div className="header__user-ava">
                        <img
                          src={
                            loggedInUser.user_ava ||
                            "https://static.thenounproject.com/png/363640-200.png"
                          }
                          alt=""
                        />
                      </div>
                      <div className="header__user-name">
                        {loggedInUser.name}
                      </div>
                      <div className="header__user-moreinfo">
                        <i className="fas fa-ellipsis-v" />
                      </div>
                    </a>
                    <ul className="subnav">
                      {loggedInUser.user_type === 1 && (
                        <li>
                          <a href={`http://localhost:3001/${loggedInUser.id}`}>
                            Techcity_admin
                          </a>
                        </li>
                      )}

                      <li>
                        <Link to="/profile">Tài khoản của tôi</Link>
                      </li>
                      <li>
                        <Link to="/#">Đơn mua</Link>
                      </li>
                      <li>
                        <Link onClick={hanleLogout} to="/#">
                          Đăng xuất
                        </Link>
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
                <Link className="nav-category" to="/show-all-product/ctgr01">
                  <i className="fas fa-mobile-alt" />
                  <span>Điện thoại</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/ctgr02">
                  <i className="fas fa-laptop" />
                  <span>Laptop</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/ctgr06">
                  <i className="far fa-clock" />
                  <span>Đồng hồ</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/ctgr03">
                  <i className="fas fa-tablet-alt" />
                  <span>Tablet</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product">
                  <i className="far fa-keyboard" />
                  <span>Phụ kiện</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product">
                  <i className="fas fa-headphones-alt" />
                  <span>Âm thanh</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product">
                  <i className="fas fa-laptop-house" />
                  <span>Smart home</span>
                </Link>
                <ul className="subnav">
                  <h4>Hãng sản xuất</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product">
                  <i className="fas fa-bolt" />
                  <span>Flash sale</span>
                </Link>
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
