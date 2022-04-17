import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import userApi from "../../../../api/userApi";
import RegisterForm from "../RegisterForm";


Register.propTypes = {
  handleCloseRegister: PropTypes.func,
  handleClickOpenLogin: PropTypes.func,
  closeDialog: PropTypes.func,
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Register({ handleCloseRegister = null, handleClickOpenLogin = null }) {
  useEffect(()=>{
    document.body.style.overflow = 'hidden';
    return ()=>{
      document.body.style.overflow = 'unset';
    }
  },[])

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
    const infoUser = {
      email: formValue.email,
      name: formValue.fullName,
      password: formValue.password,
      phone_number: formValue.phoneNumber,
    };
    try {
      const response = await userApi.register(infoUser);
      if (response) {
        setSnakeBar({
          ...snakeBar,
          open: true,
          severity: "success",
          message: "Đăng kí thành công",
        });
      }
    } catch (error) {
      setSnakeBar({
        ...snakeBar,
        open: true,
        severity: "error",
        message: "Email hoặc số điện thoại bị trùng",
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
