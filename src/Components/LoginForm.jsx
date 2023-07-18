import React, { useState } from 'react';
import eyeIcon from '../assets/eye icon.svg';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import { Formik } from 'formik';
//import { Colors } from 'chart.js';

// Creating schema
const schema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email format'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long'),
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        'https://cash2go-backendd.onrender.com/api/v1/user/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        setLoginMessage('Login successful!');
        navigate('/dashboard');
      } else {
        setLoginMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.log('Error:', error);
      setLoginMessage('Login failed. Please check your credentials.');
    }

    setSubmitting(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="login-container">
      <Formik
        validationSchema={schema}
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div>

            <form noValidate onSubmit={handleSubmit} className="form-login">
              <span className="loginheader">Log In</span>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="myworkemail@work.com"
                id="email"
                className="login-input"
              />
              <p className="error-message">
                {errors.email && touched.email && errors.email}
              </p>

              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                maxLength={8}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="login-input"
              />
              <img
                src={eyeIcon}
                className="login-eye"
                alt="eye-icon"
                onClick={togglePasswordVisibility}
              />
              <p className="error-message">
                {errors.password && touched.password && errors.password}
              </p>

              <div className="login-btn">
                <button className='Login' type='submit'>Log In <span className="arrow-right">&rarr;</span></button>
              </div>
            </form>
            <div style={{ textAlign: 'center', color: "red" }}>
              {loginMessage && <p className="login-message">{loginMessage}</p>}
            </div>

          </div>
        )}
      </Formik>
      <div className="footnote">
        <p>
          <Link to="/resetpassword">Forgot Password?</Link>&nbsp; &nbsp;
          &nbsp; &nbsp; <Link to="/signupstep1">Sign Up</Link>
        </p>
        <div className="footnote2">
          <p>Term of use &nbsp; &nbsp; &nbsp; &nbsp; Privacy policy</p>
        </div>
      </div>
    </div>
  );
};
