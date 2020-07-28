import React from "react";

function Joke(props){
	return(
		<div className="joke-item" style={{display: (!props.question || !props.answer) && "none"}}>
			<h3><strong>Question:</strong>{props.question}</h3>
			<p><strong>Answer</strong>: {props.answer}</p>
		</div>
	)
}

export default Joke