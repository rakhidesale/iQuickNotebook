import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import signupImage from '../assets/images/sign_up.svg';

const Signup = (props) => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
    const [errors, setErrors] = useState({});
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        if (credentials.password !== credentials.cpassword) {
            setErrors({ ...errors, cpassword: "Passwords do not match" });
            return;
        }

        const { name, email, password } = credentials;
        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json();

            if (response.ok) {
                localStorage.setItem('token', json.authtoken); 
                navigate("/");
                props.showAlert("Account created successfully", "success");
            } else {
                setErrors({ ...errors, api: json.error || "An error occurred" });
            }
        } catch (error) {
            setErrors({ ...errors, api: "Network error. Please try again later." });
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container mt-3 mb-4">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-5">
                    <div className="card p-4" style={{background: '#e8e8e8', padding: '2rem', borderRadius: '4rem', boxShadow: 'hsl(261, 38%, 39%)' }}>
                        <div className="text-center mt-3 mb-3">
                            <img src={signupImage} alt="Signup Illustration" style={{ width: '35%', height: 'auto' }} />
                        </div>
                        <h2 className="text-center mb-4">Create an Account</h2>
                        <form onSubmit={handleSubmit}>
                            {errors.api && <div className="alert alert-danger">{errors.api}</div>}
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                    id="name" 
                                    name="name" 
                                    onChange={onChange} 
                                    aria-describedby="nameHelp"
                                    required 
                                />
                                <div id="nameHelp" className="form-text">Your name is used to identify you.</div>
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input 
                                    type="email" 
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                                    id="email" 
                                    name="email" 
                                    onChange={onChange} 
                                    aria-describedby="emailHelp"
                                    required
                                />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input 
                                    type="password" 
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`} 
                                    id="password" 
                                    name="password" 
                                    onChange={onChange} 
                                    minLength={5} 
                                    required
                                />
                                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                                <input 
                                    type="password" 
                                    className={`form-control ${errors.cpassword ? 'is-invalid' : ''}`} 
                                    id="cpassword" 
                                    name="cpassword" 
                                    onChange={onChange} 
                                    required
                                />
                                {errors.cpassword && <div className="invalid-feedback">{errors.cpassword}</div>}
                            </div>
                            <button type="submit" className="button w-100" style={{ padding: '17px 40px' }}>Submit</button>
                        </form>
                        <div className="text-center mt-3">
                            <span>Already registered? <Link to="/Login" className="text-decoration-none">Login here</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
