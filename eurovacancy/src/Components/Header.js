import React from 'react';

import header_img_2 from '../Image/headerImage-3.png'
const Header = () => {
	return (
		<>
			<div className="container-fluid p-0 euro-header">
				<h1 className="euro-title">Eurovacancy</h1>
				<img className="header_image_2" src={header_img_2} />

			</div>
		</>
	)
}

export default Header
