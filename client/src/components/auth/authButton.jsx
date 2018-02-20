import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { isLoggedIn, me } from '../../services/user';


//have make constructor to pass in username
const AuthButton = withRouter(
    ({ history }) => {
        if (isLoggedIn()) {
            return <Link className="btn btn-info" to="/logout">Logout: Logged in as...</Link>;
        } else {
            return <Link className="btn btn-info" to="/login">Login</Link>;
        }
    }
);

export default AuthButton;