import React from 'react';

import './Authentication.scss';
import SignIn from '../../Components/Authentication/SignIn/SignIn';
import SignUp from '../../Components/Authentication/SignUp/SignUp';

const Authentication = () => {
  return (
    <div className="authentication">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
