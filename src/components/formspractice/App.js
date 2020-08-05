import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			firstName: "",
			lastName: "",
			age: "",
			gender: "",
			destination: "",
			isVegan: false,
			isKosher: false,
			isLactoseFree: false
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const {name, value, type, checked} = event.target
		type === "checkbox" ?  this.setState({[name]: checked}) : this.setState({[name]: value})

	}

	render() {
		return(
			<main>
				<form>
					<input
						name="firstName"
						value={this.state.firstName}
						placeholder="First Name" 
						onChange={this.handleChange} 
					/>

					<br /> 
					
					<input 
						name="lastName"
						value={this.state.lastName}
						placeholder="Last Name" 
						onChange={this.handleChange} 
					/>

					<br /> 
					
					<input 
						name="age"
						value={this.state.age}
						placeholder="Age" 
						onChange={this.handleChange} 
					/>

					<br /> 

					<label>
						<input 
							type="radio"
							name="gender"
							value="male"
							checked={this.state.gender === "male"}
							onChange={this.handleChange}
						/> Male
					</label>

					<br />

					<label>
						<input 
							type="radio"
							name="gender"
							value="female"
							checked={this.state.gender === "female"}
							onChange={this.handleChange}
						/> Female
					</label>



					<br />

					<select
						name="destination"
						value={this.state.location}
						onChange={this.handleChange} 
					>	<option value="">-- Please Choose a destination</option>
						<option value="canada">Canada</option>
						<option value="us">USA</option>
						<option value="germany">Germany</option>
						<option value="norway">Norway</option>
					</select>

					<br />

					<label>
						<input 
							type="checkbox"
							name="isVegan"
							checked={this.state.isVegan}
							onChange={this.handleChange}
						/> Vegan?
					</label>

					<br />

					<label>
						<input 
							type="checkbox"
							name="isKosher"
							checked={this.state.isKosher}
							onChange={this.handleChange}
						/> Kosher?
					</label>

					<br />

					<label>
						<input 
							type="checkbox"
							name="isLactoseFree"
							checked={this.state.isLactoseFree}
							onChange={this.handleChange}
						/> Lactose Free?
					</label>

					<br />

					<button>Submit</button>
				</form>

				<h1>Entered information:</h1>
				<p>Your name: {this.state.firstName} {this.state.lastName}</p>
				<p>Your age: {this.state.age}</p>
				<p>Your gender: {this.state.gender}</p>
				<p>Your location: {this.state.destination}</p>
				<p>Dietary Restrictions: {(this.state.isVegan) || (this.state.isKosher) || (this.state.isLactoseFree) ? "Yes, see the following:" : "No"}</p>
				<p>
					{this.state.isVegan && "Vegan"}
					{(this.state.isVegan && this.state.isKosher) && ", " || (this.state.isVegan && this.state.isLactoseFree) && ", "}
					{this.state.isKosher && "Kosher"} 
					{(this.state.isKosher && this.state.isLactoseFree) && ", "}
					{this.state.isLactoseFree && "Lactose Free"}
				</p>

			</main>
		)
	}
}

export default App