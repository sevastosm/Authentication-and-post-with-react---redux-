// import Header from '../components/Header';
// import * as actions from '../actions/';
import * as React from 'react';
// import { StoreState } from '../types/index';
import store from '../store/configureStore';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export interface Props {
    // name: string;
    authed: boolean;
    // onIncrement?: () => void;
    // onDecrement?: () => void;
}

class Landing extends React.Component<Props, object> {

    render() {

        // const { authenticated} = this.props;
        return (
            <div>
            <nav className="navbar navbar-light">
                <Link to="/" className="navbar-brand">Home</Link>
                <ul className="nav navbar-nav">
                        {!this.props.authed ?
                            <li key={1} className="nav-item">
                                <Link className="nav-link" to="/login">Log in</Link></li>
                            : <li key={1} className="nav-item">
                                <Link className="nav-link" to="/login">Log out</Link></li>
                        }
                </ul>
                
            </nav>
                <span>{JSON.stringify(this.props.authed)}</span>
            </div>    
        );
    }
}

// function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
//     return {
//         authenticated: true
//     };
// }

export function mapStateToProps(state: any) {
    state = store.getState();
    return {

        authed: state.authorize.authed
    };
}

export default connect(mapStateToProps)(Landing);
 