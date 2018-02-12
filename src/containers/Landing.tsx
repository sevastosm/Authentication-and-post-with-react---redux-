import * as React from 'react';
import Header from './Header';
import ConPosts from './ConPosts';
import WritePost from '../components/forms/WritePost';
import { connect } from 'react-redux';

export interface Props {
    authed: boolean;
    posts: {};
}

class Landing extends React.Component<Props, object> {

    render() {
        // const { authenticated} = this.props;
        return (
            <div>
                <Header />
                <div className="row" >

                    {/* Filters Section  */}
                    <div className="col s12" style={{ fontSize: '12px', border: 'solid 1px' }}>
                        <h2>Filters Section</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>

                <div className="row">

                    {/* Posts Section  */}
           
                    <div className="col s12 m8" style={{ fontSize: '12px', border: 'solid 1px', padding: '3px' }}>
                        <h2>Posts Section</h2>
                        <div>
                            {this.props.authed ? <WritePost/>
                                : ''}
                        </div>
                        < ConPosts />
                    </div>
                    <div className="col s12 m4" style={{ fontSize: '12px', border: 'solid 1px' }}>
                        <h2>Contrbutors</h2>
                        {/* <Contrbutors/> */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <div className="col s12 m4" style={{ fontSize: '12px', border: 'solid 1px' }}>
                        <h2>Latest members</h2>
                        {/* <Latest members/> */}
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                       It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div >
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

export default connect(mapStateToProps)(Landing);
