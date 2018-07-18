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
import CartShowContainer from './cart_items/cart_show_container';
// import CategoryShowContainer from './category_show/CategoryShowContainer';

const App = () => (
  <div className="whole-app">
    <Modal/>
  
    <header className="main-header">
      <Header/>
      <SessionButtonContainer/>
    </header>
    <Navbar/>
      <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute exact path="/cart" component={CartShowContainer}/>
      <Route exact path="/" component={ProductIndexContainer} />
      <Route path='/product/:product_id' component={ProductDetailContainer}/>
      {/* <Route path='/catergories/:category_id' component={CategoryShowContainer}/> */}
      </Switch>

   
    <div className="footer-box">
      <footer className="footer">
        <div className='footer-left'>
        <h1 className="Footerlogo"> RegrEtsy</h1>
        <p className="footertext">We make it easy to regret your things.</p>
        </div>
      </footer>
    </div>
  </div>
);

export default App;
