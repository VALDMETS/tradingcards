import React from 'react';
import store from '../store';

const Login = React.createClass({
  render: function() {
    return (
    <form onSubmit={this.submit}>
      <input type="text" ref="loginname" placeholder="User Name"/>
      <input type="password" ref="loginpassword" placeholder="Password"/>
      <input type="submit" value="Log In"/>
      <a href="#signup">Not a member? Sign up!</a>
    </form>
  );
  },
  submit: function(e) {
    e.preventDefault();
    store.session = {
      name: this.refs.loginname.value,
      password: this.refs.loginpassword.value
    };
    console.log(store.session);
    document.getElementById('loginbutton').className = 'hidden';
    location.hash="#0";
  },
});

export default Login;
