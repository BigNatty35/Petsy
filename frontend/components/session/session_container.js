import {connect} from 'redux';
import Session from './session_component';


const mapStateToProps = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};
