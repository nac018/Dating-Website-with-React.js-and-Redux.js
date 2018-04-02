import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from '../../actions/userActions';
import {Link} from 'react-router';
import '../../styles/AgentManagement.css';
import Header from '../../components/common/Header';

class AgentManagement extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      searchText: '',
      accounts: props.accounts,
      filteredAccounts: props.accounts
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.search = this.search.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({accounts: nextProps.accounts});
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox ?' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  /*
   *   TODO: Change this to use react
   *   JUST LOOP THROUGH ClientObjects and change the state accordingly;
   *   e.g. have another state specifically for display that we replace when they start searching and one
   *   for all ClientObjects...
   */
  search() {
    let temp = this.state.accounts.filter(account => {
      return account.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) > -1;
    });

    this.setState({
      filteredAccounts: temp
    });

    // console.log(temp);
    // let input, filter, ul, li, a, i;
    // input = document.getElementById("search_text");
    // filter = input.value.toUpperCase();
    // ul = document.getElementById("myUL");
    // li = ul.getElementsByTagName("li");
    // for (i = 0; i < li.length; i++) {
    //   a = li[i].getElementsByTagName("a")[0];
    //   if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    //     li[i].style.display = "";
    //   } else {
    //     li[i].style.display = "none";
    //   }
    // }
  }

  render_clients_list() {
    return this.state.filteredAccounts.filter(account => {
      return account.userType === 'user';
    }).map((mappedObject, index) => {
        return (
          <div key={index} className="user_select">
            <div className="popup" onClick="">
              <li>
                <span className="name"> {mappedObject.name} </span>
                <Link to="/matched">
                  <button className="reset">
                    <text className="button_text">></text>
                  </button>
                </Link>
                <span className="popuptext">
                {mappedObject.sex}<br/>
                  {mappedObject.age}<br/>
                  {mappedObject.ethnicity}<br/>
                  {mappedObject.phone}
                </span>
              </li>
            </div>
          </div>
        );
      });
  }

  render() {
    return (
      <div className="content">
        <Header/>
        <h1>Client List</h1>
        <input name="searchText" id="search_text" className="searchText"
               placeholder="Search for names" value={this.state.searchText}
               onChange={this.handleInputChange} onKeyUp={this.search}/>
        <ul id="myUL">
          {this.render_clients_list()}
        </ul>
      </div>
    );
  }
}

AgentManagement.propTypes = {
  accounts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

AgentManagement.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  console.log(state);
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentManagement);

