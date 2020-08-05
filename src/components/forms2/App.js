import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: "",
			someText: "",
			isFriendly: false,
			gender: "",
			favColor: "blue"
		}

		this.handleChange = this.handleChange.bind(this)
	}


	handleChange(event){
		const {name, value, type, checked} = event.target
		type === "checkbox" ?  this.setState({[name]: checked}) : this.setState({[name]: value})
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
				<br />
				<textarea
					value={this.state.someText}
					name="someText"
					type="text"
					placeholder="Meh"
					onChange={this.handleChange}
				/>

				<br />

				<label>
					<input 
						type="checkbox"
						name="isFriendly"
						checked={this.state.isFriendly}
						onChange={this.handleChange}
					/> Is friendy?
				</label>

				<label>
					<input 
						type="radio"
						name="gender"
						value="male"
						checked={this.state.gender === "male"}
						onChange={this.handleChange}
					/> Male
				</label>

				<label>
					<input 
						type="radio"
						name="gender"
						value="female"
						checked={this.state.gender === "female"}
						onChange={this.handleChange}
					/> Female
				</label>

				<br /><br />

				<label>Favorite Color?</label>
				<select 
					value={this.state.favColor}
					onChange={this.handleChange}
					name="favColor"
				>
					<option value="blue">Blue</option>
					<option value="green">Green</option>
					<option value="red">Red</option>
					<option value="orange">Orange</option>
					<option value="yellow">Yellow</option>
				</select>

				<br /><br /><br /><br />
				<h1>{this.state.firstName} {this.state.lastName}</h1>
				<h2>You are a {this.state.isFriendly ? "friendly" : "unfriendly"} {this.state.gender}</h2>
				<h2>And <span style={{color: this.state.favColor}}>{this.state.favColor}</span> is your favorite color</h2>
				<p>
					<strong>And this is the bullshit you wrote:</strong><br/><br/>
					{this.state.someText}
				</p>
			</form>
		)
	}
}

export default App