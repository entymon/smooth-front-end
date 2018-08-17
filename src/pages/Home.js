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
					<div>
						I am working on something you can see - it's Front end development (enthusiasm)
					</div>
					<div>
						In general this is visualisation of your imagination ... almost ;-)
					</div>
				</div>
				
				<hr className="divider"/>
				
				<div className="experience-container">
					<div>
						I am working on something you perhaps don't know if this exist at all - it's Back end development (surprised, confused)
					</div>
					<div>
						There are your users behind firewalls, security blocks, under full protection who are accepted your rules and privacy policy.
					</div>
				</div>
				
				<hr className="divider"/>
				
				<div>
					-----
					How can I help to you
					<p>
						I can help mange thing /  I can motivate you etc
					</p>
					<p>
						I am connecting people
					</p>
					<p>
						I am cooperate with
					</p>
				</div>
			</div>
		);
	}
}