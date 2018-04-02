import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as userActions from '../../actions/userActions';
import * as chatProgressActions from '../../actions/chatProgressActions';
import '../../styles/Chat.css';
import Header from '../common/Header';

class Chat extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      accounts: props.accounts,
      currUser: Object.assign({}, props.currUser),
      chatText: '',
      currFriend: {},
      saving: false
    };

    this.handleChatPress = this.handleChatPress.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
    this.setState({chatProgress: nextProps.chatProgress});
    this.setState({currUser: Object.assign({}, nextProps.currUser)});
  }

  updateCurrFriend(event, friend) {
    // let currUsername = this.state.currUser.username;
    // let friendUsername = this.state.accounts[index].username;
    //
    // if (currUsername === friendUsername) {
    //   return;
    // }

    this.setState({
      currFriend: friend
    });
  }

  handleChatPress(event) {
    if (event.key === 'Enter') {
      let message = {
        "users": [this.state.currUser.username, this.state.currFriend.username],
        "sender": this.state.currUser.username,
        "message": this.state.chatText,
        "timestamp": new Date().toLocaleTimeString()
      };

      this.setState({saving: true});

      this.props.actions.saveMessage(this.state.currUser.username, this.state.currFriend.username, message)
        .then(() => {
        });

      this.setState({
        chatText: ''
      });
    }
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  redirectToProgress(event, friend) {
    let friendUsername = friend.username;
    this.context.router.push('/progress/' + friendUsername);
  }

  render_friends_list() {
    return this.state.accounts.filter(account => account.username !== this.state.currUser.username)
      .map((mappedObject, index) => {
      return (
        <div key={index} className="user_select" onClick={() => this.updateCurrFriend(this, mappedObject)}>
          <img className="profile_photo" src={mappedObject.image_url} alt="profile_photo"/>
          <p className="friend_name">{mappedObject.name}</p>
          {/*<Link to={"/progress/" + this.state.currFriend.username}>*/}
          <button className="to_progress" onClick={() => this.redirectToProgress(this, mappedObject)}>...</button>
          {/*</Link>*/}
        </div>
      );
    });
  }

  render_messages() {

    return this.props.chatProgress.filter(progressChat => {
      if (progressChat) {
        let users = progressChat.users;
        if (users == null) {
          return false;
        }
        let currUsername = this.state.currUser.username;
        let friendUsername = this.state.currFriend.username;
        return (users.indexOf(currUsername) > -1 && users.indexOf(friendUsername) > -1);
      }

      return false;

    }).map((mappedObject, index) => {
      if (mappedObject.sender === this.state.currUser.username) {
        return (<div key={index} className="user_message">
          <img className="profile_photo_right" src={this.state.currUser.image_url} alt="Avatar"/>
          <p className="right">{mappedObject.message}</p>
          <span className="time-left">{mappedObject.timestamp}</span>
        </div>);
      } else {
        return (
          <div key={index} className="friend_message">
            <img className="profile_photo" src={this.state.currFriend.image_url} alt="Avatar"/>
            <p className="left">{mappedObject.message}</p>
            <span className="time-right">{mappedObject.timestamp}</span>
          </div>
        );
      }
    });

  }

  render() {
    return (
      <div className="customContainer">
        <Header/>

        <div className="top_bar no_pad flex">
          <div className="chat_left_panel_bar">
          </div>
          <div className="chat_right_panel_bar center">
            <p id="friend_name">{this.state.currFriend.name}</p>
          </div>
        </div>

        <div className="flex chatbox no_pad">
          <div id="friend_panel" className="chat_left_panel no_pad">
            {this.render_friends_list()}
          </div>
          <div className="chat_right_panel no_pad">
            <div id="chat">
              {this.render_messages()}
            </div>
            <div className="empty"/>
            <input name="chatText" id="chat_text" className="enter_text no_pad" placeholder="Type Here!"
                   value={this.state.chatText}
                   onChange={this.handleInputChange} onKeyPress={this.handleChatPress}/>
          </div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  accounts: PropTypes.array.isRequired,
  currUser: PropTypes.object.isRequired,
  chatProgress: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

Chat.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    currUser: state.currUser,
    chatProgress: state.chatProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions, chatProgressActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
