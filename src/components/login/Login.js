import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as userActions from '../../actions/userActions';
import * as loginActions from '../../actions/loginActions';
import '../../styles/Login.css';
import Header from '../../components/common/BlankHeader';
import LoginForm from './LoginForm';

class Login extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      accounts: props.accounts,
      username: '',
      password: '',
      form: {},
      errors: {},
      saving: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
  }

  handleInputChange(event) {
    const field = event.target.name;
    let form = Object.assign({}, this.state.form);
    form[field] = event.target.value;
    this.setState({form: form});
  }

  onSubmit(event) {
    event.preventDefault();
    let userFound = false;
    let existingUsers = this.state.accounts;

    let index = 0;

    while (existingUsers[index]) {
      let currUser = existingUsers[index];
      if (currUser.username.toLowerCase() === this.state.form.username.toLowerCase()) {
        userFound = true;
        if (currUser.password === this.state.form.password) {

          this.props.actions.login(currUser);

          if (currUser.userType === "agent") {
            this.context.router.push('/agentProfile');
          } else {
            this.context.router.push('/userProfile');
          }
        } else {
          window.alert("Incorrect password!");
        }

        return true;
      }

      index++;
    }

    window.alert("Username not found!");

    return false;
  }

  render() {
    return (

      <div>
        <Header/>
        <h3>Hummingbird</h3>

        <img id="logo" src={require('../../images/hummingbird.svg')} alt=""/>

        <LoginForm form={this.state.form} handleInputChange={this.handleInputChange} onSubmit={this.onSubmit}/>

        <br/>
        <Link to="/agentsignup" activeClassName="active">Agent Registration</Link>
        <br/>
        <br/>
        <Link to="/usersignup" activeClassName="active">User Registration</Link>
      </div>
    );
  }
}

Login.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

Login.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions, loginActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
