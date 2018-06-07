import { connect } from 'react-redux';

import { logout, signup, login } from '../../actions/session_actions';
import SessionButtons from './session_buttons';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(signup(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);