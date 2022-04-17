import React from "react";
import PropTypes from "prop-types";
import { GoogleLogin } from "react-google-login";

const clientId = "99562578495-ufvv74ik8c3tia6aon38pdepdf533dhc.apps.googleusercontent.com";

LoginWithGoogle.propTypes = {};

function LoginWithGoogle(props) {
  const onSuccess = (res) => {
    console.log('onSuccess',res);
  };
  const onFailure = (res) =>{
      console.log('onFailure',res);
  }

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
}

export default LoginWithGoogle;