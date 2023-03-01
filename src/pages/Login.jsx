import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import './styles/login.css';

const Login = () => {
  const [isLogged, setIsLogged] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/signUp');
  };

  const submit = (data) => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login';
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem('token', res.data.data.token);
        setIsLogged(true);
        navigate('/');
      })
      .catch((err) => console.log(err));
    reset({
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    const condition = localStorage.getItem('token') ? true : false;
    setIsLogged(condition);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLogged(false);
  };

  if (isLogged) {
    return (
      <div className="login-user">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  }
  return (
    <div className="login-container">
      <div className="main-container">
        <form className="login" onSubmit={handleSubmit(submit)}>
          <strong>Welcome! Enter your email and password to continue</strong>
          <div className="test-data">
            <b>Test data</b>
            <div className="field">
              <i className="fa-regular fa-envelope"></i>username@gmail.com
            </div>
            <div className="field">
              <i className="fa-solid fa-key"></i>password12345
            </div>
          </div>
          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register('email')} />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register('password')} />
          </div>
          <button className="submit-button">Login</button>
          <div className="sing-up">
            <span>Don't have an account?</span>
            <button className="up-btn" onClick={handleSignUp}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;