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
								<div className="home-left-title">find doctors and nurses for free</div>
								<div className="home-left-sub">
									our mission is to improve access and efficiency of care through the digitization of
									the healthcare journey
								</div>

								<a className="home-left-button" href="https://eobasuyi.typeform.com/to/JRC78d">
									join us on our mission
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
