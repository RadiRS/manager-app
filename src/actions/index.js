import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
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
