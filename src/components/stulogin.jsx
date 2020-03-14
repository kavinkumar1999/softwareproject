import React, { Component } from 'react';
import './stulogincss.css'
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  Redirect
} from "react-router-dom";

class Stulogin extends Component {
  state = { uid: "", pwd: "",status:""};

  studentlogin = event => {
    event.preventDefault();
    var value=this;

    var formdata= new FormData(document.getElementById("custrm"));
    var data= new URLSearchParams();
    for (var pair of formdata) {
      data.append(pair[0], pair[1])
    }
    
    fetch('http://localhost:8000/login', {
      method: 'post',
      body: data
    }).then(function (response) {
      return response.json();

    }).then(function (json) {
      value.setState({ status: json[0].su })
      if(value.state.status==="fail")
      {
        alert('Incorrect username or password')
      }
      else
      {
        sessionStorage.setItem('uname', value.state.status);
        if(value.state.status.startsWith('cb.en.t'))
        {
          window.history.pushState(null, "facdash", "/facdash");
          window.location.reload();
        }
        else
        {
          window.history.pushState(null, "studash", "/studash");
          window.location.reload();
        }
        
      }

      
    })
  };

	render() {
		return (
			<div>
          <title>Student Login</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* <link rel="stylesheet" type="text/css" href="./fonts/iconic/css/material-design-iconic-font.min.css"> */}
          {/* <link rel="stylesheet" type="text/css" href="./css/main.css"> */}
         
          <div className="limiter">
            <div className="container-login100" style={{backgroundImage: 'url("https://static.toiimg.com/photo/60387019/.jpg")'}}>
              <div style={{background: 'transparent', float: 'left'}}>
                <span style={{color: 'black', fontWeight: 900, fontSize: '100px', paddingRight: '150px'}}><br />
                  <span style={{color: 'black', fontWeight: 900, fontSize: '100px', paddingRight: '150px'}}>LOGIN
                  </span></span></div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="wrap-login100">
                <form className="login100-form validate-form" id='custrm'>
                  <span className="login100-form-logo">
                    {/* <i class="zmdi zmdi-landscape"></i> */}
                    <img src="https://www.flaticon.com/premium-icon/icons/svg/1082/1082404.svg" alt="No Image" style={{width: '50%'}} />
                  </span>
                  <span className="login100-form-title p-b-34 p-t-27">
                    Log in
                  </span>
                  <div className="wrap-input100 validate-input" data-validate="Enter username">
                    <input className="input100" type="text" name="uname" placeholder="Username" required/>
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="wrap-input100 validate-input" data-validate="Enter password">
                    <input className="input100" type="password" name="pwd" placeholder="Password" required/>
                    <span className="focus-input100" data-placeholder="" />
                  </div>
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn" onClick={this.studentlogin}>
                  Login
                    </button>
                    {/* <input type="submit"></input> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
		);
	}
}

export default Stulogin;