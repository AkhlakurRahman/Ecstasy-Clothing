import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../utils/firebase';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="navigation">
        <Link className="nav-item" to="/shop">
          SHOP
        </Link>
        <Link className="nav-item" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="nav-item" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="nav-item" to="/sign-in">
            SIGNIN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
