import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, Route, Routes } from "react-router-dom";

import Profile from "./Profile";
import PurchaseHistory from "./PurchaseHistory";
import StorageKeys from "../../constants";

ProfileFeature.propTypes = {};

function ProfileFeature(props) {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );  
  useEffect(() => {
    const localStorageSetHandler = function (e) {
      setTimeout(() => {
        setLoggedInUser(JSON.parse(localStorage.getItem(StorageKeys.USER)));
      }, 1000);
    };
    document.addEventListener("itemInserted", localStorageSetHandler);
  },[])

  return (
    <div className="main">
      <div className="app__container">
        <div className="grid">
          <div className="grid__row app__content">
            <div className="grid__column-2">
              <div className="profile__user-info">
                <img
                  className="profile__user-img"
                  src={
                    loggedInUser?.ava ||
                    "https://static.thenounproject.com/png/363640-200.png"
                  }
                  alt=""
                />
                <div className="profile__user-description">
                  <div className="profile__user-name">{loggedInUser?.name}</div>
                  {/* <div className="profile__user-edit">Sửa hồ sơ</div> */}
                </div>
              </div>
              <ul className="profile__sub-nav-list">
                <li id="my-profile" className="profile__sub-nav-item">
                  <div className="profile__sub-nav-header">
                    <i className="fas fa-user profile__sub-nav-img"></i>
                    <NavLink to="profile" className="profile__sub-nav-name">
                      Tài Khoản Của Tôi
                    </NavLink>
                  </div>
                  {/* <ul className="profile__sub-nav-body">
                      <li className="profile__sub-nav-body-item ">
                        <NavLink to="/profile">Hồ Sơ</NavLink>
                      </li>
                      <li className="profile__sub-nav-body-item">
                        <NavLink to="/address">Địa Chỉ</NavLink>
                      </li>
                      <li className="profile__sub-nav-body-item">
                        <NavLink to="/change-password">Đổi Mật Khẩu</NavLink>
                      </li>
                    </ul> */}
                </li>
                <li className="profile__sub-nav-item">
                  <div className="profile__sub-nav-header">
                    <i className="fas fa-history profile__sub-nav-img"></i>
                    <NavLink
                      to="purchase-history"
                      className="profile__sub-nav-name"
                    >
                      Lịch Sử Mua Hàng
                    </NavLink>
                  </div>
                </li>
              </ul>
            </div>

            <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="purchase-history" element={<PurchaseHistory />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileFeature;
