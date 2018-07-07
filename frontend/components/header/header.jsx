import SearchBar from '../search_bar';
import React from 'react';
import SessionButtons from '../session_form/session_buttons';
import { Link, withRouter } from 'react-router-dom';
import {clearErrors} from '../../actions/session_actions'


class Header extends React.Component {
  
  
  goHome() {
    this.props.history.push('/')
  };

  render() {
    return (
      <div className="left-header">
        <div><h1 onClick={(e) => { this.goHome(); dispatch(clearErrors())}} className="logo">RegrEtsy</h1></div>
        <div className="searchbar">
          <SearchBar/>
        </div>
      </div>
    );
  };
}

export default withRouter(Header);




