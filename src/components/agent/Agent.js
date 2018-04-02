import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {Link} from 'react-router';
import '../../styles/Agent.css';
import Header from '../../components/common/Header.js';

class Agent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox ?' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render_agents_list() {
    return this.props.accounts.filter(account => {
      return account.userType === 'agent';
    }).map((mappedObject, index) => {
      return (
        <div key={index} className="agent_select">
          <div className="agent_left_panel">
            <img className="agent_photo" src={mappedObject.image_url} alt=""/>
          </div>

          <div id="agent_right_panel" className="agent_right_panel">
            <p className="agent_name">{mappedObject.name}</p>
            <p className="agent_rating" style={{marginTop: '50px'}}>{mappedObject.avg_rating}</p>
            <p className="agent_location">{mappedObject.city}</p>
          </div>

          <div className="agent_rightmost_panel">
            <Link to={"/chooseagent/" + mappedObject.username}>
              <button style={{width: '60px', height: '55px', marginTop: '90px', fontWeight: 'bold'}}>
                <text style={{fontSize: '30px'}}>></text>
              </button>
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="">
        <Header/>
        <div className="no_pad container">
          <div className="content">
            <h1>Find an Agent</h1>

            <div id="sort_div">
              <label className="sortby" htmlFor="sort">Sort By: </label>

              <select id="sort" name="sort">
                <option value="rating">Best Rating</option>
                <option value="nearest">Nearest</option>
                <option value="youngest">Youngest</option>
                <option value="oldest">Oldest</option>
              </select>
            </div>
            {this.render_agents_list()}
          </div>
        </div>
      </div>
    );
  }
}

Agent.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

Agent.contextTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Agent);
