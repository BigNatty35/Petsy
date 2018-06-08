import React from 'react';
import SearchBar from './search_bar';
import Header from './header/header';
import SessionButtons from './session_form/session_buttons';
import SessionButtonContainer from './session_form/session_button_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, HashRouter, Switch} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div>
    <header className="header">
    <Modal/>
    <Header/>
    <SessionButtonContainer/>
    </header>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
