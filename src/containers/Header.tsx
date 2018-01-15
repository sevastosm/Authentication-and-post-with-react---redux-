import Header from '../components/Header';
import { SigninOutUser } from '../actions/authorizeActions';
// import { StoreState } from '../types/index';
import store from '../store/configureStore';
import { connect } from 'react-redux';
// import { Credentials } from '../types/index';

export function mapStateToProps(state: any) {
   state = store.getState();
   return {
       state: state.authorize.authed
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        // onIncrement: () => dispatch(actions.incrementEnthusiasm()),
        // onDecrement: () => dispatch(actions.decrementEnthusiasm()),
        onSignOut: (email: any, password: any) => {
            dispatch(SigninOutUser('seb@mail.com', '1qds2w3e'));
           
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// function SigninUser({ email, password }: Credentials): (dispatch: Dispatch<actions.FormActions>)
// function SigninUser({ email, password }: Credentials): (dispatch: Dispatch<actions.FormActions>)