import React, { Component } from 'react';
import NavBar from './navbar';
import * as signupService from '../services/signup';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            isLong: false,

        };
    }

    handleName(name) {
        this.setState({ name });
    }

    handleEmail(email) {
        this.setState({ email });

    }

    handlePassword(password) {
        let isLong = password.length > 5;
        this.setState({ password, isLong });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.isLong === true) {
            signupService.insert(this.state)
                .then(() => {
                    this.props.history.push('/');
                }).catch((err) => {
                    console.log(err);
                    alert(err.message);
                })
        } else {
            alert('Password not long enough!');
        }
    }

    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input onChange={(e) => this.handleName(e.target.value)} type="text" id="name" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input onChange={(e) => this.handleEmail(e.target.value)} type="email" id="email" className="form-control" required />
                        </div>
                        <div className="form-group">
                            <div style={{ display: this.state.isLong ? 'none' : 'block' }} >Password must be 6 characters</div>
                            <label htmlFor="password">Password</label>
                            <input onChange={(e) => this.handlePassword(e.target.value)} type="password" id="password" className="form-control" required />
                        </div>
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            </ React.Fragment>
        );
    };
}

export default SignUp;
