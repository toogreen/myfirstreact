import React from "react"

function Joke(props){
	return (
		<div className="joke-item" style={{display: !props.question && "none"}}>
			<h3><strong>Question:</strong> {props.question}</h3> 
			<p><strong>Answer:</strong> {props.punchline}</p>
			<hr />
		</div>		
	)
}

export default Joke 