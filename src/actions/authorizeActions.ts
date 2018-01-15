// - Import action types
import { AuthorizeActionType } from '../constants/authorizeActionType';

export function SigninUser(mail: any, password: any) {

    if (mail === 'seb@mail.com' && password === '1q2w3e') {
        localStorage.setItem('token', '1q2w3e3er34');
        return {
            type: AuthorizeActionType.LOGIN,
            // payload: error
        };

    } else {
        return {
            type: AuthorizeActionType.LOGOUT,
            // payload: error
        };
    }
}

export function SigninOutUser(mail: any, password: any) {

    localStorage.removeItem('token');
    return {
        type: AuthorizeActionType.LOGOUT,
        // payload: error
    };
}
