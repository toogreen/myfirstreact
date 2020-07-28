import React {Component} from "react";
import ReactDOM from "react-dom";


// function App(){

// 	return (
// 		<div>
// 			<h1>Code goes here</h1>
// 		</div>
// 	)
// }


class App extends {Component} {

	render() {

		return(
			<div>
				<Header />
				<Greeting />
			</div>		
		)
	}
}

export default App


class Header extends React.Component {
	render(props) {
		return(
			<header>
				<p>Welcome, {this.props.username}!</p>
			</header>
		)
	}
}

class Greeting extends Component {
	render() {

		const date = new Date()
		const hours - date.getHours()
		let timeOfDay

		if (hours < 12) {
			timeOfDay  = "morning"
		} else if (hours >= 12 && hours < 17) {
			timeOfDay = "afternoon"
		} else {
			timeOfDay = "night"
		}
		return (
			<h1>Good {timeOfDay} to you, sir or madam!</h1>
		)

	}
}




