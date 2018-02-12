import * as React from 'react';
import { connect } from 'react-redux';
import { SigninUser } from '../actions/authorize/authorizeActions';

export interface Props {
    onSighIn: (mail: string, password: string) => void;
    state: {};
    authed: boolean;
}

class LogIn extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.state = {
            emailInput: '',
            emailInputError: '',
            passwordInput: '',
            passwordInputError: '',
        };
        // Binding function to `this`
        this.handleForm = this.handleForm.bind(this);
    }

    /**
     * Handle data on input change
     * @param  {event} evt is an event of inputs of element on change
     */
    handleInputChange = (evt: any) => {
        evt.preventDefault();
        const target = evt.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleForm = (evt: any) => {
        evt.preventDefault();
        this.props.onSighIn(
            this.state.emailInput,
            this.state.passwordInput
        );
    }

    render() {
        return (
            <div>
                <form className="col s4">
                    <h1>Log-in to Greeka</h1>
                    <div className="row">
                        <div className="input-field col s12 container">
                            <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                            <br />
                            <br />
                            <input onChange={this.handleInputChange} name="emailInput" id="email" type="email" className="validate" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <label htmlFor="password" data-error="wrong" data-success="right">Password</label>
                            <br />
                            <br />
                            <input onChange={this.handleInputChange} name="passwordInput" id="password" type="password" className="validate" />
                            <button className="btn" onClick={e => this.handleForm(e)}>Log in</button>
                        </div>
                        <br />
                        <br />
                    </div>
                    <div>
                        "email":"user1@mail.com",
                             "password":"password1"<br />
                        "email":"user2@mail.com",
                             "password":"password2"<br />
                        "email":"user3@mail.com",
                             "password":"password3"<br />
                        "email":"user4@mail.com",
                             "password":"password4"<br />
                    </div>
                </form>
            </div>
        );
    }
}

/**
 * Map dispatch to props
 * @param  {func} dispatch is the function to dispatch action to reducers
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */
export function mapDispatchToProps(dispatch: any, ownProps: any) {
    return {
        onSighIn: (email: string, password: string) => {
            dispatch(SigninUser(email, password));
        },
    };
}
/**
 * Map state to props
 * @param  {object} state is the object from redux store
 * @param  {object} ownProps is the props belong to component
 * @return {object}          props of component
 */

const mapStateToProps = (state: any, ownProps: any) => {
    return {
        authed: state.authorize.authed
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
