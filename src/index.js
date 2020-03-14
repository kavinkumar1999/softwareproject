import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import Stulogin from './components/stulogin.jsx';
import Studash from './components/studash.jsx';
import Facdash from './components/facdash.jsx';
import Applypass from './components/applypass.jsx';
import Passhist from './components/passhist.jsx';
import Facpass from './components/facpass.jsx';
import 'mdbreact/dist/css/mdb.css';
import './login.css'
//import Requestroombooking from './components/requestroombooking.jsx';

ReactDOM.render(
	<React.Fragment>
		<Router>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/stulogin" component={Stulogin} />
				<Route exact path="/studash" component={Studash} />
				<Route exact path="/facdash" component={Facdash} />
				<Route exact path="/applypass" component={Applypass} />
				<Route exact path="/passhist" component={Passhist} />
				<Route exact path="/facpass" component={Facpass} />
				<Route component={App} />
			</Switch>
		</Router>
	</React.Fragment>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
