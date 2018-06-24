import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS 
} from '../actions/types';

// Set default state to handle undefine state (state reducer can't be undefine) and action to
const INITIAL_STATE = { 
    email: '', 
    password: '',
    user: null 
};

// Funtion for check all state with type and take an action
export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload }
        default:
            return state;
    }
};
