import React, { Component, Fragment } from 'react';
import { sendContactEmail } from '../services/contact';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleName(name) {
        this.setState({ name });
    }

    handleEmail(email) {
        this.setState({ email });
    }

    handleMessage(message) {
        this.setState({ message });
    }

    handleSubmit(e) {
        e.preventDefault();
        sendContactEmail(this.state.name, this.state.email, this.state.message)
            .then(() => {
                this.props.history.push('/');
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <a className="navbar-brand" href="/">Navigation</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fa fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/donate">Donate</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/signup">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
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
                            <label htmlFor="text">Your Message</label>
                            <textarea onChange={(e) => this.handleMessage(e.target.value)} className="form-control" cols="30" rows="10"></textarea>
                        </div>
                        <input type="submit" className="btn btn-primary" />
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Contact;