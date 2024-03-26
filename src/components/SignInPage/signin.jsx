/* eslint-disable react/no-unescaped-entities */
import BaseHeroSection from "../common/herosection.jsx";
import diamonds from "../../assets/diamond.png";
import './SignIn.css'

import { Button } from "@lemonsqueezy/wedges";
const SignIn = () => {
  return (
    <BaseHeroSection>
      <div className="signin-hero">
        <div className="signin-section">
        <img src= {diamonds} className="signIn-img" />
      
      <div className=" text-white max-w-[600px] text-center">
        <p className="text-center text-[3rem] not-italic font-medium leading-[3rem]">Sign In </p>
        <p className="text-center text-[1rem] not-italic font-medium leading-6">
          It is great to have you, Login to continue
        </p>
        </div>
        <div className="signin-form">

          <div className="email-section">
            <p className="input-label">Email</p>
            <input type="text" placeholder="me@gmail.com"  className="input-box"/>
          </div>
          <div className="password-section">
            <p className="input-label">password</p>
            <input className="input-box" type="password" placeholder="*******" />
            <p className="forgot-password">
              Forgot Password</p>
            </div>
          
          <div className="sign-in-submit">
            <button size="md" className="submit-btn" shape="pill" variant="secondary" >Sign In</button>
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute right-3 top-3 h-5 w-5 text-gray-400" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12Z" stroke="white" stroke-opacity="0.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          </div>
        </div>
        <div className="sign-up-page">
        <p className="sign-up-text"> Don't have an account? Sign Up</p>
      </div>
      </div>
     
      
      </div>
     
      
       
    </BaseHeroSection>
  );
};

export default SignIn;
