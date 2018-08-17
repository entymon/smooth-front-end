import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Menu.scss'
import { ROUTES } from '../constants/constants';
import { makeActiveLink } from '../store/actions/MenuAction';

@connect((store) => {
	return {
		link: store.mainMenu.menuLink
	}
})
export default class Menu extends React.Component {
	
	_linkHandler = (name) => {
		this.props.dispatch(makeActiveLink(name));
	};
	
	render = () => {
		return (
			<div className="main-menu-container">
				<div className="main-menu">
					<div className="menu-item">
						<Link onClick={() => this._linkHandler(ROUTES.HOME)} className="company-name" to="/home">Smooth Code Line</Link>
					</div>
					<div className="menu-item">
						<Link onClick={() => this._linkHandler(ROUTES.PORTFOLIO)} className={`link ${this.props.link === ROUTES.PORTFOLIO && 'active'}`} to="/portfolio">What I have done</Link>
					</div>
					<div className="menu-item">
						<Link onClick={() => this._linkHandler(ROUTES.WORK_RANGE)} className={`link ${this.props.link === ROUTES.WORK_RANGE && 'active'}`} to="/work-range">How I can help you</Link>
					</div>
					<div className="menu-item">
						<Link onClick={() => this._linkHandler(ROUTES.CV)} className={`link ${this.props.link === ROUTES.CV && 'active'}`} to="/cv">My CV</Link>
					</div>
					<div className="menu-item">
						<Link onClick={() => this._linkHandler(ROUTES.BLOG)} className={`link ${this.props.link === ROUTES.BLOG && 'active'}`} to="/blog">Stories</Link>
					</div>
				</div>
				<div className='show-block'/>
			</div>
		);
	}
}