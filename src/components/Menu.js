import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.css'

export default class Menu extends React.Component {
	
	render = () => {
		return (
			<div className="main-menu">
				<div className="menu-item">
					<Link className="company-name" to="/home">Smooth Code Line</Link>
				</div>
				<div className="menu-item">
					<Link className="link active" to="/portfolio">What I have done</Link>
				</div>
				<div className="menu-item">
					<Link className="link" to="/my-help">How I can help you</Link>
				</div>
				<div className="menu-item">
					<Link className="link" to="/cv">My CV</Link>
				</div>
				<div className="menu-item">
					<Link className="link" to="/blog">Blog</Link>
				</div>
			</div>
		);
	}
}