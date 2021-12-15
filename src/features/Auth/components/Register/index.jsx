import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../userSlice";
import RegisterForm from "../RegisterForm";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { logout } from "../../userSlice";

Register.propTypes = {
  handleCloseRegister: PropTypes.func,
  handleClickOpenLogin: PropTypes.func,
  closeDialog: PropTypes.func,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Register({ handleCloseRegister = null, handleClickOpenLogin = null }) {
  const dispatch = useDispatch();
  const [snakeBar, setSnakeBar] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
    severity: "success",
    message: "Đăng kí thành công",
  });
  const { vertical, horizontal, open, message, severity } = snakeBar;
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnakeBar({ ...snakeBar, open: false });
  };
  const handleSubmit = async (values) => {
    try {
      values.username = values.email;
      const action = register(values);
      const user = await dispatch(action).unwrap();
      dispatch(logout());

      if (handleCloseRegister) {
        setTimeout(() => {
          handleCloseRegister();
        }, 2000);
      }
      setSnakeBar({
        ...snakeBar,
        severity: "success",
        message: "Đăng kí thành công",
        open: true,
      });
    } catch (error) {
      setSnakeBar({
        ...snakeBar,
        open: true,
        severity: "error",
        message: "Đăng kí không thành công",
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
      <RegisterForm
        handleCloseRegister={handleCloseRegister}
        handleClickOpenLogin={handleClickOpenLogin}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Register;
