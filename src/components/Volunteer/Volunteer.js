import React from 'react';
import './Volunteer.css';

// Images
import logo from '../../images/SamanthaHall_Logo_reversed.png';

function Volunteer() {
	return (
		<div className='background-image'>
			<div className='volunteer-container'>
				<img src={logo} alt='samantha-hall-logo' className='logo-img' />
				<div className='form-container'>
					<h3>STAY IN TOUCH WITH SAMANTHA</h3>
					<form method='post' className='form'>
						<input name='email' placeholder='Email' className='input-email' />
						<div className='form-inputs'>
							<input name='phone' placeholder='Phone' className='input-phone' />
							<input name='zipcode' placeholder='ZIP' className='input-zipcode ' />
						</div>
						<input name='email' type='button' value='SIGN UP' className='input-btn' />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Volunteer;
