import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

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
            // Save the auth token based on "Remember Me" checkbox
            if (rememberMe) {
                localStorage.setItem('token', json.authtoken);
            } else {
                sessionStorage.setItem('token', json.authtoken);
            }
            props.showAlert("Login Successful", "success");
            navigate("/");
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
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="card p-3" style={{ width: '20rem' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Username</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
                    </div>
                    <div className="form-check mb-3 d-flex justify-content-between align-items-center">
                        <div>
                            <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} />
                            <label className="form-check-label" htmlFor="rememberMe"> Remember me</label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
                <div className="text-center mt-3">
                    <span>Don't have an account? <Link to="/Signup" className="text-decoration-none">Register</Link></span>
                </div>
            </div>
        </div>
    );
};

export default Login;
