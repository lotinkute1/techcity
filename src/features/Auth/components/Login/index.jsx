import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { unwrapResult } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userApi from '../../../../api/userApi';
import { login, loginWithGoogle } from '../../userSlice';
import LoginForm from '../LoginForm';

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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [snakeBar, setSnakeBar] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
    severity: 'success',
    message: 'Đăng nhập thành công',
  });
  const { vertical, horizontal, open, message, severity } = snakeBar;
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnakeBar({ ...snakeBar, open: false });
  };

  const handleSubmit = async (formValue) => {
    try {
      const action = login({
        email: formValue.email,
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
        severity: 'success',
        message: 'Đăng nhập thành công',
      });
      setTimeout(()=>{
        console.log("Fail");
        window.location.reload()
      },1000)
    } catch (error) {
      setSnakeBar({
        ...snakeBar,
        open: true,
        severity: 'error',
        message: 'Email hoặc mật khẩu không chính xác',
      });
    }
  };
  const navigate = useNavigate();
  const handleLoginWithGoogle = async (tokenId) => {
    try {
      const res = await userApi.getUserInGoogle(tokenId);
      const { data } = res;
      const formValueProfileUser = {
        email: data.email,
        name: data.name,
        ava: data.picture,
      };
      const action = loginWithGoogle(formValueProfileUser);
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
        severity: 'success',
        message: 'Đăng nhập thành công',
      });
      setTimeout(()=>{
        navigate('/')
      },1000)
    } catch (error) {
      setSnakeBar({
        ...snakeBar,
        open: true,
        severity: 'error',
        message: 'Đăng nhập không thành công',
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
            width: '240px',
            fontSize: '14px',
          }}
        >
          {message}
        </Alert>
      </Snackbar>

      <LoginForm
        handleClickOpenRegister={handleClickOpenRegister}
        handleCloseLogin={handleCloseLogin}
        onSubmit={handleSubmit}
        handleLoginWithGoogle={handleLoginWithGoogle}
      />
    </>
  );
}

export default Login;
