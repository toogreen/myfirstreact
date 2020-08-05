import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName: ""
		}

		this.handleChange = this.handleChange.bind(this)
	}


	handleChange(event){
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	render() {
		//const displayText = this.state.firstName
		return(
			<form>
				<input 
					value={this.state.firstName} 
					name="firstName" 
					type="text" 
					placeholder="First Name" 
					onChange={this.handleChange} 
				/>
				<br />
				<input 
					value={this.state.lastName} 
					name="lastName" 
					type="text" 
					placeholder="Last Name" 
					onChange={this.handleChange} 
				/>
				<br /><br /><br /><br /><br /><br />
				<h1>{this.state.firstName} {this.state.lastName}</h1>
			</form>
		)
	}
}

export default App