import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as userActions from '../../actions/userActions';
import '../../styles/Form.css';
import toastr from 'toastr';
import AgentSignupForm from './AgentSignupForm';

class AgentSignUp extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      accounts: props.accounts,
      form: {
        userType: "agent",
        image_url: "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png",
        ratings: []
      },
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

  /*
   * Iterate over existing users to check if user already exists
   */
  userExists(user) {
    let existingUsers = this.state.accounts;

    if (existingUsers != null) {

      let index = 0;

      while (existingUsers[index]) {
        let currUser = existingUsers[index];
        if (currUser.username.toLowerCase() === user.username.toLowerCase()) {
          return true;
        }
        index++;
      }

      this.setState({saving: true});

      this.props.actions.saveAccount(user)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({saving: false});
        });

    }

    return false;
  }

  redirect() {
    this.setState({saving: false});
    this.context.router.push('/login');
  }

  onSubmit(event) {
    event.preventDefault();

    if (this.userExists(this.state.form) === true) {
      window.alert("Username already taken!");
    } else {
      window.alert("Successfully registered account!");
      this.context.router.push("/login");
    }
  }

  render() {
    return (
      <AgentSignupForm form={this.state.form} handleInputChange={this.handleInputChange} onSubmit={this.onSubmit}/>
    );
  }

}

AgentSignUp.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

AgentSignUp.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentSignUp);
