import React from 'react';
import {Link} from 'react-router';
import '../../styles/Requested.css';
import Header from '../../components/common/Header.js';

class Requested extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h1 className = "successful_request">Agent Requested Successfully!</h1>
                <Link to="/chooseagent">
                    <button className = "cancel_request_button">Cancel Request</button>
                </Link>
            </div>
    );
}
}
export default Requested;
