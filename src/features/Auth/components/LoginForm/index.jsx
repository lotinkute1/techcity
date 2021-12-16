import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import InputField from "../../../../components/form-control/InputField";
import PasswordField from "../../../../components/form-control/PasswordField";
import { LinearProgress, makeStyles } from "@material-ui/core";

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
    defaultValues: {
      identifier: "",
      password: "",
    },
    reValidateMode: "onSubmit",
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
                <a href className="auth-form__help-link auth-form__help-forgot">
                  Quên mật khẩu
                </a>
                <span className="auth-form__help-separate" />
                <a href className="auth-form__help-link">
                  Cần trợ giúp?
                </a>
              </div>
            </div>
            <div className="auth-form__controls">
              <button onClick={handleCloseLogin} className="btn btn--normal">
                TRỞ LẠI
              </button>
              <button
                disabled={isSubmitting}
                type="submit"
                className="btn btn--primary"
              >
                ĐĂNG NHẬP
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

export default LoginForm;