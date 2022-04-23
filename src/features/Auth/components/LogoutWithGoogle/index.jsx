import React from "react";
import PropTypes from "prop-types";
import { GoogleLogout } from "react-google-login";
import { clientId } from "../../../../constants/index";

LogoutWithGoogle.propTypes = {};

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
