
import { connect } from 'react-redux';
import {openModal} from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import SessionButtons from './session_buttons';
import modalReducer from '../../reducers/modal_reducer';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);