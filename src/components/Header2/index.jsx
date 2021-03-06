import queryString from "query-string";
import React, { useEffect, useRef, useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-web.png";
import StorageKeys, { clientId } from "../../constants";
import Login from "../../features/Auth/components/Login";
import Register from "../../features/Auth/components/Register";
import { logout } from "../../features/Auth/userSlice";
import HeaderCartPopup from "../../features/HeaderCartPopup/HeaderCartPopup";
import { typing } from "./searchSlice";
import "./style.css";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openRegister, setOpenRegister] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );
  const [inputValue, setInputValue] = useState("");
  const isLoggedIn = !!loggedInUser?.id;

  const getToken = () =>{
    const rawToken = localStorage.getItem(StorageKeys.TOKEN) || null;
    const accessToken = rawToken ? rawToken.split('|')[1] : null;
    return accessToken;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const hanleLogout = () => {
    dispatch(logout());
    signOut();
    refreshPage();
  };

  const searchQueryParamRef = useRef({});

  const handleInputChange = (e) => {
    const filter = {
      filterType: "name",
      filterVal: e.target.value,
    };
    searchQueryParamRef.current = queryString.stringify(filter);
    setInputValue(e.target.value);
    const action = typing(e.target.value);
    dispatch(action);

    // navigate("/show-all-product?"+searchQueryParamRef.current);
  };

  const handleSearchClick = () => {
    navigate("/show-all-product?" + searchQueryParamRef.current);
  };

  const handleClickOpenRegister = () => {
    window.scrollTo(0, 0);
    setOpenRegister(true);
    setOpenLogin(false);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };
  const handleClickOpenLogin = () => {
    window.scrollTo(0, 0);
    setOpenLogin(true);
    setOpenRegister(false);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  const handleLogoutGoogleSuccess = () => {
    console.log("Logout successfully !!!");
  };
  const handleLogoutGoogleFailure = () => {
    console.log("Logout failure");
  };
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: handleLogoutGoogleSuccess,
    onFailure: handleLogoutGoogleFailure,
  });

  useEffect(() => {
    const localStorageSetHandler = function (e) {
      setTimeout(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem(StorageKeys.USER)));
      }, 1000);
    };
    document.addEventListener("itemInserted", localStorageSetHandler);
  }, []);
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
                      <div class="header__menu-title">T???t c??? ph??? ki???n</div>
                  </div> */}
            <div className="header__search">
              <input
                placeholder="T??m ki???m s???n ph???m"
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
                T??m ki???m
              </button>
            </div>
            <HeaderCartPopup />
            <div className="header__user">
              {/* logined */}
              {isLoggedIn && (
                <>
                  <div className="header__user-status-logined">
                    <Link
                      to="/my-account/profile"
                      className="header__user-main "
                    >
                      <div className="header__user-ava">
                        <img
                          src={
                            loggedInUser.ava ||
                            'https://static.thenounproject.com/png/363640-200.png'
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
                    </Link>
                    <ul className="subnav">
                      {loggedInUser.role == 0 ? (
                        <li>
                          <a
                            href={`http://localhost:3001/${
                              loggedInUser.id
                            }/${getToken()}`}
                          >
                            Techcity_admin
                          </a>
                        </li>
                      ) : loggedInUser.role == 1 ? (
                        <li>
                          <a
                            href={`http://localhost:3001/${
                              loggedInUser.id
                            }/${getToken()}`}
                          >
                            Techcity_admin
                          </a>
                        </li>
                      ) : (
                        ''
                      )}

                      <li>
                        <Link to="/my-account/profile">T??i kho???n c???a t??i</Link>
                      </li>
                      {/* <li>
                        <Link to="/#">????n mua</Link>
                      </li> */}
                      <li>
                        <Link onClick={hanleLogout} to="/#">
                          ????ng xu???t
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
                    <span onClick={handleClickOpenRegister}>????ng k??</span> /{' '}
                    <span onClick={handleClickOpenLogin}>????ng nh???p</span>
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
                <Link className="nav-category" to="/show-all-product/1">
                  <i className="fas fa-mobile-alt" />
                  <span>??i???n tho???i</span>
                </Link>
                {/* <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/2">
                  <i className="fas fa-laptop" />
                  <span>Laptop</span>
                </Link>
                {/* <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/6">
                  <i className="far fa-clock" />
                  <span>?????ng h???</span>
                </Link>
                {/* <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/3">
                  <i className="fas fa-tablet-alt" />
                  <span>Tablet</span>
                </Link>
                {/* <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul> */}
              </li>

              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/4">
                  <i className="far fa-keyboard" />
                  <span>Linh Ki???n PC</span>
                </Link>
                {/* <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul> */}
              </li>
              <li className="nav-item">
                <Link className="nav-category" to="/show-all-product/5">
                  <i className="fas fa-headphones-alt" />
                  <span>Ph??? Ki???n ??i???n Tho???i</span>
                </Link>
                {/* <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
                  <li>
                    <Link to="/show-all-product">Apple</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Sammsung</Link>
                  </li>
                  <li>
                    <Link to="/show-all-product">Xiaomi</Link>
                  </li>
                </ul> */}
              </li>

              {/* <li className="nav-item">
                <Link className="nav-category" to="/show-all-product">
                  <i className="fas fa-laptop-house" />
                  <span>Smart home</span>
                </Link>
                <ul className="subnav">
                  <h4>H??ng s???n xu???t</h4>
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
              </li> */}
              <li className="nav-item">
                <Link className="nav-category" to="/flash-sale">
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
