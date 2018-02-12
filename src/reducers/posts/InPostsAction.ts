// - Import action types
import { PostsActionType } from '../../constants/PostsActionType';
/**
 *  Authorize action interface
 * 
 * @export
 * @interface InPostsAction
 */
export interface InPostsAction {
    payload: any;
    type: PostsActionType;

}