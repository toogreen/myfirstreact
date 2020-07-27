import React from "react"
import Joke from "./Joke"
import "../App.css"

function App(){
	return(
		<div>
			<header />
			<Joke 
				question="Who is fat?"
				punchline="David"
			/>
			<Joke 
				question="What is small?"
				punchline="His dick"
			/>
			<Joke 
				question="Who sucks?"
				punchline="You"
			/>
			<Joke 
				question="Mange ma marde?"
				punchline="Ouiii"
			/>
			<footer />
		</div>
	)
}

export default App