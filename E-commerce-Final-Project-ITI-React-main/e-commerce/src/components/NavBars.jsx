import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContext from '../context/AuthContext';

function NavBars() {
    let { user, logoutUser } = useContext(AuthContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Smsalloum
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/store">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutus">
                                About Us
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactus">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <div className="mx-3">
                                {user ? (
                                    <button
                                        onClick={logoutUser}
                                        // className='loginbtn bg-light' style={{ border: "none", margin:"5px" }}
                                        className="btn btn-secondary"
                                    >
                                        Logout
                                    </button>
                                ) : (
                                    <Link className="btn btn-secondary" to="/login">
                                        Login
                                    </Link>
                                )}
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/wishlist">
                                <i className="bi bi-heart"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cart">
                                <i className="bi bi-bag"></i>
                            </a>
                        </li>
                      
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBars;



