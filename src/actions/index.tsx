import * as constants from '../constants';
// import { Dispatch } from 'react-redux';

// import { Credentials } from '../types/index';
export type FormActions = IncrementEnthusiasm | DecrementEnthusiasm | SigninUser | UnauthUser;

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;

}

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function authError(error: string) {
    return {
        type: constants.AUTH_ERROR,
        payload: error
    };
}
export interface SigninUser {
    type: constants.AUTH_USER;
}
export interface UnauthUser {
    type: constants.UNAUTH_USER;
}

export function UnauthUser() {
    return {
        type: constants.UNAUTH_USER,
        // payload: error
    };
}
export function AuthUser() {
    return {
        type: constants.AUTH_USER,
        // payload: error
    };
}
export function SigninUser(mail: any, password: any) {

   if (mail === 'seb@mail.com' && password === '1q2w3e') {
        return {
            type: constants.AUTH_USER,
            // payload: error
        };

   } else {
    return {
        type: constants.UNAUTH_USER,
        // payload: error
    };
}
}