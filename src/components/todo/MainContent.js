import React from "react";

import TodoItem from "./TodoItem";
import todosData from "./todosData";

class MainContent extends React.Component{

	constructor() {
		super()
		this.state = {
			todos: todosData
		}
	}

	render(){

		const todoItems = this.state.todos.map(item => <TodoItem key={item.id} todo={item} />)

		return (
			<main>
				{todoItems}
			</main>
		)
	}

}

export default MainContent 