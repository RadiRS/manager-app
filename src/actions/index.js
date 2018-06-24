import firebase from 'firebase';
import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS 
} from './types';

// Actions create when user type email input
export const emailChanged = text => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

// Actions create when user type password input
export const passwordChanged = text => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

// Actions to log in when user press login button and make request to firebase server
export const loginUser = ({ email, password }) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword( email, password)
        .then(user => {
            dispatch({ 
                type: LOGIN_USER_SUCCESS, 
                payload: user
            });
        });
    };
};
        
