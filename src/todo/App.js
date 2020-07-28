import React from "react";

import Header from "../components/Header";
import MainContent from "./MainContent"
import Footer from "../components/Footer"
import "../App.css";

function App(){

	return (
		<div>
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

export default App