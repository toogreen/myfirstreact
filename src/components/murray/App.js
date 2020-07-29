import React from "react";

class App extends React.Component {

	constructor() {
		super()
		this.state = {
			imgUrl: "https://www.fillmurray.com/200/100"
		}		
	}

	clickButton() {
		alert("you clicked me!");
	}

	overFace(){
		document.getElementById("billface").src = "https://www.fillmurray.com/100/100";
	}

	outFace() {
		document.getElementById("billface").src = "https://www.fillmurray.com/200/100";
	}

	render(){

		return (

			<div>
				<img id="billface" onMouseOver={this.overFace} onMouseOut={this.outFace} src={this.state.imgUrl}/>
				<br />
				<br />
				<button onClick={this.clickButton}>Click Me</button>
			</div>
		)		
	}

}

export default App