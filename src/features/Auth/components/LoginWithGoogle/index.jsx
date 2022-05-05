import React from 'react';
import PropTypes from 'prop-types';
import { GoogleLogin } from 'react-google-login';
import { clientId } from '../../../../constants/index';

LoginWithGoogle.propTypes = {
  handleLoginWithGoogle: PropTypes.func,
};

function LoginWithGoogle({ handleLoginWithGoogle }) {
  const onSuccess = (res) => {
    const { tokenId } = res;
    if (tokenId) handleLoginWithGoogle(tokenId);
  };
  const onFailure = (res) => {
    console.log('onFailure', res);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
}

export default LoginWithGoogle;
