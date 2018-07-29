import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login} from '../../actions/session_actions';
import SessionForm from './session_form';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/review_actions';
import {fetchCartItems} from '../../actions/cart_actions';
const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'Register'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    closeModal: () => dispatch(closeModal()),
    demoForm: (user) => dispatch(login(user)),
    openModal: (modal) => dispatch(openModal('Sign In')),
    clearErrors: () => dispatch(clearErrors()),
    fetchCartItems: () => dispatch(fetchCartItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);