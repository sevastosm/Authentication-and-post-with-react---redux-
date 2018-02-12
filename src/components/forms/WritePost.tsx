import * as actions from '../../actions/';
import * as React from 'react';
import { connect } from 'react-redux';
export interface Props {
    // name: string;
    authed: boolean;
    posts: {};
    AddNewPost: (text: string) => void;
    text: string;
    // onDecrement?: () => void;
}

class FoNewPost extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { postText: this.props.text };
    }
 handleOnChange(event: any) {
        this.setState({ postText: event.target.value });
    }

    public render() {

       // const { NewPost } = this.props;
        return (
            <div>
                <div>
                    <label className=" light-blue darken-1" style={{ color: '#fff', padding: '3px' }} htmlFor="comment" data-error="wrong" data-success="right">New post</label>
                    <br />
                    <textarea onChange={e => this.handleOnChange(e)} value={this.state.postText} name="textposted" style={{ width: '100%' }} id="comment" placeholder="What's in you mind" />
                    <button onClick={() => this.props.AddNewPost(this.state.postText)} className="btn">Add post</button><br /><br />
                </div>
            </div>
        );
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        AddNewPost: (text: any) => {
            dispatch(actions.postActions.AddNewPost(text));
        },
    };
}

export function mapStateToProps(state: any, ownProps: any) {
    return {
        authed: state.authorize.authed,
        posts: state.posts
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FoNewPost);
