import { AuthorizeActionType } from '../../constants/authorizeActionType';
import { InAuthorizeAction } from './InAuthorizeAction';
import { AuthorizeState } from './AuthorizeState';

export let authorizeReducer = (state: AuthorizeState = new AuthorizeState(), action: InAuthorizeAction) => {
    switch (action.type) {
        case AuthorizeActionType.SIGIN:
            return { ...state, authed: true, uid: action.payload.uid, useravatar: action.payload.useravatar };
        case AuthorizeActionType.LOGIN:
            return { ...state, authed: true, uid: action.payload.uid, useravatar: action.payload.useravatar };

        case AuthorizeActionType.LOGOUT:
            return { ...state, authed: false, uid: ''};
        default:
            return state;
    }
};
