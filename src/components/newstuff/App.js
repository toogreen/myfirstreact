import React, {Component} from "react"

class App extends Component {

	// Change to use class properties
	constructor() {
		super()
		this.state = {
			firstName: ""
		}
		this.handleChange =  this.handleChange.bind(this)
	}

	// Change to use arrow functions
	handleChange(event) {
		const { name, value } = event.target
		this.setState({
			[name]: value
		})
	}

	render() {
		return (
			<main>
				<form>
					<input 
						type="text"
						name="firstName"
						value={this.state.firstName}
						onChange={this.handleChange}
						placeholder="First Name"
					/>
				</form>
				<br/><br />
				<h1>{this.state.firstName}</h1>
			</main>
			)
	}
}

export default App