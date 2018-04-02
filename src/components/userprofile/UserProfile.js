import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {Link} from 'react-router';
import Header from '../common/Header';
import UserProfileForm from './UserProfileForm'

class UserProfile extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      accounts: props.accounts,
      currUser: Object.assign({}, props.currUser)
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
    this.setState({currUser: Object.assign({}, nextProps.currUser)});
  }

  handleInputChange(event) {
    const field = event.target.name;
    let form = Object.assign({}, this.state.currUser);
    form[field] = event.target.value;
    this.setState({currUser: form});
  }

  onSubmit(event) {

  }

  render() {
    return (
      <div>
        <Header/>
        <UserProfileForm currUser={this.state.currUser} handleInputChange={this.handleInputChange} onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

UserProfile.propTypes = {
  accounts: PropTypes.array.isRequired,
  currUser: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

UserProfile.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    currUser: state.currUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
