import {combineReducers} from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import cartErrorsReducer from './cart_errors_reducer';
import reviewsErrorsReducer from './review_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  cart: cartErrorsReducer,
  review:reviewsErrorsReducer
});

export default errorsReducer;