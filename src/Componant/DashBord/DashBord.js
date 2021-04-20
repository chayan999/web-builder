import React from 'react';
import { Link } from 'react-router-dom';
import './DashBord.css';

const DashBord = () => {
    return (
        <div>
            <div class="sb-nav-fixed">
                <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    <Link class="navbar-brand" to="/">Home</Link>
                    <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
                    {/* <!-- Navbar Search--> */}

                    {/* <!-- Navbar--> */}
                    <ul class="navbar-nav ml-auto ml-md-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="userDropdown" href="oo" role="button" data-toggle="dropdown" ><i class="fas fa-user fa-fw"></i></a>
                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                                <a class="dropdown-item" href="ll">Settings</a>
                                <a class="dropdown-item" href="//">Activity Log</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="login.html">Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div class="sb-sidenav-menu">
                                <div class="nav">
                                    <div class="sb-sidenav-menu-heading">Core</div>
                                    <a class="nav-link" href="index.html">
                                        <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                                    {/* add service */}
                                    <div class="sb-sidenav-menu-heading">Interface</div>

                                    <Link to='/addServices' class="nav-link collapsed" >
                                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                               Add Service

                                    </Link>
                                    <Link to='/allData' class="nav-link collapsed" >
                                        <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                              All Services

                                    </Link>

                                    <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                        <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                            <a class="nav-link collapsed" href="hh" data-toggle="collapse" data-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                                Authentication
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                            </a>

                                            <a class="nav-link collapsed" href="g" data-toggle="collapse" data-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                                Error
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                            </a>

                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div class="sb-sidenav-footer">
                                <div class="small">Logged in as:</div>
                        Start Bootstrap
                    </div>
                        </nav>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DashBord;