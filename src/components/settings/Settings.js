import React from 'react';
import {Link} from 'react-router';
import '../../styles/Settings.css';
import Header from '../common/Header';

const CurrUser = {
  "username": "agent",
  "password": "1234",
  "name": "bob",
  "age": "1",
  "phone": "123456",
  "city": "San Diego",
  "ethnicity": "Asian",
  "profession": "Bookworm",
  "description": "I am cool.",
  "experience": "None.",
  "userType": "agent"
};

class Settings extends React.Component {


  constructor(props) {
    super(props);

    // let currUser = localStorage.getItem("currUser");
    //
    // if (currUser !== null) {
    //   currUser = JSON.parse(currUser);
    // }

    this.state = {
      currUser: CurrUser
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (

      <div id="settings">
        <Header/>
        <h3>Account Settings</h3>
        <form id="settings_form">
          <label htmlFor="name">Full name</label><br/>
          <input className="max_width" type="text" id="name" name="name" placeholder="Full Name" value={this.state.currUser.name} onChange={this.handleInputChange}/><br/>

          <label htmlFor="password">Password</label><br/>

          <input className="max_width" type="password" id="password" name="password" placeholder="Password"/><br/>

          <label htmlFor="password_repeat">Repeat Password</label><br/>
          <input className="max_width" type="password" id="password_repeat" name="password_repeat"
                 placeholder="Re-enter New Password"/><br/>

          <label htmlFor="language">Language</label><br/>
          <select className="max_width" id="language" name="Language">
            <option value="eng">English</option>
          </select>

          <br/><br/>

          <input className="submit" type="submit" value="Update"/>
        </form>

      </div>
    );
  }
}

export default Settings;
