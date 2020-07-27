import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function MainContent(){

	const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer} />)
	//const jokeComponents = "test"

	return (
		<main>
			 {jokeComponents}
		 </main>
	)
}

export default MainContent