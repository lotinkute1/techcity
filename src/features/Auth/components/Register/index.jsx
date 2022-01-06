import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../RegisterForm";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { logout } from "../../userSlice";
import { v4 as uuidv4 } from "uuid";
import GetUsersData from "../../../../api/GetUsersData";

import {
  equalTo,
  getDatabase,
  limitToLast,
  onValue,
  orderByChild,
  query,
  ref,
  set,
} from "firebase/database";

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
  const users = GetUsersData();
  const userEmailList = users.map((user) => user.email);

  const getDateNow = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();

    return (today = dd + "/" + mm + "/" + yyyy);
  };

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
  const handleSubmit = async (formValue) => {
    try {
      const db = getDatabase();
      const hasEmail = userEmailList.includes(formValue.email);
      if (!hasEmail) {
        set(ref(db, "users/" + uuidv4()), {
          name: formValue.fullName.trim(),
          email: formValue.email.trim(),
          password: formValue.password.trim(),
          join_date: getDateNow(),
        });

        setSnakeBar({
          ...snakeBar,
          open: true,
          severity: "success",
          message: "Đăng kí thành công",
        });
      } else {
        setSnakeBar({
          ...snakeBar,
          open: true,
          severity: "error",
          message: "Email bị trùng",
        });
      }
    } catch (error) {
      console.log("Fail to register", error);
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
