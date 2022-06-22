import React from 'react';
import './Footer.css';

// Images
import logo from '../../images/SamanthaHall_Logo_reversed.png';

function Footer() {
	return (
		<div className='footer-container'>
			<img src={logo} alt='footer-log' className='footer-logo' />
			<div className='footer-links'>
				<p className='footer-text'>Lorem ipsum odlor sit amet, consectetur adipiscing elit</p>
				<div className='footer'>
					<a href='https://blueprintinteractive.com/privacy-policy'>
						Privacy Policy
					</a>
					<p>©2021</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
