import { Dropdown, Button } from 'react-bootstrap'
import aze from '../Image/azerbaijan.png'
import eng from '../Image/united-kingdom.png'
import rus from '../Image/russia.png'
import logo from '../Image/logo.png'
import world from '../Image/world.png'
import addCv from '../Image/addCv-2.png'

const Navbar = () => {



	const MenuRight = () => {
		const rightMenu = document.querySelector('.menu-items')
		rightMenu.style.left = "0"
		const left = document.querySelector('#right')
		left.style.display = "none"
		const right = document.querySelector('#left')
		right.style.display = "block"

	}


	const MenuLeft = () => {
		const leftMenu = document.querySelector('.menu-items')
		leftMenu.style.left = "-100%"

		const right = document.querySelector('#left')
		right.style.display = "none"

		const left = document.querySelector('#right')
		left.style.display = "block"
	}

	return (
		<>
			<div className="euro-navbar">

				<div className="euro-brand">
					<a className="euro-brand-link"><img src={logo} alt="Logo" /></a>
				</div>

				<div className="euro-button">
					<Dropdown className="euro-dropdown">
						<Dropdown.Toggle id="dropdown-basic" className="dropdown-button">
							<img src={world} />
						</Dropdown.Toggle>

						<Dropdown.Menu className="euro-dropdown-menu">
							<Dropdown.Item href="#/action-1" className="euro-dropdown-item"> <img src={aze} /></Dropdown.Item>
							<Dropdown.Item href="#/action-2" className="euro-dropdown-item"><img src={rus} /> </Dropdown.Item>
							<Dropdown.Item href="#/action-3" className="euro-dropdown-item"><img src={eng} /></Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>

					<Button href="#" className="add-cv"><img src={addCv} /></Button>
				</div>

			</div>

			<div className="menu-icon">

				<h6>
					<i id="right" className="fa fa-chevron-right" aria-hidden="true" onClick={MenuRight}></i>
					 Menu
					 <i id="left" className="fa fa-chevron-left" aria-hidden="true" onClick={MenuLeft}></i>
				</h6>
			</div>

			<ul className="menu-items">
				<a href="/" className="euro-item-link" >AnaSəyfə</a>
				<a href="/haqqımızda" className="euro-item-link" >Haqqımızda</a>
				<a href="/vakansiyaLar" className="euro-item-link" >VakansiyaLar</a>
				<a href="/blog" className="euro-item-link" >Blog</a>
				<a href="/reklam" className="euro-item-link" >Reklam</a>
				<a href="/qaydalar" className="euro-item-link" >Qaydalar</a>
				<a href="/əlaqə" className="euro-item-link" >Əlaqə</a>
			</ul>


		</>
	)
}

export default Navbar;
