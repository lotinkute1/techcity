import React, { useEffect, useState } from "react";
import { getDatabase, ref, remove, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "../profile.css";
import StorageKeys from "../../../constants";
import FormInput from "./components/FormInput";

Profile.propTypes = {};

function Profile(props) {
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem(StorageKeys.USER))
  );

  console.log("Profile", loggedInUser);

  useEffect(() => {
    const localStorageSetHandler = function (e) {
      setTimeout(() => {
        //code của m sẽ ở trong cái setTimeout này

        //thường thì m sẽ setState lại nếu local thay đổi như dưới
        setLoggedInUser(JSON.parse(localStorage.getItem(StorageKeys.USER)));
      }, 1000);
    };
    document.addEventListener("itemInserted", localStorageSetHandler);
  }, []);

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
      id:loggedInUser.id,
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
    <div className="grid__column-10">
      <div className="profile__content profile__content-active">
        <div className="profile__content-header">
          <h1 className="profile__content-header-title">Hồ Sơ Của Tôi</h1>
          <div className="profile__content-header-des">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </div>
        </div>

        <FormInput loggedInUser={loggedInUser} onSaveBtn={handleSaveBtn} />
      </div>
    </div>
  );
}

export default Profile;
