import * as React from 'react';
import '../App.css';
import store from '../store/configureStore';
// import { SigninUser } from '../actions/authorizeActions';

export interface Props {
    onSighIn?: () => void;
    onLock?: () => void;
    authed: boolean;
}

function Home(state: any) {

    state = store.getState();

    // dispatch action to store test
    // store.dispatch(SigninUser('seb@mail.com', '1q2h3e'));

    // const s: any = state.authorize.uid;
    return (
        <div className="header">
            <div >
                {/* <h1>{JSON.stringify(s)}</h1>
                <h1>{JSON.stringify(state.authorize.authed)}</h1> */}

                {/* Filters Section  */}

                <div style={{ fontSize: '12px', border: 'solid 1px' }}>
                    <h2>Filters Section </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                </div>

                {/* Posts Section  */}                
                
                <div className="xs-12 sm-6" style={{ fontSize: '12px', border: 'solid 1px' }}>
                    <h2>Post</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div>
                        {state.authorize.authed ?

                            <span><hr />Commet Area</span>
                            : ''}
                    </div>
                </div>
                <div className="xs-12 sm-6" style={{ fontSize: '12px', border: 'solid 1px' }}>
                    <h2>Contrbutors</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                    <div>
                        {state.authorize.authed ?
                            <span><hr />Commet Area</span>
                            : ''}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;
