import React, { Component } from 'react';
import logo from '../imgs/logo.svg';

class M_Header extends Component {
	render() {
		return (
			<div className="mheader">
				<div className="mheader-box">
					<img className="mheader-box-img" src={logo} />
				</div>
			</div>
		);
		/*
		return (
			<div className="mheader">
                
				<img className="mheader-img" src={logo} />
				<h2 className="mheader-primary">Find doctors for free</h2>
				<a className="mheader-btn" href="#">
					<span className="mheader-btn-text">Get started</span>
				</a>
			</div>
        );
        */
	}
}

export default M_Header;
