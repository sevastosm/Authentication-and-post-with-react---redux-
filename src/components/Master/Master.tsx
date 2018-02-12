// tslint:disable:no-console
// /// <reference types="@types/material-ui" />

// - Import react components
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Landing from '../../containers/Landing';
import LogIn from '../../containers/LogIn';

// - Import master props state
import { ImMasterProps } from './ImMasterProps';
import { ImMasterState } from './ImMasterState';

// - Import Css
import '../../styles/sass/materialize.css';
import '../../styles/App.css';

// - Import actions
import {
    authorizeActions,
    postActions,
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
            dataLoaded: true,
            posts: {}
        };
    }

    componentDidCatch(error: any, info: any) {
        console.log('====================================');
        console.log(error, info);
        console.log('====================================');
    }
    componentWillMount() {
        const isauthed = localStorage.getItem('token');
        this.props.getAllPosts();
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
                {(this.state.loading)
                    ?
                    (<Switch>
                        /* tslint:disable */
                        <Route exact path="/" render={() => <Landing />} />
                        <Route path="/login" render={() => !this.props.authed ? <LogIn state={' '} /> : <Redirect to={{ pathname: '/', }} />} />
                    </Switch>) : ''
                }
            </div>

        );
    }
}

// - Map dispatch to props
const mapDispatchToProps = (dispatch: any, ownProps: any) => {

    return {
        loginUser: () => {
            dispatch(authorizeActions.SigninValiduser());
        },
        getAllPosts: () => {
            dispatch(postActions.GetAllPosts());
        }
    };

};

/**
 * Map state to props
 * @param {object} state
 */
const mapStateToProps = (state: any) => {
    // Passing  aplication state to nested components as props
    const { authorize, posts } = state;
    return {
        authed: authorize.authed,
        posts: posts
    };

};
// - Connect commponent to redux store
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Master as any));