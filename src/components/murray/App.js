import React from "react";

function clickButton() {
	alert("you clicked me!");
}


function overFace() {
	alert("you OVER FACED me!");
}

function App(){


	return (
		<div>
			<img id="billface" onMouseOver={overFace} src="https://www.fillmurray.com/200/100"/>
			<br />
			<br />
			<button onClick={clickButton}>Click Me</button>
		</div>
	)
}

export default App