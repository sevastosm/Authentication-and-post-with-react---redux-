// tslint:disable:no-console
// /// <reference types="@types/material-ui" />

// - Import react components
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
// import { push } from 'react-router-redux';

// - Import material-ui components
// import Snackbar from 'material-ui/Snackbar';
// import LinearProgress from 'material-ui/LinearProgress';

// - Import components
import Home from '../Home';
import Header from '../../containers/Header';
// import Signup from 'components/Signup';
import LogIn from '../../containers/LogIn';
// import Settings from 'components/Settings';
// import MasterLoading from 'components/MasterLoading';

// - Import master props state
import { ImMasterProps } from './ImMasterProps';
import { ImMasterState } from './ImMasterState';

// - Import API

// - Import actions
import {
    authorizeActions,
    // postActions,
    // userActions,
} from '../../actions';

// - Create Master component class
export class Master extends React.Component<ImMasterProps, ImMasterState> {

    // Constructor
    constructor(props: ImMasterProps) {
        super(props);
        this.state = {
            loading: true,
            authed: false,
            dataLoaded: true
        };
    }

    componentDidCatch(error: any, info: any) {
        console.log('====================================');
        console.log(error, info);
        console.log('====================================');
    }
    componentWillMount() {
        const isauthed = localStorage.getItem('token');
        if (isauthed) {
            this.props.loginUser();
        }
    }

    /**
     * Render app DOM component
     *
     * @returns
     *
     * @memberof Master
     */
    public render(): React.ReactElement<{}> {

        // const { progress, global } = this.props;

        return (
            <div id="master">
                <Header />
                {/* <div className="master__progress" style={{ display: (progress.visible ? 'block' : 'none') }}>
                    <LinearProgress mode="determinate" value={progress.percent} />
                </div>
                <div className="master__loading animate-fading2" 
                style={{ display: (global.showTopLoading ? 'flex' : 'none') }}>
                    <div className="title">Loading ... </div>
                </div>
                <MasterLoading activeLoading={this.state.loading || !(this.props.loaded || this.props.guest)} 
            handleLoading={this.handleLoading} /> */}

                {/* {(!this.state.loading && (this.props.loaded || this.props.guest)) */}
                {(this.state.loading)
                    ?
                    (<Switch>
                        /* tslint:disable */
                        <Route exact path="/" render={() => <Home state={' '} />} />
                        <Route path="/login" render={() => !this.props.authed ? <LogIn state={' '} /> : <Redirect to={{ pathname: '/', }} />} />
                    </Switch>) : ''
                }

                {/* <Snackbar
                    open={this.props.global.messageOpen}
                    message={this.props.global.message}
                    autoHideDuration={4000}
                    style={{ left: '1%', transform: 'none' }}
                /> */}
            </div>

        );
    }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch: any, ownProps: any) => {

    return {

        loginUser: () => {
            dispatch(authorizeActions.SigninUser('seb@mail.com', '1q2w3e'));
        },
        // logout: () => {
        //     dispatch(authorizeActions.logout());
        // }
    };

};

/**
 * Map state to props
 * @param {object} state
 */
const mapStateToProps = (state: any) => {
    // const { authorize, global, user, post, comment, imageGallery, vote, notify, circle } = state;
    const { authorize } = state;

    return {
        authed: authorize.authed,
    };

};
// - Connect commponent to redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Master as any));