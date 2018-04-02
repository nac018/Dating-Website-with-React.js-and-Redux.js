import React, {PropTypes} from 'react';
import '../../styles/Header.css'; //Webpack can import CSS files too!
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <div className={"no_pad"}>
      <div className="menu"/>
    </div>
  );
};

export default Header;
