import React from 'react';
import Logo from '../Components/Logo';
import StepsContainer from '../Components/StepsContainer';
import SignUp from '../Components/SignUp';
import '../SignUp.css';

const SignUpPage = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="background-container">
          <Logo />
          <StepsContainer />
        </div>
      </div>
      <div className="right-side">
        <SignUp />
      </div>
    </div>
  );
};

export default SignUpPage;
