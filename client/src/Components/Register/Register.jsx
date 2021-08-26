import "./Styles.css";
import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div>
            <Link to="/">
                Landing Page
            </Link>
            <h1>User Registration</h1>
        </div>
    );
}

export default Register;