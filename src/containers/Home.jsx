import React, { Component } from 'react';
import logo from '../imgs/logo.svg';
import M_Header from '../components/M_Header';

class Home extends Component {
	render() {
		return (
			<div className="home">
				<div className="container-fluid">
					<div className="row">
						<div className="home-colLeft">
							<div className="home-left">
								<img className="home-left-logo" src={logo} />
								<div className="home-left-title">Engage your patients. Enhance your organizational intelligence.</div>
								<div className="home-left-sub">
									We are on a mission to help healthcare providers in emerging market improve relationship and communications with their patients. 
								</div>

								<a className="home-left-button" href="https://eobasuyi.typeform.com/to/JRC78d">
									Contact us
								</a>
							</div>
						</div>
						<div className="home-colRight">
							<div className="home-right" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
