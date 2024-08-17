import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import loginImage from '../assets/images/login.svg';

const Login = (props) => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [rememberMe, setRememberMe] = useState(false);
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            if (rememberMe) {
                localStorage.setItem('token', json.authtoken);
            } else {
                sessionStorage.setItem('token', json.authtoken);
            }
            props.showAlert("Login Successful", "success");
            navigate("/notes");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    return (
        <div className="container mt-3 mb-4">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card p-4" style={{background: '#e8e8e8', padding: '2rem', borderRadius: '4rem', boxShadow: 'hsl(261, 38%, 39%)' }}>
                        <div className="text-center mt-3 mb-3">
                            <img src={loginImage} alt="Login Illustration" style={{ width: '40%', height: 'auto' }} />
                        </div>
                        <h2 className="text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    value={credentials.email} 
                                    onChange={onChange} 
                                    id="email" 
                                    name="email" 
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className="form-control" 
                                    value={credentials.password} 
                                    onChange={onChange} 
                                    name="password" 
                                    id="password" 
                                    required 
                                />
                            </div>
                            <div className="form-check mb-3 d-flex justify-content-between align-items-center">
                                <div>
                                    <input 
                                        type="checkbox" 
                                        className="form-check-input" 
                                        id="rememberMe" 
                                        checked={rememberMe} 
                                        onChange={handleRememberMeChange} 
                                    />
                                    <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                                </div>
                            </div>
                            <button type="submit" className="button w-100" style={{ padding: '17px 40px' }}>Login</button>
                        </form>
                        <div className="text-center mt-3">
                            <span>Don't have an account? <Link to="/Signup" className="text-decoration-none">Register</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
