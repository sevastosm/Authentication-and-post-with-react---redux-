/**
 * Post state 
 * 
 * @export
 * @class AuthorizeState
 */
export class AuthorizeState {

    /**
     * Authorized user identifier
     * 
     * @type {number}
     * @memberof AuthorizeState
     */
    uid: number = 123123123;

    /**
     * If user is authed {true} or not {false}
     * 
     * @type {Boolean}
     * @memberof AuthorizeState
     */
    authed: Boolean = false;

    /**
     * If user password is updated {true} or not {false}
     * 
     * @type {Boolean}
     * @memberof AuthorizeState
     */
    updatePassword: Boolean = false;

    /**
     * If the user is guest {true} or not {false}
     * 
     * @type {Boolean}
     * @memberof AuthorizeState
     */
    guest: Boolean = false;

    /**
     * User avatar
     */
    useravatar: any;
}