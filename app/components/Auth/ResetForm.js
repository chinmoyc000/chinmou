import React from 'react';

import logo from 'enl-images/logo.svg';
import  { Redirect } from 'react-router-dom'
class ResetForm extends React.Component 
{
  loginForm =  (event) => 
  {
    event.preventDefault();
    event.persist();
  }
  render() {
    return (
      <section class="forgotsection">
      <div class="forgot-box">
        <div class="welcomelogo text-center">
          <h2>Welcome to the</h2>
          <img src={logo} alt="logo"></img>
        </div>
        <div class="forgot-title">
          <h2>Forgot Password?</h2>
        </div>
        <div class="login-form">
          <div class="form-group">
            <input type="text" class="form-control" name="email" placeholder="Your Email22" />
          </div>
          <div class="form-group">
            <input type="submit" value="Send" class="btn" />
          </div>
          <div class="form-group form-link">
            <a href="/login">Back to login?</a>
          </div>
        </div>
      </div>
    </section>
    );
  }
}
export default ResetForm;