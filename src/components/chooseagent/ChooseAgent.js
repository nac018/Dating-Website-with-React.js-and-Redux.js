import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {Link} from 'react-router';
import '../../styles/ChooseAgent.css';
import Header from '../../components/common/Header.js';

class ChooseAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: props.accounts,
      currAgent: props.currAgent
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
    this.setState({currAgent: Object.assign({}, nextProps.currAgent)});
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox ?' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render_reviews_list() {
    return this.props.currAgent.ratings.map((mappedObject, index) => {
      return (
        <div key={index}>
        <div className="review_panel">
          <p className="review_number" style=
            {{fontSize: '20px', fontWeight: 'bold'}}>{mappedObject.comment}</p>
          <p className="review_rating" style=
            {{fontSize: '20px', fontWeight: 'bold'}}>{mappedObject.rating}</p>
        </div>
          <br/>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="content">
        <Header/>
        <h1>Choose an Agent</h1>
        <div className="agent">
          <div className="choose_agent_left_panel">
            <img className="agent_photo" src={this.props.currAgent.image_url} alt=""/>
          </div>

          <div className="choose_agent_right_panel">
            <h3 id="name">Agent Name: {this.props.currAgent.name}</h3>
            <h3 id="age">Age: {this.props.currAgent.age}</h3>
            <h3 id="location">Location: {this.props.currAgent.city}</h3>
            <h3 id="rating">Rating: {this.props.currAgent.avg_rating}</h3>
            <h3 id="experience">Experience: {this.props.currAgent.experience}</h3>
          </div>
        </div>
        <br/>
        {this.render_reviews_list()}
        <Link to="/agent">
          <button className="back_button">Back</button>
        </Link>
        <Link to="/requested">
          <button className="request_button">Request</button>
        </Link>
      </div>
    );
  }
}


ChooseAgent.propTypes = {
  accounts: PropTypes.array.isRequired,
  currAgent: PropTypes.object,
  actions: PropTypes.object.isRequired
};

ChooseAgent.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return {
    accounts: state.accounts,
    currAgent: state.accounts.filter(account => account.username === ownProps.params.id)[0]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAgent);
