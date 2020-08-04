import React, {Component} from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {}
	}

	componentDidMount() {
		// GET the data i need to correctly display
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.whatever !== this.props.whatever) {
	// 		 // Do something important here
	// 	}
	// }


	shouldComponentUpdate() {
		// return true if want it to update
		// return false if we don't want to update
	}

	componentWillUnmount(){
		// remove event listener
		// teardown or cleanup code before your component disappear
	}

	render() {
		return(
			<div>
				Code goes here
			</div>
		)
	}
}

export default App