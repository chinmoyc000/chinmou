import React from 'react';
import loginbanner from 'enl-images/astrambg.svg'; // gives image path
import { Redirect } from 'react-router-dom';
import history from 'utils/history';
import Axios from 'axios';

class LoginFormAuth extends React.Component {
    testApiToken=(event) => {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('access_token')
        },
        body: JSON.stringify({ user_name: this.username.value, password: this.username.value })
      };
      fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json()


        )
        .then(data => this.setState({ postId: data.id }));
    }


    loginForm = (event) => {
      event.preventDefault();
      event.persist();
      Axios.post('http://localhost/php-react/login.php', {
        user_name: this.username.value,
        user_email: 'chinmy@gmail.com'
      })
        .then(({ data }) => {
          if (data.success === 1) {
            event.target.reset();
            localStorage.setItem('access_token', data.access_token);
            history.push('/app');
          } else {
            alert(data.msg);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }


    render() {
      return (
        <div>
          <section className="login-section">
            <img src={loginbanner} alt="" />
            <div className="container">
              <div className="login-box">
                <h1>Login</h1>
                <form onSubmit={this.loginForm}>
                  <div className="login-form">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="text" className="form-control" name="username" ref={(val) => this.username = val} placeholder="Your Username" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input type="password" className="form-control" name="password" ref={(val) => this.password = val} placeholder="Your Password" />
                    </div>
                    <div className="form-group form-link">
                      <label htmlFor="rememberme">
                        <input type="checkbox" id="rememberme" name="rememberme" />
                        <span>Remember Me</span>
                      </label>
                      <a href="/reset-password">Forgot Password?</a>
                    </div>
                    <div className="form-group">
                      <input type="submit" value="Login" className="btn" />

                    </div>
                  </div>
                </form>
                <div className="other-link">
                  <a href="#" target="_blank" className="googleplay" />
                  <a href="#" target="_blank" className="weblink" />
                </div>


              </div>
            </div>
          </section>

          <div className="footer-link">
            <div className="container">
              <div className="footer-info">
                <span>
Copyright © Astram 2021.
                  <a href="#">Privacy Policy</a>
                </span>
                <a href="tel:+27718983840" className="phoneinfo">+27 71 898 3840</a>
                <a href="mailto:info@astramapp.com">info@astramapp.com</a>
              </div>
            </div>
          </div>
        </div>
      );
    }
}
export default LoginFormAuth;
