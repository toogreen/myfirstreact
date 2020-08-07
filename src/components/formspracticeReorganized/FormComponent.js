import React from "react"

function FormComponent(props) {
	return(
		<main>
			<form>
				<input
					name="firstName"
					value={props.data.firstName}
					placeholder="First Name" 
					onChange={props.handleChange} 
				/>

				<br /> 
				
				<input 
					name="lastName"
					value={props.data.lastName}
					placeholder="Last Name" 
					onChange={props.handleChange} 
				/>

				<br /> 
				
				<input 
					name="age"
					value={props.data.age}
					placeholder="Age" 
					onChange={props.handleChange} 
				/>

				<br /> 

				<label>
					<input 
						type="radio"
						name="gender"
						value="male"
						checked={props.data.gender === "male"}
						onChange={props.handleChange}
					/> Male
				</label>

				<br />

				<label>
					<input 
						type="radio"
						name="gender"
						value="female"
						checked={props.data.gender === "female"}
						onChange={props.handleChange}
					/> Female
				</label>



				<br />

				<select
					name="destination"
					value={props.data.location}
					onChange={props.handleChange} 
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
						checked={props.data.isVegan}
						onChange={props.handleChange}
					/> Vegan?
				</label>

				<br />

				<label>
					<input 
						type="checkbox"
						name="isKosher"
						checked={props.data.isKosher}
						onChange={props.handleChange}
					/> Kosher?
				</label>

				<br />

				<label>
					<input 
						type="checkbox"
						name="isLactoseFree"
						checked={props.data.isLactoseFree}
						onChange={props.handleChange}
					/> Lactose Free?
				</label>

				<br />

				<button>Submit</button>
			</form>

			<h1>Entered information:</h1>
			<p>Your name: {props.data.firstName} {props.data.lastName}</p>
			<p>Your age: {props.data.age}</p>
			<p>Your gender: {props.data.gender}</p>
			<p>Your location: {props.data.destination}</p>
			<p>Dietary Restrictions: {(props.data.isVegan) || (props.data.isKosher) || (props.data.isLactoseFree) ? "Yes, see the following:" : "No"}</p>
			<p>
				{	// If person is Vegan, display "Vegan"
					props.data.isVegan && "Vegan"
				}
				
				{	// If person is Vegan AND Kosher, add a comma OR if person is Vegan AND lactose Free, also add a comma
					(props.data.isVegan && props.data.isKosher) && ", " || (props.data.isVegan && props.data.isLactoseFree) && ", "
				}

				{	// If person is Kosker, display "Kosher"
					props.data.isKosher && "Kosher"
				} 
				{	// If person is Kosher AND Lactose free, also add a comma
					(props.data.isKosher && props.data.isLactoseFree) && ", "
				}

				{	// If person is Lactose free, display "Lactose Free"
					props.data.isLactoseFree && "Lactose Free"
				}
			</p>

		</main>
	)
}

export default FormComponent