
import { connect } from 'react-redux';
import {openModal, closeModal} from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import SessionButtons from './session_buttons';
import modalReducer from '../../reducers/modal_reducer';
import { withRouter } from 'react-router-dom';
import {fetchCartItems} from '../../actions/cart_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal()),
  fetchCartItems: () => dispatch(fetchCartItems())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons));