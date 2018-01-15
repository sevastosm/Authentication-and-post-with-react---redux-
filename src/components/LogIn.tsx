import * as React from 'react';
import '../App.css';

export interface Props {
    onSighIn: () => void;
    state: any;
    // authed: boolean;
}

function LogIn({ onSighIn, state }: Props) {

    return (
        <div className="header">
            <div>
                <button onClick={onSighIn}>Unlock user</button>
            </div>
        </div>
    );
}

export default LogIn;
