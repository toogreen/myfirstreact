import React from "react"

class App extends React.Component {
	constructor(){
		super()
		this.state = {
			count: 0
		}
		this.resetToOne = this.resetToOne.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleClick2 = this.handleClick2.bind(this)
	}

	handleClick() {
		this.setState(prevState => {
			return {
				count: prevState.count + 1
			}
		})
	}

	handleClick2() {
		this.setState(prevState => {
			return {
				count: prevState.count * 2
			}
		})
	}

	resetToOne() {
		this.state.count = 1
		document.getElementById("counter").innerHTML = this.state.count
	}

	render() {

		return (
			<div>
				<h1 id="counter">{this.state.count}</h1>
				<button onClick={this.resetToOne}>1</button>
				<button onClick={this.handleClick}>Change!</button>
				<button onClick={this.handleClick2}>Multiply!!</button>
			</div>
		)

	}
}

export default App