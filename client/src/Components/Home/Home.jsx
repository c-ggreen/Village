import "./Styles.css";
import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <Link to="/">
                Landing Page
            </Link>
            <h1>Home</h1>
        </div>
    );
}

export default Home;