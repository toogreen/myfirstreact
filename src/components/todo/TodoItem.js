import React from "react"

function TodoItem(props){


		return (
				<div className="checkbox">
				  <input type="checkbox" checked={props.todo.completed} />
				  <label>{props.todo.text}</label>
				</div>
		)		

}


export default TodoItem