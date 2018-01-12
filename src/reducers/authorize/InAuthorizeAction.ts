// - Import action types
import { AuthorizeActionType } from '../../constants/authorizeActionType';
/**
 *  Authorize action interface
 * 
 * @export
 * @interface InAuthorizeAction
 */
export interface InAuthorizeAction {
    payload: any
    type: AuthorizeActionType;

}