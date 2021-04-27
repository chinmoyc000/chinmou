import React from 'react';
import loginbanner from 'enl-images/astrambg.svg'; // gives image path
import {Redirect} from 'react-router-dom';
import history from 'utils/history';
import Axios from 'axios';

class LoginFormAuth extends React.Component 
{
  loginForm = (event) => 
  {
    event.preventDefault();
    event.persist();
    Axios.post('http://localhost/php-react/add-user.php',{
        user_name:this.username.value,
        user_email:'chinmy@gmail.com'
    })
    .then(function ({data}) 
    {
        if(data.success === 1)
        {
           
            event.target.reset();
            history.push("/app");
            //alert(data.msg);
        }
        else
        {
            alert(data.msg);
        }
    }.bind(this))
    .catch(function (error) 
    {
        console.log(error);
    });

}

 
  render() {
    
     
   
    return (
      <div>
      <section class="login-section" >
        <img src={loginbanner} alt=""></img>
        <div class="container">
			<div class="login-box">
      <h1>Login</h1>
      <form onSubmit={this.loginForm}>
      <div class="login-form">
					<div class="form-group">
						<label for="email">Email</label>
						<input type="text" class="form-control" name="username" ref={(val) => this.username = val} placeholder="Your Username" />
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input type="password" class="form-control" name="password" ref={(val) => this.password = val} placeholder="Your Password" />
					</div>
					<div class="form-group form-link">
						<label for="rememberme">
            <input type="checkbox" id="rememberme" name="rememberme"></input>
							<span>Remember Me</span>
						</label>
						<a href="/reset-password">Forgot Password?</a>
					</div>
					<div class="form-group">
						<input type="submit" value="Login" class="btn" />
            
					</div>
				</div>
        </form>
        <div class="other-link">
					<a href="#" target="_blank" class="googleplay"></a>
					<a href="#" target="_blank" class="weblink"></a>
				</div>


        </div>
        </div>
      </section>

<div class="footer-link">
<div class="container">
  <div class="footer-info">
    <span>Copyright © Astram 2021. <a href="#">Privacy Policy</a></span>
    <a href="tel:+27718983840" class="phoneinfo">+27 71 898 3840</a>
    <a href="mailto:info@astramapp.com">info@astramapp.com</a>
  </div>
</div>
</div>
</div> 
    );
  }
}
export default LoginFormAuth;