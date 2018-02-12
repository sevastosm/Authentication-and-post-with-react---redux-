import * as React from 'react';
import { NavLink } from 'react-router-dom';
// import store from '../store/configureStore';

export interface Props {
    onSignOut: () => void;
    state: any;
    // authed: boolean;
}

function Header({ onSignOut, state }: Props) {
    return (
        <div className="header">
            <div>
                {state.authorize.authed ? <span style={{ float: 'right' }}>Welcome : {state.authorize.uid}</span> : ''}
                <h1 style={{ float: 'left' }}>Greeka social</h1>
                <br />
            </div>
            <div style={{ float: 'right' }} >
                {!state.authorize.authed ?
                    <span className="btn" onClick={onSignOut}><NavLink to="/login">Log In</NavLink></span>
                    : <span className="btn" onClick={onSignOut}>Log out</span>}
            </div>
        </div>
    );
}

export default Header;
