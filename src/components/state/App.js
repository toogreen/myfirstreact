import React, {Component} from "react";

class App extends Component {
	
	constructor() {
		super()
		this.state = {
			isLoggedIn: true
		}
	}

	

	render() {

		let wordDisplay 
		if (this.state.isLoggedIn) {
			wordDisplay = "in"
		} else {
			wordDisplay = "out"
		}
		return(
			<div>
				<h1>You are currently logged {wordDisplay}</h1>
			</div>
		)
	}

}

export default App