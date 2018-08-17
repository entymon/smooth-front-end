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
				
				<div className="info-container">
					<div className='image'>
						In general this is visualisation of your imagination ... almost ;-)
					</div>
					<div className='text'>
						I am working on something you can see.<br/>
						It's a front end development.<br/>
						Basically, this is visualisation of your imagination<br />
						... almost ;-)
					</div>
				</div>
			
				
				<hr className="divider"/>
				
				<div className="info-container">
					<div className='image'>
						(surprised, confused)There are your users behind firewalls, security blocks, under full protection who are accepted your rules and privacy policy.
					</div>
					<div className='text'>
						I am working on something you don't see.<br/>
						... and perhaps you even don't know truly if exist.<br/>
						It's back end development.<br/>
						This is engine of the visualisation.
					</div>
				</div>
				
				<hr className="divider"/>
				
				<div className="info-container">
					<div className='image'>
						Image
					</div>
					<div className='text'>
						I have been working with startups and also I was co-founder of one - Agrokalkulator.pl (experiment)
					</div>
				</div>
				
				
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