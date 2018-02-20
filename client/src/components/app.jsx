import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import Donate from './donate';
import Edit from './edit';
import Admin from './admin';
import Contact from './contact';
import SignUp from './signup';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/donate" component={Donate} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/signup" component={SignUp} />
                        <PrivateRoute path="/edit/:id" component={Edit} />
                        <PrivateRoute path="/admin" component={Admin} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;