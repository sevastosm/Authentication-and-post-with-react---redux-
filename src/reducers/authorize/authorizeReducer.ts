import { AuthorizeActionType } from '../../constants/authorizeActionType';
import { InAuthorizeAction } from './InAuthorizeAction';
import { AuthorizeState } from './AuthorizeState';

export let authorizeReducer = (state: AuthorizeState = new AuthorizeState(), action: InAuthorizeAction) => {
    switch (action.type) {
        case AuthorizeActionType.LOGIN:
            return { ...state, authed: true };
        case AuthorizeActionType.LOGOUT:
            return { ...state, authed: false };
        default:
            return state;
    }
};
