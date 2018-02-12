import * as React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router';

export interface Props {
    title: string;
    text: string;
    authed: boolean;
    useravatar: string;
}

function Posts({ useravatar, text, title, authed }: Props) {

    return (
        <div>
            <div className="row" style={{ fontSize: '12px', border: 'solid 1px', padding: '3px' }}>
                <img src={useravatar} style={{ float: 'right' }} />
                <h2>{title}</h2>
                <br /> <br />
                <hr />
                <p>{text}</p>
                {authed ? <div  ><section>  <div className="">
                    <label className=" light-blue darken-1" style={{ color: '#fff', padding: '3px' }} htmlFor="comment" data-error="wrong" data-success="right">Add comment</label>
                    <br />
                    <textarea style={{ width: '100%' }} id="comment" />
                </div>
                </section></div>
                    : <div style={{ padding: '5px' }} ><span className="btn"><Link to="/login">Add a comment</Link></span></div>
                }
            </div>
        </div>

    );
}
export default Posts;