import React, { Component } from 'react';
import {
	BrowserRouter as Router,
} from 'react-router-dom';
import Routes from './routes/Routes';

import './App.css';
import Menu from './components/Menu';

class App extends Component {
  render() {
    
    return (
	    <div className="wrapper">
		    <Router>
          <div>
	          <Menu />
			      <Routes />
          </div>
		    </Router>
	    </div>
    );
  }
}

export default App;
