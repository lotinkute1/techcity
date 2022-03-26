import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import {
  equalTo,
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
} from "firebase/database";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import GetUsersData from "../../../../api/GetUsersData";
import LoginForm from "../LoginForm";
import StorageKeys from "../../../../constants";
import userDB from "../../../../api/mockdata/userLogin.json";

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
  const users = GetUsersData();

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
      let currentUser;
      const data = users.forEach((user) => {
        if (
          formValue.identifier === user.email &&
          formValue.password === user.password &&
          user.user_status !== 0
        ) {
          currentUser = user;
        }
      });
      console.log(currentUser);
      if (currentUser) {
        localStorage.setItem(StorageKeys.USER, JSON.stringify(currentUser));

        // close Login
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
      } else {
        setSnakeBar({
          ...snakeBar,
          open: true,
          severity: "error",
          message: "Email hoặc mật khẩu không chính xác",
        });
      }
    } catch (error) {
      console.log("Fail to login", error);
    }
  };

  // region login
  const getUser = () => {
    return userDB;
  };
  // handle submit with mockdata
  const handleSubmitDB = async (formValue) => {
    const userLogin = await getUser();
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
