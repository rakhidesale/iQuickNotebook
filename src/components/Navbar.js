import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/BackgroundVideo.css';

const Navbar = () => {
    const [videoVisible, setVideoVisible] = useState(false);
    let navigate = useNavigate();
    let location = useLocation();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const handleLogoClick = () => {
        setVideoVisible(true);
        setTimeout(() => {
            setVideoVisible(false);
            navigate('/');
        }, 2500);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
                        iQuicknote
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {!localStorage.getItem('token') ? (
                                <>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                    <Link className={`nav-link ${location.pathname === "/notes" ? "active" : ""}`} to="/notes">Notes</Link>
                                </li>
                            )}
                        </ul>
                        <form className="d-flex">
                            {!localStorage.getItem('token') ? (
                            <>
                                <Link to="/login"><button className="button mx-1">Login</button></Link>
                                <Link to="/signup"><button className="button mx-1">Signup</button></Link>
                            </>
                            ) : (
                                <button onClick={handleLogout} className="button">Logout</button>
                            )}
                        </form>
                    </div>
                </div>                 
            </nav>

            {videoVisible && (
                <div className="video-background">
                    <video autoPlay loop muted onClick={() => setVideoVisible(false)}>
                        <source src={require('../assets/images/backgroundvideo.mp4')} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </>
    );
};

export default Navbar;
