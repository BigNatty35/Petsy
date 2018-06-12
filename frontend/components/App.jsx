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
import Navbar from './navbar/navbar';
import ProductIndexContainer from './product/product_index_containter';
import ProductDetailContainer from './product/product_detail_container';
const App = () => (
  <div>
    <Modal/>
    <header className="main-header">
      <Header/>
      <SessionButtonContainer/>
    </header>
    <Navbar/>
    <div className="main-content">
    </div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route exact path="/" component={ProductIndexContainer} />
      <Route path='/product/:product_id' component={ProductDetailContainer}/>
    </Switch>
  </div>
);

export default App;
