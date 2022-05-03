import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";
import "../profile.css";
import StorageKeys from "../../../constants";
import FormInput from "./components/FormInput";
import userApi from '../../../api/userApi'

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
  const handleSaveBtn = async (formValue) => {
    try {
      // const configFormValue = {
      //   id: loggedInUser.id,
      //   email: formValue.email !== "" ? formValue.email : loggedInUser.email,
      //   name: formValue.name !== "" ? formValue.name : loggedInUser.name,
      //   phone_number:
      //     formValue.phone !== "" ? formValue.phone : loggedInUser.phone_number,
      //   address:
      //     formValue.user_address !== ""
      //       ? formValue.user_address
      //       : loggedInUser.address,
      //   ava: formValue.user_ava  ? formValue.user_ava : loggedInUser.ava,
      //   status: loggedInUser.status,
      //   role: loggedInUser.status,
      //   email_verified_at: loggedInUser.email_verified_at,
      // };
      let configFormValue = {
        id: loggedInUser.id,
        status: loggedInUser.status,
        role: loggedInUser.status,
        ...formValue
      }
      const response = await userApi.updateUser(configFormValue);
      configFormValue = {...JSON.parse(localStorage.getItem('userLogged')),...configFormValue}
      localStorage.setItem(StorageKeys.USER, JSON.stringify(configFormValue));
      notify("success", "Cập nhật thông tin thành công !");
    } catch (e) {
      // console.log(Object.values( e.response.data.message).join("\n"));
      notify("error", Object.values( e.response.data.message).join('\n'));
      
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
