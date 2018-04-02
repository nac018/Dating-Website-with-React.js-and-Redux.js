import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';
import Progress from './components/progress/Progress';
import Settings from './components/settings/Settings';
import AgentSignup from './components/signup/AgentSignup';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import AgentProfile from './components/agentprofile/AgentProfile';
import Agent from './components/agent/Agent';
import ChooseAgent from './components/chooseagent/ChooseAgent';
import UserSignUp from './components/signup/UserSignup';
import UserProfile from './components/userprofile/UserProfile';
import AgentManagement from './components/agentmanagement/AgentManagement';
import Matched from './components/matched/Matched';
import Requested from './components/requested/Requested';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="login" component={Login} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />

    <Route path="agent" component={Agent} />
    <Route path="agentprofile" component={AgentProfile} />
    <Route path="usersignup" component={UserSignUp} />
    <Route path="userprofile" component={UserProfile} />
    <Route path="chooseagent" component={ChooseAgent} />
    <Route path="chooseagent/:id" component={ChooseAgent} />
    <Route path="agentmanagement" component={AgentManagement} />
    <Route path="matched" component={Matched} />
    <Route path="requested" component={Requested} />

    <Route path="chat" component={Chat} />
    <Route path="progress" component={Progress} />
    <Route path="progress/:id" component={Progress} />
    <Route path="settings" component={Settings} />
    <Route path="agentSignup" component={AgentSignup} />
    <Route path="agentProfile" component={AgentProfile} />
  </Route>
);
