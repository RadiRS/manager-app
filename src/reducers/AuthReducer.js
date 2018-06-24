import { EMAIL_CHANGED } from '../actions/types';

// Set default state to handle undefine state (state reducer can't be undefine)
const INITIAL_STATE = { email: '' };

// Funtion for check all state with type and take an action
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
    
    default:
      return state;
  }
};
