import React, { useState } from 'react';
import './Volunteer.css';
import axios from 'axios';

// Images
import logo from '../../images/SamanthaHall_Logo_reversed.png';

function Volunteer() {
	const [data, setData] = useState({
		email: '',
		phone: '',
		zipcode: '',
	});

	const { email, phone, zipcode } = data;

	const handleChange = (e) => {
		setData({ [e.target.value]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(
				'https://v1.nocodeapi.com/joesphchang/google_sheets/XcWCqxPqofSsPjsJ?tabId=Sheet1',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify([
						[email, phone, zipcode, new Date().toLocaleDateString()],
					]),
				}
			);
			await response.json();
			setData({ email: '', phone: '', zipcode: '' });
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='background-image'>
			<div className='volunteer-container'>
				<img src={logo} alt='samantha-hall-logo' className='logo-img' />
				<div className='form-container'>
					<h3>STAY IN TOUCH WITH SAMANTHA</h3>
					<form onSubmit={handleSubmit} className='form'>
						<input
							name='email'
							type='text'
							placeholder='Email'
							className='input-email'
							onChange={handleChange}
							value={email}
							id='email'
							required
						/>
						<div className='form-inputs'>
							<input
								name='phone'
								type='phonenumber'
								placeholder='Phone'
								className='input-phone'
								onChange={handleChange}
								value={phone}
								required
							/>
							<input
								name='zipcode'
								type='zipcode'
								placeholder='ZIP'
								className='input-zipcode'
								onChange={handleChange}
								value={zipcode}
								required
							/>
						</div>
						<input type='button' value='SIGN UP' className='input-btn' />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Volunteer;
