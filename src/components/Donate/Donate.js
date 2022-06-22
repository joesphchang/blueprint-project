import React from 'react';
import './Donate.css';

function Donate() {
	return (
		<div className='donate-container'>
			<h2>DONATE TO SUPPORT SAMANTHA'S CAMPAIGN</h2>
			<div className='donate-boxes'>
				<div className='twenty-box'>
					<span className='dollar-sign'>$</span>
					<span className='text-box'>25</span>
				</div>
				<div className='other-box'>
					<span className='text-box'>Other</span>
				</div>
				<div className='fifty-box'>
					<span className='dollar-sign'>$</span>
					<span className='text-box'>50</span>
				</div>
				<div className='hundred-box'>
					<span className='dollar-sign'>$</span>
					<span className='text-box'>100</span>
				</div>
			</div>
		</div>
	);
}

export default Donate;
