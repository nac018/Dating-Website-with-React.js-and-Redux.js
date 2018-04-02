import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {browserHistory} from 'react-router';
import Header from '../../components/common/BlankHeader';
import toastr from 'toastr';
import UserSignupForm from './UserSignupForm';

class UserSignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: props.accounts,
      saving: false,
      form: {
        userType: 'user',
        image_url: "https://www.vccircle.com/wp-content/uploads/2017/03/default-profile.png"
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
  }

  redirect() {
    this.setState({saving: false});
    this.context.router.push('/login');
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

      while(existingUsers[index]) {
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

  onSubmit(event) {
    event.preventDefault();

    if (this.userExists(this.state.form) === true) {
      window.alert("Username already taken!");
    } else {
      window.alert("Successfully registered account!");
      browserHistory.push("/login");
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <UserSignupForm form={this.state.form} handleInputChange={this.handleInputChange} onSubmit={this.onSubmit}/>
      </div>
    );
  }

}

UserSignUp.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

UserSignUp.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSignUp);
