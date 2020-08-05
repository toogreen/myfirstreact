import React, {Component} from "react"
import Conditional from "./Conditional"

class App extends Component {
	constructor() {
		super()
		this.state = {
			isLoading: true
		}
	}

	componentDidMount() {
		// GET the data i need to correctly display
		setTimeout(() =>  {
			this.setState({
				isLoading: false
			})
		}, 1500)
	}

	render() {
		return(
			<div>
				{// Condition ? statement if true : statement if false
				this.state.isLoading ? 
				<h1>Loading...</h1> :
				<Conditional />}
			</div>
		)
	}
}

export default App