// - Import action types
import { PostsActionType } from '../../constants/PostsActionType';
import getPosts from '../../api/posts';
import store from '../../store/configureStore';
// - Import utility components
import * as moment from 'moment';

export function GetAllPosts() {

    // if (mail === 'seb@mail.com' && password === '1q2w3e') {
    //     localStorage.setItem('token', '1q2w3e3er34');
    return {
        type: PostsActionType.GETALLPOSTS,
        payload: getPosts
    };
    // } else {
    //     return {
    //         type: AuthorizeActionType.LOGOUT,
    //         payload: {}
    //     };
    // } 
}
export function AddNewPost(text: any) {

    let state: any = store.getState();
    let uid = state.authorize.uid;
    let creationDate = moment().unix();
    let useravatar = state.authorize.useravatar;

    // if (mail === 'seb@mail.com' && password === '1q2w3e') {
    //     localStorage.setItem('token', '1q2w3e3er34');
    return {
        type: PostsActionType.ADDNEWPOST,
        payload: {
            [uid]: {
                text, uid, creationDate, useravatar
            }
        }
    };

    // } else {
    //     return {
    //         type: AuthorizeActionType.LOGOUT,
    //         payload: {}
    //     };
    // }
}
