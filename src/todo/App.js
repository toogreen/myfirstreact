import React from "react";
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import "./App.css";

function App(){

	const todos = todosData.map(item => <TodoItem key={item.id} todo={item} />)

	return (
		<main>
			{todos}
		</main>
	)
}

export default App