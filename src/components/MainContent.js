import React from "react"

import Joke from "./Joke"
import jokesData from "./jokesData"

function MainContent(){

	const jokeComponents = jokesData.map(joke => <joke key={joke.id} question={joke.question} answer={joke.answer} />)

	return (
		<main>
			 {jokeComponents}
		 </main>
	)
}

export default MainContent