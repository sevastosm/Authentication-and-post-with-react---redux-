// - Import action types
import { AuthorizeActionType } from '../constants/authorizeActionType';

export function SigninUser(mail: any, password: any) {

    if (mail === 'seb@mail.com' && password === '1q2w3e') {
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