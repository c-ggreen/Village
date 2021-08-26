import "./Styles.css";
import React from 'react';
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div className="registerContainer">
            <Link to="/">
                Landing Page
            </Link>
            {/* <h1>User Registration</h1> */}
            <div className="registerBox">
                <form>
                    <h1 className="formTitle">User Registration</h1>
                    {/* <label htmlFor="">Username:</label> */}
                    <input type="text" placeholder="Username"/>
                    <br />
                    {/* <label htmlFor="">Email:</label> */}
                    <input type="email" placeholder="Email"/>
                    <br />
                    {/* <label htmlFor="">Password:</label> */}
                    <input type="password" placeholder="Password"/>
                    <br />
                    {/* <label htmlFor="">Re-type password:</label> */}
                    <input type="password" placeholder="Re-Type Password"/>
                    <button>Register</button>
                </form>
            </div>


        </div>
    );
}

export default Register;