import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import MainContent from "./Main";
import Footer from "./Footer";
import ContactCard from "./ContactCard";
import '../App.css';

function App() {
	return (
		<div>
			<Header />
			<div className="contacts">
				<ContactCard 
					name="Mr. Whiskerson" 
					imgUrl="https://toogreen.ca"
					phone="(212) 555-1234"
					email="toogreen@gmail.com"
				/>
				<ContactCard 
					name="Mr. Whiskerson 2" 
					imgUrl="https://cats.ca"
					phone="(212) 555-3456"
					email="toogreen@gmail.com"
				/>
				<ContactCard 
					name="Mr. Whiskerson 3" 
					imgUrl="https://bear.ca"
					phone="(212) 555-5678"
					email="toogreen@gmail.com"
				/>
				<ContactCard 
					name="Mr. Whiskerson 4" 
					imgUrl="https://bats.ca"
					phone="(212) 555-7890"
					email="toogreen@gmail.com"
				/>
			</div>
		 	<Footer />
		</div>
	)
}

export default App;