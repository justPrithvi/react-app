import React,{useEffect, useState} from 'react';
import {userSignup} from '../axios/api'
import '../css/signup.css'; 
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e:any) => {
    e.preventDefault();
    await userSignup('/auth/signup', email, password)
    navigate('/login');
  };


  return (
    <div className="signup-container">
    <form onSubmit={handleSignup} className="signup-form">
      <h2>Sign Up</h2> {/* Changed 'Login' to 'Sign Up' */}
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Sign Up</button> {/* Changed 'Login' to 'Sign Up' */}
    </form>
    <p>have an account? <Link to="/login">login</Link></p>
  </div>
  
  );
};

export default Signup;
