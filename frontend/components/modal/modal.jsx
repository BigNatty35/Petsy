import React from 'react';
import { closeModal, openModal } from '../../actions/modal_actions';
import { clearErrors } from '../../actions/session_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal({modal, closeModal, clearErrors, openModal}) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'Sign In':
      component = <LoginFormContainer />;
      break;
    case 'Register':
      component = <SignupFormContainer />;
      break;
    default:
      return null;
  }
  
  return (
    <div className="modal-background" onClick={(event) => {closeModal(); clearErrors();}}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <nav className="sessionTabBox">
          <button className="register-button" onClick={(e) => openModal("Register")}>
            <div className="sessionTabButton1">Register</div>
          </button>
          <button onClick={(e) => openModal("Sign In")}>
            <div className="sessionTabButton2">Sign in</div>
          </button>
        </nav>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
    openModal: (modal) => dispatch(openModal(modal))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);