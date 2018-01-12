import * as React from 'react';
import '../App.css';
import { Redirect } from 'react-router-dom';

export interface Props {
    onSighIn?: () => void;
    onLock?: () => void;
    authed: boolean;
}

function LogIn({ authed, onSighIn, onLock }: Props) {

    if (!authed) {
        return (
            <div className="hello">
                <div>
                    <button onClick={onSighIn}>Unlock user</button>
                </div>
            </div>
        );

    }
    return (
        <Redirect to={{ pathname: '/' }} />

    );
}

export default LogIn;
