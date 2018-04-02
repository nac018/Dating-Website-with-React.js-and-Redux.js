import React, {PropTypes} from 'react';
import '../../styles/Header.css'; //Webpack can import CSS files too!
import { Link, IndexLink } from 'react-router';

const Header = () => {
  // let currUser = localStorage.getItem("currUser");
  //
  // if (currUser !== null) {
  //   currUser = JSON.parse(currUser);
  // }
  //
  // let homePath = "";
  //
  // if(currUser.userType === "user") {
  //   homePath = "/userProfile";
  // } else {
  //   homePath = "/agentProfile";
  // }

  return (
    <div className={"no_pad"}>
      <div className="menu">
        <div className="logo">
          <Link to={"/agentProfile"}><img className="img_btn logo right" src={require('../../images/hummingbird_white.svg')} alt=""/></Link>
        </div>
        <div className="menu_option">
          <Link to="/settings"><img className="img_btn logo right nav_btn" src={require('../../images/user.svg')} alt="Settings"/></Link>
        </div>
        <div className="menu_option">
          <Link to="/chat"><img className="img_btn logo right nav_btn" src={require('../../images/envelope.svg')} alt="Messages"/></Link>
        </div>
        <div className="menu_option">
          <Link to="/agentmanagement"><img className="img_btn logo right nav_btn" src={require('../../images/clipboards.svg')} alt="Messages"/></Link>
        </div>

        <div className="menu_option">
          <Link to="/agent"><img className="img_btn logo right nav_btn" src={require('../../images/magnifier.svg')} alt="Messages"/></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
