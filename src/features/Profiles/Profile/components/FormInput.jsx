import React, { useState } from "react";
import PropTypes from "prop-types";

FormInput.propTypes = {
  loggedInUser: PropTypes.object,
  onSaveBtn: PropTypes.func,
};

function FormInput({ loggedInUser, onSaveBtn = null }) {
  const initialFormData = Object.freeze({
    id:"",
    email: "",
    join_date: "",
    name: "",
    phone: "",
    user_address: "",
    user_ava: "",
    password: "",
    user_status: 1,
    user_type: 3,
  });

  const [formValue, setFormValue] = useState(initialFormData);
  const [showInputEmail, setShowInputEmail] = useState(false);
  const [showInputPhone, setShowInputPhone] = useState(false);
  const [showInputAddress, setShowInputAddress] = useState(false);

  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  //  handle Save Form , send formValue to Profile component
  const handleSaveClick = (e) => {
    e.preventDefault();
    if (!onSaveBtn) return;
    onSaveBtn(formValue);
    Array.from(document.querySelectorAll("input[name]")).forEach((input) => {
      input.value = "";
    });
    setFormValue(initialFormData);
    setShowInputEmail(false);
    setShowInputPhone(false);
    setShowInputAddress(false);
  };
  // turn on input when click btn Thay doi
  const handleEditClick = (e) => {
    e.preventDefault();
    const el = e.target.className;
    if (el === "btn-edit-email") {
      setShowInputEmail(true);
    } else if (el === "btn-edit-phone") {
      setShowInputPhone(true);
    } else if (el === "btn-edit-address") {
      setShowInputAddress(true);
    }
  };

  // turn off input when click btn Lưu
  const handleSaveInput = (e) => {
    e.preventDefault();
    const el = e.target.className;
    if (el === "btn-save-email") {
      setShowInputEmail(false);
    } else if (el === "btn-save-phone") {
      setShowInputPhone(false);
    } else if (el === "btn-save-address") {
      setShowInputAddress(false);
    }
  };

  return (
    <div className="profile__content-edit">
      <form style={{ width: "60%" }}>
        <div className="form-item">
          <div className="form__item-left">
            <label>Tên</label>
          </div>
          <div className="form__item-right">
            <div className="input__wrapper">
              <input
                type="text"
                name="name"
                value={formValue?.name}
                placeholder={loggedInUser.name}
                className="input__name"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          </div>
        </div>
        <div className="form-item">
          <div className="form__item-left">
            <label>Email</label>
          </div>
          <div className="form__item-right">
            <div className="form__user-email">
              {showInputEmail ? (
                <input
                  className="form-control"
                  id="email"
                  type="text"
                  name="email"
                  value={formValue?.email || ""}
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <div className="user-email">{loggedInUser?.email}</div>
              )}

              {showInputEmail ? (
                <button
                  className="btn-save-email"
                  onClick={(e) => handleSaveInput(e)}
                >
                  Lưu
                </button>
              ) : (
                <button
                  className="btn-edit-email"
                  onClick={(e) => handleEditClick(e)}
                >
                  Thay đổi
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="form-item">
          <div className="form__item-left">
            <label>Số Điện Thoại</label>
          </div>
          <div className="form__item-right">
            <div className="form__user-phone">
              {/* <div className="user-phone">0332794082</div> */}
              {/* <button className="btn-edit-phone">Thay đổi</button> */}

              {showInputPhone ? (
                <input
                  className="form-control"
                  id="phone"
                  type="text"
                  name="phone"
                  value={formValue?.phone || ""}
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <div className="user-phone">{loggedInUser.phone}</div>
              )}

              {showInputPhone ? (
                <button
                  className="btn-save-phone"
                  onClick={(e) => handleSaveInput(e)}
                >
                  Lưu
                </button>
              ) : (
                <button
                  className="btn-edit-phone"
                  onClick={(e) => handleEditClick(e)}
                >
                  Thay đổi
                </button>
              )}
            </div>
          </div>
        </div>

        {/* address */}
        <div className="form-item">
          <div className="form__item-left">
            <label>Địa chỉ</label>
          </div>
          <div className="form__item-right">
            <div className="form__user-phone">
              {showInputAddress ? (
                <input
                  className="form-control"
                  id="user_address"
                  type="text"
                  name="user_address"
                  value={formValue?.user_address || ""}
                  onChange={(e) => handleInputChange(e)}
                />
              ) : (
                <div className="user-phone">{loggedInUser.user_address}</div>
              )}

              {showInputAddress ? (
                <button
                  className="btn-save-address"
                  onClick={(e) => handleSaveInput(e)}
                >
                  Lưu
                </button>
              ) : (
                <button
                  className="btn-edit-address"
                  onClick={(e) => handleEditClick(e)}
                >
                  Thay đổi
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="form-item">
          <div className="form__item-left">
            <label>Ngày Tham Gia</label>
          </div>
          <div className="form__item-right">
            <div className="form__join-date">{loggedInUser?.join_date}</div>
          </div>
        </div>
        <div className="form-item">
          <div className="form__item-left"></div>
          <div className="form__item-right">
            <button
              className="form__btn-save btn btn--primary "
              onClick={handleSaveClick}
            >
              Lưu
            </button>
          </div>
        </div>
      </form>
      <div className="profile__content-upload-img">
        <div className="box-upload-img">
          <div>
            <img
              src={
                loggedInUser?.user_ava ||
                "https://static.thenounproject.com/png/363640-200.png"
              }
              alt=""
              className="img_upload"
            />
            <span className="icon-add">
              <i className="fas fa-plus"></i>
            </span>
          </div>

          <input
            className="form-control mt-2 mb-3 input_link-img"
            id="user_ava"
            type="text"
            placeholder="URL image"
            name="user_ava"
            value={
              formValue.user_ava ? formValue.user_ava : loggedInUser.user_ava
            }
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default FormInput;
