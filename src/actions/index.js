import { EMAIL_CHANGED } from './types';

// Actions create when user type input
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};