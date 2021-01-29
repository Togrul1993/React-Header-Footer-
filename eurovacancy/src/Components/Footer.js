import React from 'react'

const Footer = () => {
	return (
		<footer className="container-fluid euro-footer">

			<div className="about-link-share">

				<h6>Haqqimizda</h6>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
				<span className="phone"><a href="/"><i class="fa fa-phone" aria-hidden="true"></i></a> (+994) 011 222 33 44</span>
				<span className="email"><a href="/"><i class="fa fa-envelope" aria-hidden="true"></i></a> eurovacancy@gmail.com</span>

				<div className="link-share">
					<i class="fa fa-facebook" aria-hidden="true"></i>
					<i class="fa fa-instagram" aria-hidden="true"></i>
					<i class="fa fa-whatsapp" aria-hidden="true"></i>
					<i class="fa fa-telegram" aria-hidden="true"></i>
					<i class="fa fa-twitter" aria-hidden="true"></i>
				</div>
			</div>

			<div className="AdTypes">
				<h6>Elan Növləri</h6>
				<a href="#">Full-time işlər</a>
				<a href="#">Part-time işlər</a>
				<a href="#">Frilans işlər</a>
				<a href="#">Təcrübə Proqramı</a>
			</div>

			<form className="form">
				<h6>Measj Gonder</h6>
				<input type="text" placeholder="Ad / Soyad" />
				<input type="email" placeholder="Email" />
				<textarea rows="5" cols="15" placeholder="Movzu"></textarea>
				<button type="submit">Gonder</button>
			</form>

		</footer>
	)
}

export default Footer
