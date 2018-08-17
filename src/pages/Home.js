import React from 'react';
import './Home.css'
import ProgrammerImage from '../assets/images/programmer.png'

export default class Home extends React.Component {
	
	state = {
		containerHeight: window.innerHeight
	};
	
	_handleWindowResize = () => {
		this.setState({
			containerHeight: window.innerHeight
		});
	};
	
	componentDidMount = () => {
		window.addEventListener('resize', this._handleWindowResize);
	};
	
	componentWillUnmount() {
		window.removeEventListener('resize', this._handleWindowResize);
	}
	
	render = () => {
		return (
			<div className="container home-container">
				<div className="story-container">
					<div className="story">
						<p className='text'>Hi Everyone!</p>
						<p className='text'>I am a web developer</p>
						<p className='text'>and</p>
						<p className='text'>I love what I am doing.</p>
					</div>
					<div className="image">
						<img src={ProgrammerImage} alt=""/>
					</div>
				</div>
				
				<hr className="divider"/>
				
				<div className="experience-container">
					test
				</div>
			</div>
		);
	}
}