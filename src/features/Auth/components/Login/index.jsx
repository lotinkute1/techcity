import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../userSlice";
import LoginForm from "../LoginForm";

Login.propTypes = {
  handleCloseLogin: PropTypes.func,
  handleClickOpenRegister: PropTypes.func,
  closeDialog: PropTypes.func,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Login({ handleClickOpenRegister = null, handleCloseLogin = null }) {
  const dispatch = useDispatch();

  const [snakeBar, setSnakeBar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    severity: "success",
    message: "Đăng nhập thành công",
  });
  const { vertical, horizontal, open, message, severity } = snakeBar;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnakeBar({ ...snakeBar, open: false });
  };

  const handleSubmit = async (formValue) => {
    try {
      const action = login({
        email: formValue.identifier,
        password: formValue.password,
      });
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      if (handleCloseLogin) {
        setTimeout(() => {
          handleCloseLogin();
        }, 1000);
      }
      setSnakeBar({
        ...snakeBar,
        open: true,
        severity: "success",
        message: "Đăng nhập thành công",
      });
    } catch (error) {
      setSnakeBar({
        ...snakeBar,
        open: true,
        severity: "error",
        message: "Email hoặc mật khẩu không chính xác",
      });
    }
  };

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message={message}
        key={vertical + horizontal}
      >
        <Alert
          severity={severity}
          sx={{
            width: "240px",
            fontSize: "14px",
          }}
        >
          {message}
        </Alert>
      </Snackbar>

      <LoginForm
        handleClickOpenRegister={handleClickOpenRegister}
        handleCloseLogin={handleCloseLogin}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Login;
