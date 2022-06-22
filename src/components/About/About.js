import React from 'react';
import './About.css';

// Images
import logo1 from '../../images/about-photo_1.jpg';
import logo2 from '../../images/about-photo_2.png';

function About() {
	return (
		<div className='about-container'>
			<h1>MEET SAMANTHA</h1>
			<div className='section-1-paragraph'>
				<img src={logo2} alt='logo-2' className='image-1' />
				<div className='image-description'>
					<p className='image-description-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
				</div>
			</div>
			<div className='section-2-paragraph'>
				<div>
					<p className='s2-p'>
						Torem incum dolor sit amet concertetur adiniccina alit sed urus tais
						tortor in. consecur sem. Vivamus guis turois metus. Vestibulum
						ultricies leo libero, sed venenatis turps molestie ac. Proin eu
						quameget tortor alamentumanrast in at act Car at farilicicastic In
						han hahitacce n atea dictumct fucce onortic urna quic as diam
						volutnat incto ced cre pricalie guam vel vehicula lorem mattis. Nam
						faucibus ligula vitae mauris vehicula. at egestas eros gravida.
						Maecenas maximus alicuam nisl vel temnor eros nulvinar sit amet.
						Mauris varius. orci cad temnor imperdiet metic diam curcuc prat quic
						avimus en linero ut nula.
					</p>
					<p className='s2-p'>
						Nunc mollis pellentesque maximus. Morbi ultrices blandit augue. eget
						commodo urna pretium sed. Present nec pretium ninn Itiam non
						Millamenrnor masca an handit tortor Drain turpis nibh, dictum si.
						amet dui eu, fringilla dapibus purus Mauric interdum linero
						arvulnutate a ementum.
					</p>
				</div>
				<img src={logo1} alt='logo-1' className='image-2' />
			</div>
		</div>
	);
}

export default About;
