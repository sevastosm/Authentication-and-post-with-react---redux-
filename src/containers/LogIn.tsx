import LogIn from '../components/LogIn';
import { SigninUser } from '../actions/authorizeActions';
// import { StoreState } from '../types/index';
// import store from '../store/configureStore';
import { connect } from 'react-redux';
// import { Credentials } from '../types/index';

// export function mapStateToProps(state: any) {
//    // state = store.getState();
//     // return {

//     //    // state: state.authed
//     // };
// }

export function mapDispatchToProps(dispatch: any) {
    return {
        // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        // onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onSighIn: (email: any, password: any) => {
            dispatch(SigninUser('seb@mail.com', '1q2w3e'));
        },
    };
}

export default connect(null, mapDispatchToProps)(LogIn);

// function SigninUser({ email, password }: Credentials): (dispatch: Dispatch<actions.FormActions>)
// function SigninUser({ email, password }: Credentials): (dispatch: Dispatch<actions.FormActions>)