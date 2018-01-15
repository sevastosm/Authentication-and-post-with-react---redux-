import * as React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
// import store from '../store/configureStore';

export interface Props {
    onSignOut: () => void;
    state: any;
    // authed: boolean;
}

function Header({ onSignOut , state }: Props) {
    return (
        <div className="header">
            <div style={{float: 'right' }} >
                {!state ?
                    <NavLink to="/login">Log In</NavLink>
                    : <button onClick={onSignOut}>Log out</button>}
              
            </div>
              <br />
                <span>Header section</span>
            <hr/>
        </div>
    );
}

export default Header;
