/* eslint-disable react/no-unescaped-entities */
import BaseHeroSection from "../common/herosection.jsx";
import coins from "../../assets/coins.png";


import './SignUp.css'


const SignUp = () => {
  return (
    <BaseHeroSection>
      <div className="signin-hero">
      
        
        <div className="signup-section">
<div className="signup-img">
          <img src={coins} />
        </div>
      <div className="signup-text">

      
      <div className=" text-white max-w-[600px] text-center">
        <p className="text-7xl font-bold my-2">Sign Up</p>
        <p className="text-base mt-2 font-medium">
        Fill in these details to get started.
        </p>
        <div className="signup-form">
        <div className="fname-section">
            <p>First name</p>
            <input type="text" placeholder="Victor" />
          </div>
          <div className="lname-section">
            <p>Last name</p>
            <input type="text" placeholder="Chavez" />
          </div> <div className="email-section">
            <p>Email</p>
            <input type="text" placeholder="me@gmail.com" />
          </div>

          <div className="create-password-section">
            <p>Create Password</p>
            <input type="password" placeholder="*******" />
            <svg xmlns="http://www.w3.org/2000/svg"  className="absolute right-3 top-3 h-5 w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div className="repeatPassword-section">
            <p>Repeat Password</p>
            <input type="password" placeholder="*******" />
            <svg xmlns="http://www.w3.org/2000/svg"  className="absolute right-3 top-3 h-5 w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div className="forgort-section">
            <p>Forgot Password</p>
           
          </div>
          <div className="sign-up-button">
            <button>Sign Up</button>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-3 h-5 w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
          <div className="sign-up-page">
        <p>Already have an account? Sign in</p>
      </div>
        </div>
        
      </div>
     
      
      </div>
      </div>
      </div>
       
    </BaseHeroSection>
  );
};

export default SignUp;
