import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { makeStyles } from "@mui/styles";
import { LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";
import LoginWithGoogle from "../LoginWithGoogle";

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
  handleCloseLogin: PropTypes.func,
  handleClickOpenRegister: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  root: {},

  progress: {
    position: "absolute",
    top: "6px",
    left: 0,
    right: 0,
  },
}));

function LoginForm({
  handleCloseLogin = null,
  handleClickOpenRegister = null,
  onSubmit,
}) {
  const classes = useStyles();

  const schema = yup
    .object({
      identifier: yup
        .string()
        .required("Vui lòng nhập email của bạn")
        .email("Địa chỉ email không hợp lệ"),

      password: yup.string().required("Vui lòng nhập mật khẩu"),
    })
    .required();

  const form = useForm({
    mode: "onBlur",

    defaultValues: {
      identifier: "",
      password: "",
    },
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    await onSubmit(values);
  };
  const { isSubmitting } = form.formState;

  return (
    <div className="modal">
      <div onClick={handleCloseLogin} className="modal__overlay"></div>
      <div className="modal__body">
        <div className="auth-form">
          {isSubmitting && <LinearProgress className={classes.progress} />}
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="auth-form__container"
          >
            <div className="auth-form__header">
              <div className="auth-form__heading">Đăng nhập</div>
              <span
                onClick={handleClickOpenRegister}
                className="authform__switch-btn"
              >
                Đăng kí
              </span>
            </div>
            <div className="auth-form__form">
              <div className="auth-form__group">
                <InputField name="identifier" label="Email" form={form} />
              </div>
              <div className="auth-form__group">
                <PasswordField name="password" label="Mật khẩu" form={form} />
              </div>
            </div>
            <div className="auth-form__aside">
              <div className="auth-form__help">
                <Link
                  to="#"
                  className="auth-form__help-link auth-form__help-forgot"
                >
                  Quên mật khẩu
                </Link>
                <span className="auth-form__help-separate" />
                <Link to="#" className="auth-form__help-link">
                  Cần trợ giúp?
                </Link>
              </div>
            </div>
            <div className="auth-form__controls">
              <button
                onClick={handleCloseLogin}
                className="btn-2 btn-2--normal"
              >
                TRỞ LẠI
              </button>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn-2 btn-2--primary"
              >
                ĐĂNG NHẬP
              </button>
            </div>
          </form>

          <div className="auth-form__socials">
            {/* <Link
              className="auth-form__socials-google btn-2 btn--size-s btn--with-icon"
              to="#"
            >
              <i className="auth-form__socials-icon fab fa-google" />
              <span className="auth-form__socials--title">
                Kết nối với Google
              </span>
            </Link> */}
            <LoginWithGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
