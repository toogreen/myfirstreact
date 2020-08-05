import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			isLoggedIn: false
		}
		this.handleClick = this.handleClick.bind(this)
	}

	// Need to study this fucking headache
	handleClick() {

		this.setState(prevState => {
			return {
				isLoggedIn: !prevState.isLoggedIn
			}
		})		
	}

	render() {
		let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
		let bannerText = this.state.isLoggedIn ? "You are currently logged in" : "You are currently logged out"
		return(
			<div>
				<h1>{bannerText}</h1>
				<button onClick={this.handleClick}>{buttonText}</button>
			</div>
		)
	}

}

export default App