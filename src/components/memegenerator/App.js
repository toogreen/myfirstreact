import React, {Component} from "react"
import GoogleAnalytics from "./ga"
import Header from "../Header"
import MemeGenerator from "./MemeGenerator"
import Ad from "../Ad"
import Footer from "../Footer"
import "./App.css"

function App() {
	return (
		<div>
			<Header />
			<MemeGenerator />
			<Footer />
		</div>
	)
}

export default App