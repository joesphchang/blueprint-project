import React from 'react';
import './Navigation.css';

// Logos
import logo from '../../images/SamanthaHall_Logo_reversed.png';
import facebook from '../../images/Social-icons/Facebook.png';
import twitter from '../../images/Social-icons/Twitter.png';
import instagram from '../../images/Social-icons/IG.png';

function Navigation() {
	return (
		<div className='navbar-container'>
			<img src={logo} alt='Logo' className='samantha-logo' />
			<div className='container'>
				<button className='btn btn-volunteer'>VOLUNTEER</button>
				<button className='btn btn-donate'>DONATE</button>
				<img
					src={facebook}
					alt='facebook'
					className='facebook-logo social-logos'
				/>
				<img
					src={twitter}
					alt='twitter'
					className='twitter-logo social-logos'
				/>
				<img
					src={instagram}
					alt='instagram'
					className='instagram-logo social-logos'
				/>
			</div>
		</div>
	);
}

export default Navigation;
