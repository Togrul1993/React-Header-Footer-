import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

const Home = () => {
	return (
		<div className="container-fluid p-0 home">
			<Navbar />
			<Header />
			<Footer />
		</div>
	)
}

export default Home
