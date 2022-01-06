import React from "react";
import { getDatabase, ref, remove, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "../profile.css";
import StorageKeys from "../../../constants";
import FormInput from "./components/FormInput";

Profile.propTypes = {};

function Profile(props) {
  const loggedInUser = JSON.parse(localStorage.getItem(StorageKeys.USER));
  const notify = (type, message) =>
    toast[type](message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const handleSaveBtn = (formValue) => {
    console.log(formValue);
    const db = getDatabase();
    const configFormValue = {
      ...formValue,
      email: formValue.email !== "" ? formValue.email : loggedInUser.email,
      name: formValue.name !== "" ? formValue.name : loggedInUser.name,
      phone: formValue.phone !== "" ? formValue.phone : loggedInUser.phone,
      user_address:
        formValue.user_address !== ""
          ? formValue.user_address
          : loggedInUser.user_address,
      user_ava:
        formValue.user_ava !== "" ? formValue.user_ava : loggedInUser.user_ava,
      join_date:
        formValue.join_date !== ""
          ? formValue.join_date
          : loggedInUser.join_date,
      password: loggedInUser.password,
    };
    if (loggedInUser.id) {
      set(ref(db, "/users/" + loggedInUser.id), {
        ...configFormValue,
      });
      localStorage.setItem(StorageKeys.USER, JSON.stringify(configFormValue));

      notify("success", "Cập nhật thông tin thành công !");
    }
  };

  return (
    <>
      <div className="main">
        <div className="app__container">
          <div className="grid">
            <div className="grid__row app__content">
              <div className="grid__column-2">
                <div className="profile__user-info">
                  <img
                    className="profile__user-img"
                    src={
                      loggedInUser?.user_ava ||
                      "https://static.thenounproject.com/png/363640-200.png"
                    }
                    alt=""
                  />
                  <div className="profile__user-description">
                    <div className="profile__user-name">
                      {loggedInUser?.name}
                    </div>
                    <div className="profile__user-edit">Sửa hồ sơ</div>
                  </div>
                </div>
                <ul className="profile__sub-nav-list">
                  <li id="my-profile" className="profile__sub-nav-item">
                    <div className="profile__sub-nav-header">
                      <i className="fas fa-user profile__sub-nav-img"></i>
                      <div className="profile__sub-nav-name">
                        Tài Khoản Của Tôi
                      </div>
                    </div>
                    <ul className="profile__sub-nav-body">
                      <li className="profile__sub-nav-body-item ">
                        <a href="profile.html">Hồ Sơ</a>
                      </li>
                      <li className="profile__sub-nav-body-item">
                        <a href="address.html">Địa Chỉ</a>
                      </li>
                      <li className="profile__sub-nav-body-item">
                        <a href="password.html">Đổi Mật Khẩu</a>
                      </li>
                    </ul>
                  </li>
                  <li className="profile__sub-nav-item">
                    <div className="profile__sub-nav-header">
                      <i className="fas fa-history profile__sub-nav-img"></i>
                      <a href="cart.html" className="profile__sub-nav-name">
                        Lịch Sử Mua Hàng
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="grid__column-10">
                <div className="profile__content profile__content-active">
                  <div className="profile__content-header">
                    <h1 className="profile__content-header-title">
                      Hồ Sơ Của Tôi
                    </h1>
                    <div className="profile__content-header-des">
                      Quản lý thông tin hồ sơ để bảo mật tài khoản
                    </div>
                  </div>

                  <FormInput
                    loggedInUser={loggedInUser}
                    onSaveBtn={handleSaveBtn}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Profile;
