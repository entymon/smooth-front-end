import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import MyHelp from '../pages/MyHelp';
import Portfolio from '../pages/Portfolio';
import CV from '../pages/CV';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/my-help" component={MyHelp}/>
			<Route path="/portfolio" component={Portfolio}/>
			<Route path="/cv" component={CV}/>
			<Route path="/blog" component={Blog}/>
			<Redirect from="*" to="/"/>
		</Switch>
	);
};

export default Routes;