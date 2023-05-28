import React from 'react';
import LoginBg from '../Components/LoginBg';
import { LoginForm } from '../Components/LoginForm';



function Login() {
  return (
    <div className="container">
          <div className="left-side">
              <LoginBg/>
          </div>
          <div>
            <LoginForm/>
          </div>
     
    </div>
  )
}

export default Login
