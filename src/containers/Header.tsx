import Header from '../components/Header';
import { SigninOutUser } from '../actions/authorize/authorizeActions';
import { connect } from 'react-redux';
export function mapStateToProps(state: any) {
   return {
       state: state
    };
}

export function mapDispatchToProps(dispatch: any) {
    return {
        onSignOut: (email: any, password: any) => {
            dispatch(SigninOutUser('seb@mail.com', '1qds2w3e'));
           
        },
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);