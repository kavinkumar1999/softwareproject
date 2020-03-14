import React, { Component } from 'react';
import Logo from './components/Logo.png';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { MDBAnimation } from 'mdbreact';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = { facultyname: 'facultyname', fid: 0 };
	}

	facultytimetable = (event) => {
		window.history.pushState(null, 'facultytimetable', '/facultytimetable');
		window.location.reload();
	};

	roomtimetable = (event) => {
		window.history.pushState(null, 'roomtimetable', '/roomtimetable');
		window.location.reload();
	};

	freeslotfaculty = (event) => {
		window.history.pushState(null, 'freeslotfaculty', '/freeslotfaculty');
		window.location.reload();
	};

	requestroombooking = (event) => {
		window.history.pushState(null, 'requestroombooking', '/requestroombooking');
		window.location.reload();
	};

	cancelclass=(event)=>
	{
		window.history.pushState(null, 'cancelclass', '/cancelclass');
		window.location.reload();
	};

	initial = () => {
		let value = this;
		sessionStorage.setItem('fid', 400);
		sessionStorage.setItem('fname', 'Aghilan');
    
		value.setState({ facultyname: sessionStorage.getItem('fname') });
		value.setState({ fid: sessionStorage.getItem('fid') });
	};

	render() {
		return (
			<div>
        <title>
          AWOL.
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css?family=Teko&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{__html: "\n    body {\n        font-family: Arial;\n        padding: 20px;\n        background: #f1f1f1;\n      }\n      \n      /* Header/Blog Title */\n      .header {\n        padding: 30px;\n        font-size: 40px;\n        text-align: center;\n        background: white;\n      }\n\n      /* @font-face {\n        font-family: 'Josefin Sans', sans-serif;\n      } */\n\n      .logo {\n        font-family: 'Josefin Sans', sans-serif;\n        font-size: xx-large;\n      }\n\n      .madetext {\n        font-family: 'Teko', sans-serif;\n      }\n      \n      /* Create two unequal columns that floats next to each other */\n      /* Left column */\n      .leftcolumn {\n        float: left;\n        width: 75%;\n      }\n      \n      /* Right column */\n      .rightcolumn {\n        float: left;\n        width: 25%;\n        padding-left: 20px;\n      }\n      \n      /* Fake image */\n      .fakeimg {\n        width: 50%;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n        /* image-rendering: crisp-edges; */\n      }\n      \n      /* Add a card effect for articles */\n      .card {\n        background-color: white;\n        padding: 20px;\n        margin-top: 20px;\n      }\n      \n      /* Clear floats after the columns */\n      .row:after {\n        content: \"\";\n        display: table;\n        clear: both;\n      }\n      \n      /* Footer */\n      .footer {\n        padding: 20px;\n        text-align: center;\n        background: #ddd;\n        margin-top: 20px;\n      }\n\n      /* .witchermedallion {\n        img src: ;\n      } */\n      \n      /* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */\n      @media screen and (max-width: 800px) {\n        .leftcolumn, .rightcolumn {\n          width: 100%;\n          padding: 0;\n        }\n      }\n        " }} />
        <div className="logo">
          AWOL.
        </div>
        <br />
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            {/* BRAND
        <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#alignment-example" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">AWOL.</a>
        </div> */}
            {/* COLLAPSIBLE NAVBAR */}
            <div className="collapse navbar-collapse" id="alignment-example">
              {/* Links */}
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">HOME <span className="sr-only">(current)</span></a></li>
                {/* <li><a href="#">FACULTY LOGIN</a></li> */}
                <li><a href="http://github.com/Surya-Prasad">CONTACT</a></li>
                <li><a href="http://intranet.cb.amrita.edu">DIRECT TO AUMS</a></li>
                <li><a href="/stulogin" style={{float: 'right'}}>LOGIN</a></li>
              </ul>
              {/* Search */}
            </div>
          </div>
        </nav>
        {/* 
<div class="header">
    <h2>OD/ML management</h2>
</div> */}
        <div className="row">
          <div className="container-fluid">
            <div className="card">
              <h2>About</h2>
              <div className="fakeimg">
                <img style={{margin: 'auto', width: '68rem'}} src="https://st3.depositphotos.com/2454953/12784/i/950/depositphotos_127848860-stock-photo-paid-sick-leave-word-cloud.jpg" />
                <br />
                <br />
                <p className="madetext" style={{width: '100%', fontSize: 'x-large'}}>An [Insert word here for almost fully, but not really] automated filling system for all your leave application needs.</p>
              </div>
            </div>
            {/* <div class="card">
          <h3>steps</h3>
        </div> */}
          </div>
        </div>
        <div id="band" className="container text-center">
          <h3>THE CONTRIBUTORS</h3>
          {/* <p><em>We love music!</em></p> */}
          <p>A Web Monstrosity, created with ♥ by a bunch of Monsters. </p>
          <br />
          <div className="row">
            <div className="col-sm-4">
              <p className="text-center"><strong>Nishanth M</strong></p><br />
              <a href="#demo" data-toggle="collapse">
                <i className="far fa-user-circle" style={{fontSize: '48px', color: 'blue'}} />
              </a>
            </div>
            <div className="col-sm-4">
              <p className="text-center"><strong>Surya Prasad S</strong></p><br />
              <a href="#demo2" data-toggle="collapse">
                <i className="far fa-user-circle" style={{fontSize: '48px', color: 'red'}} />
              </a>
            </div>
            <div className="col-sm-4">
              <p className="text-center"><strong>Kavin Kumar</strong></p><br />
              <a href="#demo3" data-toggle="collapse">
                <i className="far fa-user-circle" style={{fontSize: '48px', color: 'indigo'}} />
              </a>
            </div>
          </div>
          {/* 2ndrow of CONTRIBUTORS */}
          <br />
          <div className="row">
            <div className="col-sm-4">
              <p className="text-center"><strong>Kaviya S</strong></p><br />
              <a href="#demo" data-toggle="collapse">
                <i className="far fa-user-circle" style={{fontSize: '48px', color: 'salmon'}} />
              </a>
            </div>
            <div className="col-sm-4">
              <p className="text-center"><strong>Tony Geefus</strong></p><br />
              <a href="#demo2" data-toggle="collapse">
                <i className="far fa-user-circle" style={{fontSize: '48px', color: 'yellow'}} />
              </a>
            </div>
            <div className="col-sm-4">
              <p className="text-center"><strong>Medapati Sai Chand</strong></p><br />
              <a href="#demo3" data-toggle="collapse">
                <i className="far fa-user-circle" style={{fontSize: '48px', color: 'green'}} />
              </a>
            </div>
          </div>
        </div>
      </div>
		);
	}
}

export default App;
