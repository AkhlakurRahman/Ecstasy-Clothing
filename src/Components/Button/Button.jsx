import React from 'react';

import './Button.scss';

const Button = ({ children, googleSignIn, ...otherProps }) => {
  return (
    <div>
      <button
        className={`${googleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
      >
        {googleSignIn ? <i className="fab fa-google google" /> : null}{' '}
        {children}
      </button>
    </div>
  );
};

export default Button;
