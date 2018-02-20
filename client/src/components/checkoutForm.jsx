import React, { Component, Fragment } from 'react';
import { injectStripe } from 'react-stripe-elements';
import { postCharge } from '../services/stripeService';

import CardSection from './cardSection';

class CheckoutForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: ''
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.stripe.createToken({ name: this.state.customerName })
            .then(({ token }) => {
                postCharge({ id: token.id, amount: 10 });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    handleNameInput(e) {
        this.setState({ customerName: e.target.value });
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

                <div>
                    <form className="Donate" onSubmit={(e) => this.handleSubmit(e)}>
                        <input onChange={(e) => this.handleNameInput(e)} placeholder="Name" htmlFor="name" id="name" />
                        <CardSection />
                        <button>SUBMIT</button>
                    </form>
                </div>

            </Fragment>
        );
    }
}

export default injectStripe(CheckoutForm);
