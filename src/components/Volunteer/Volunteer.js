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

	const handleChange = (e) => {
		setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		axios({
			method: 'POST',
			url: 'https://v1.nocodeapi.com/joesphchang/google_sheets/XcWCqxPqofSsPjsJ?tabId=Sheet1',
			params: {},
			data: setData,
		})
			.then(function (response) {
				// handle success
				console.log(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	}

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
							value={data.email}
							id='email'
							required
						/>
						<div className='form-inputs'>
							<input
								name='phone'
								type='text'
								placeholder='Phone'
								className='input-phone'
								onChange={handleChange}
								value={data.phone}
								id='phone'
								required
							/>
							<input
								name='zipcode'
								type='text'
								placeholder='ZIP'
								className='input-zipcode'
								onChange={handleChange}
								value={data.zipcode}
								id='zipcode'
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
