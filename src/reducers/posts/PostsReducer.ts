import { PostsActionType } from '../../constants/PostsActionType';
import { InPostsAction } from './InPostsAction';
import { PostsState } from './PostsState';

export let PostsReducer = (state: PostsState = new PostsState(), action: InPostsAction) => {
    const { payload } = action;
    switch (action.type) {
        case PostsActionType.GETALLPOSTS: return action.payload;
        case PostsActionType.ADDNEWPOST:
            return {
                ...state,
                ...payload

            };
        default:
            return state;
    }
};
