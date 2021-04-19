import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <header className='container-fluid bg-dark'>
            <nav class="container navbar navbar-expand-lg">
                <Link class="navbar-brand" to="/home">WebBuilder</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/dashbord">Dashbord</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" href="/login">Login</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        </header>
    );
};

export default Nav;