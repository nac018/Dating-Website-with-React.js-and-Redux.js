import React from 'react';
import {Link} from 'react-router';
import '../../styles/Matched.css';
import Header from '../../components/common/Header';

class Matched extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <h1 className = "successful_match">Client Matched Successfully!</h1>
                <Link to="/agentmanagement">
                    <button className = "cancel_match_button">Cancel Matchmaking</button>
                </Link>
            </div>
    );
}
}

export default Matched;
