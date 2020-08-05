import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			loading: false,
			character: {}
		}
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch("https://swapi.dev/api/people/1")
			.then(response => response.json())
			//.then(data => console.log(data))
			.then(data => {
				this.setState({
					loading: false,
					character: data
				})
			})
	}

	render() {
		const loadText = this.state.loading ? "Loading..." : this.state.character.name
		return(
			<div>
				<h1>{loadText}</h1>
			</div>
		)
	}
}


export default App