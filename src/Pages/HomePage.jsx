import React from 'react';

import './HomePage.scss';
import Directory from '../Components/Directory/Directory';

const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <div className="directory-menu">
      <Directory />
    </div>
  </div>
);

export default HomePage;
