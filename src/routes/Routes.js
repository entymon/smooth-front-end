import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Blog from '../pages/Blog';
import WorkRange from '../pages/WorkRange';
import Portfolio from '../pages/Portfolio';
import CV from '../pages/CV';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/portfolio" component={Portfolio}/>
			<Route path="/work-range" component={WorkRange}/>
			<Route path="/cv" component={CV}/>
			<Route path="/blog" component={Blog}/>
			<Redirect from="*" to="/"/>
		</Switch>
	);
};

export default Routes;