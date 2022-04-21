import React from "react";
import PropTypes from "prop-types";
import { GoogleLogout } from "react-google-login";

LogoutWithGoogle.propTypes = {};
const clientId =
  "99562578495-ufvv74ik8c3tia6aon38pdepdf533dhc.apps.googleusercontent.com";

function LogoutWithGoogle(props) {
  const onSuccess = () => {
    alert("Logout successfully !!!");
  };
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}

export default LogoutWithGoogle;
