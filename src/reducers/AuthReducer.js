import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
} from '../actions/types';

// Set default state to handle undefine state (state reducer can't be undefine) and action to
const INITIAL_STATE = { 
    email: '', 
    password: '' 
};

// Funtion for check all state with type and take an action
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        default:
            return state;
    }
};
