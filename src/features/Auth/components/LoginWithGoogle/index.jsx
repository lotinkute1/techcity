import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";

LoginWithGoogle.propTypes = {};

function LoginWithGoogle(props) {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogin
      clientId="99562578495-ufvv74ik8c3tia6aon38pdepdf533dhc.apps.googleusercontent.com"
      buttonText="Login with google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default LoginWithGoogle;
