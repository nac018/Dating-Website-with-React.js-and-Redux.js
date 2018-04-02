import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import * as userActions from '../../actions/userActions';
import * as chatProgressActions from '../../actions/chatProgressActions';
import * as taskActions from '../../actions/taskActions';
import '../../styles/Progress.css';
import Header from '../common/Header';
import ProgressForm from './ProgressForm';

class Progress extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      active: null,
      modal_display: "none",
      new_task_text: "",
      accounts: props.accounts,
      currUser: Object.assign({}, props.currUser),
      currFriend: props.currFriend
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addNewTask = this.addNewTask.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
    this.setState({currUser: Object.assign({}, nextProps.currUser)});
    this.setState({tasks: nextProps.tasks});
    this.setState({currFriend: nextProps.currFriend});
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  remove_task(index) {
    const result = window.confirm("Are you sure you want to mark this task as completed?");

    if (result === true) {
      this.props.actions.deleteTask(this.props.tasks[index].id).then();
    }

  }

  render_tasks() {


    return this.props.tasks.filter(task => {
      if (task) {
        let users = task.users;
        if (users == null) {
          return false;
        }
        let currUsername = this.state.currUser.username;
        let friendUsername = this.state.currFriend;
        return (users.indexOf(currUsername) > -1 && users.indexOf(friendUsername) > -1);
      }

      return false;

    }).map((mappedObject, index) => {
      return (
        <div key={index} className="task">
          <p>{mappedObject.task}</p>
          <button className="complete" onClick={() => this.remove_task(index)}>✔</button>
        </div>
      );
    });
  }

  showModal() {
    this.setState({
      modal_display: "block"
    });
  }

  closeModal() {
    this.setState({
      modal_display: "none"
    });
  }

  toggleProgress(position) {
    if (this.state.active === position) {
      this.setState({active: null});
    } else {
      this.setState({active: position});
    }
  }

  progressColor(position) {
    if (this.state.active === position) {
      return "blue";
    } else {
      return "dodgerblue";
    }
  }

  modalState() {
    return this.state.modal_display;
  }

  addNewTask() {
    const taskText = this.state.new_task_text;
    let task = {
      "users": [this.state.currUser.username, this.state.currFriend],
      "task": taskText
    };

    this.props.actions.saveTask(task);

    this.setState({
      new_task_text: '',
      modal_display: "none"
    });
  }

  render() {
    return (
      <div className="customContainer">
        <Header/>
        <div className="top_bar no_pad flex">
          <div className="left_panel_bar">
            <p>To-Do</p>
            <button id="add_to_do" onClick={() => { this.showModal();}}>+
            </button>
          </div>
          <div className="right_panel_bar">
            <p>Progress</p>
          </div>
        </div>

        <div className="flex no_pad">
          <div className="left_panel no_pad">
            <div id="task_list">
              {this.render_tasks()}
            </div>
          </div>

          <div className="right_panel no_pad">
            <div className="progress_container">
              <ul id="progress_bar">
                <li style={{background: this.progressColor(0)}} onClick={() => {
                  this.toggleProgress(0);
                }} className="progress_li">1
                </li>
                <li style={{background: this.progressColor(1)}} onClick={() => {
                  this.toggleProgress(1);
                }} className="progress_li">2
                </li>
                <li style={{background: this.progressColor(2)}} onClick={() => {
                  this.toggleProgress(2);
                }} className="progress_li">3
                </li>
                <li style={{background: this.progressColor(3)}} onClick={() => {
                  this.toggleProgress(3);
                }} className="progress_li">4
                </li>
                <li style={{background: this.progressColor(4)}} onClick={() => {
                  this.toggleProgress(4);
                }} className="progress_li">5
                </li>
              </ul>
              <ul id="progress_bar_text">
                <li className="progress_text">1. Description</li>
                <li className="progress_text">2. Description</li>
                <li className="progress_text">3. Description</li>
                <li className="progress_text">4. Description</li>
                <li className="progress_text">5. Description</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="taskModal" className="modal" style={{display: this.modalState()}}>
          <div className="modal-content">
            <span className="close" onClick={() => {
              this.closeModal();
            }}>&times;</span>

            <ProgressForm taskText={this.state.new_task_text} handleInputChange={this.handleInputChange} addNewTask={this.addNewTask}/>

          </div>
        </div>

      </div>
    );
  }
}

Progress.propTypes = {
  accounts: PropTypes.array.isRequired,
  currUser: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  currFriend: PropTypes.string,
  actions: PropTypes.object.isRequired
};

Progress.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const friendUsername = ownProps.params.id; // from the path `/course/:id`

  return {
    accounts: state.accounts,
    currUser: state.currUser,
    tasks: state.tasks,
    currFriend: friendUsername
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, userActions, chatProgressActions, taskActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);
