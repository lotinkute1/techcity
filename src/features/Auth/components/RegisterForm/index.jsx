import { yupResolver } from "@hookform/resolvers/yup";
import {  makeStyles } from "@mui/styles";
import { LinearProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  root: {},

  progress: {
    position: "absolute",
    top: "6px",
    left: 0,
    right: 0,
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
  handleCloseRegister: PropTypes.func,
  handleClickOpenLogin: PropTypes.func,
};

function RegisterForm({
  onSubmit,
  handleCloseRegister = null,
  handleClickOpenLogin = null,
}) {
  const classes = useStyles();
  const schema = yup
    .object({
      fullName: yup
        .string()
        .required("Vui lòng nhập tên đầy đủ của bạn")
        .test("should has at least two words", "Nhập ít nhất 2 từ", (value) => {
          return value.split(" ").length >= 2;
        }),

      email: yup
        .string()
        .required("Vui lòng nhập email của bạn")
        .email("Địa chỉ email không hợp lệ"),

      password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .matches(
          /^.*(?=.{6,})((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Vui lòng nhập ít nhất 6 kí tự và kí tự in hoa"
        ),
      retypePassword: yup
        .string()
        .required("Vui lòng nhập lại mật khẩu")
        .oneOf([yup.ref("password")], "Nhập lại mật khẩu không trùng khớp"),
    })
    .required();

  const form = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      retypePassword: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="modal">
      <div onClick={handleCloseRegister} className="modal__overlay"></div>
      <div className="modal__body">
        <div className="auth-form">
          {isSubmitting && <LinearProgress className={classes.progress} />}
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="auth-form__container"
          >
            <div className="auth-form__header">
              <div className="auth-form__heading">Đăng kí</div>
              <span
                onClick={handleClickOpenLogin}
                className="authform__switch-btn"
              >
                Đăng nhập
              </span>
            </div>
            <div className="auth-form__form">
              <div className="auth-form__group">
                <InputField name="fullName" label="Tên đầy đủ" form={form} />
              </div>
              <div className="auth-form__group">
                <InputField name="email" label="Email" form={form} />
              </div>
              <div className="auth-form__group">
                <PasswordField name="password" label="Mật khẩu" form={form} />
              </div>
              <div className="auth-form__group">
                <PasswordField
                  name="retypePassword"
                  label="Nhập lại mật khẩu"
                  form={form}
                />
              </div>
            </div>
            <div className="auth-form__aside">
              <p className="auth-form__policy-text">
                Bằng việc đăng kí, bạn đã đồng ý với Shopee về{" "}
                <a href className="auth-form__text-link">
                  Điều khoản dịch vụ
                </a>{" "}
                &amp;
                <a href className="auth-form__text-link">
                  {" "}
                  Chính sách bảo mật
                </a>
              </p>
            </div>
            <div className="auth-form__controls">
              <button onClick={handleCloseRegister} className="btn btn--normal">
                TRỞ LẠI
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                // onClick={handleCloseRegister}
                className="btn btn--primary"
              >
                ĐĂNG KÍ
              </button>
            </div>
          </form>
          <div className="auth-form__socials">
            <a
              href
              className="auth-form__socials-google btn btn--size-s btn--with-icon"
            >
              <i className="auth-form__socials-icon fab fa-google" />
              <span className="auth-form__socials--title">
                Kết nối với Google
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
