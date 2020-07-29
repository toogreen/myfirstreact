import React from "react"

function TodoItem(props){


		return (
				<div className="checkbox">
				  <input type="checkbox" checked={props.todo.completed} onChange={()=> alert("change attempted")}/>
				  <label>{props.todo.text}</label>
				</div>
		)		

}


export default TodoItem