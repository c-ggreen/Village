import "./Styles.css";
import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from "../Navigation/Navbar";

function Home() {
    return (
        <div>
            <Navbar/>
            <Link to="/">
                Landing Page
            </Link>
            <h1>Home</h1>
        </div>
    );
}

export default Home;