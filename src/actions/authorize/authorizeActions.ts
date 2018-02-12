// - Import action types
import { AuthorizeActionType } from '../../constants/authorizeActionType';
var AllUsers = require('../../api/users.json');

export function SigninUser(mail: any, password: any) {
    var c: any;

    // Generate token
    var rand = function () {
        return c = Math.random().toString(36).substr(2); // remove `0.`
    };

    let avatar: any;
    let usid: any;
    
    function isIsValidUser() {
        var isValid = '';

        // Validate user by password and mail

        Object.keys(AllUsers).map(function (element: string, index: number) {
            if (AllUsers[element].email === mail && AllUsers[element].password === password) {
                
                isValid = element;
                avatar = AllUsers[element].useravatar;
                usid = AllUsers[element].id;
            }

        });
        return isValid;

    }

    var isvt = isIsValidUser();

    if (isvt) {
        rand();
        localStorage.setItem('token', c);
        localStorage.setItem('avatar', avatar);
        localStorage.setItem('uid', usid);
        return {
            type: AuthorizeActionType.SIGIN,
            payload:
                {
                    uid: isvt,
                    useravatar: avatar
                }
        };

    } else {
        return {
            type: AuthorizeActionType.LOGOUT,
            // payload: error
        };
    }
}
export function SigninValiduser() {

    return {
        type: AuthorizeActionType.LOGIN,
        payload:
            {
                uid: localStorage.getItem('uid'),
                useravatar: localStorage.getItem('avatar')
            }
    };
}
export function SigninOutUser(mail: any, password: any) {

    localStorage.removeItem('token');
    return {
        type: AuthorizeActionType.LOGOUT,
        // payload: error
    };
}
