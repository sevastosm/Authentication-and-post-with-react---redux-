// import Header from '../components/Header';
// import * as actions from '../actions/';
import * as React from 'react';
// import { StoreState } from '../types/index';
import Posts from '../components/Posts';
// import store from '../store/configureStore';
import { connect } from 'react-redux';

// - Import API
import * as PostAPI from '../api/PostApi';

export interface Props {
    // name: string;
    authed: boolean;
    posts: any;
    // onIncrement?: () => void;
    // onDecrement?: () => void;
}

class ConPosts extends React.Component<Props, object> {

    render() {

        const p = this.props.posts;
        let parsedPosts: any = [];

        Object.keys(p).map((v: any, n: number) =>
            parsedPosts.push(p[v])
    );
        const sortedPosts = PostAPI.sortObjectsDate(parsedPosts);
        // const { authenticated} = this.props;
        return (
            <div>
                {
                    sortedPosts.map((v: any, n: number) =>
                        <Posts key={n / 12 + 'rtgert'} authed={this.props.authed} useravatar={v.useravatar} title={v.title} text={v.text} />
                )
                }
                
            </div>
        );
    }
}

export function mapStateToProps(state: any) {
    // state = store.getState();
    return {
        authed: state.authorize.authed,
        posts: state.posts
    };
}

export default connect(mapStateToProps)(ConPosts);
