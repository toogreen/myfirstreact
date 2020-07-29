import React from "react";

function clickButton() {
	alert("you clicked me!");
}

function overFace() {
	document.getElementById("billface").src = "https://www.fillmurray.com/100/100";
}

function outFace() {
	document.getElementById("billface").src = "https://www.fillmurray.com/200/100";
}



class App extends React.Component {

	constructor() {
		super()
		this.state = {
			imgUrl: "https://www.fillmurray.com/200/100"
		}		
	}

	render(){

		return (

			<div>
				<img id="billface" onMouseOver={overFace} onMouseOut={outFace} src={this.state.imgUrl}/>
				<br />
				<br />
				<button onClick={clickButton}>Click Me</button>
			</div>
		)		
	}

}

export default App