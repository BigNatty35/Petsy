import {connect} from 'react-redux';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});




const sessionButtons = (props) => {
  if (props.currentUser) {
    return (
      <div>
      <button onClick={props.logout}>Logout</button>
      </div>
    )
    else {
      return (
        <div>
          <button>Sign Up</button>
          <button onClick={}>Login</button>
          </div>
      )
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(loggedInButton);

// creating a conditional render to dispay the session buttons on the header depending
// on if the user is logged in or not.