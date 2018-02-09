import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import Edit from './edit';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    {/* <Link to="/goodbye">Goodbye</Link> */}
                    <Switch>
                        <Route exact path="/" component={HelloWorld} />
                        <Route exact path="/edit/:id" component={Edit} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;