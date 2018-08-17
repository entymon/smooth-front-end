import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Menu.css'
import { PORTFOLIO, ROUTES } from '../constants/constants';

@connect((store) => {
	return {
		link: store.mainMenu.menuLink
	}
})
export default class Menu extends React.Component {
	
	linkHandler = () => {
		console.log('test');
	};
	
	render = () => {
		return (
			<div className="main-menu">
				<div className="menu-item">
					<Link onClick={() => this.linkHandler()} className="company-name" to="/home">Smooth Code Line</Link>
				</div>
				<div className="menu-item">
					<Link onClick={() => this.linkHandler()} className={`link ${this.props.link === ROUTES.PORTFOLIO && 'active'}`} to="/portfolio">What I have done</Link>
				</div>
				<div className="menu-item">
					<Link onClick={() => this.linkHandler()} className={`link ${this.props.link === ROUTES.WORK_RANGE && 'active'}`} to="/work-range">How I can help you</Link>
				</div>
				<div className="menu-item">
					<Link onClick={() => this.linkHandler()} className={`link ${this.props.link === ROUTES.CV && 'active'}`} to="/cv">My CV</Link>
				</div>
				<div className="menu-item">
					<Link onClick={() => this.linkHandler()} className={`link ${this.props.link === ROUTES.BLOG && 'active'}`} to="/blog">Blog</Link>
				</div>
			</div>
		);
	}
}