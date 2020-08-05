import React from "react"

function TodoItem(props){

		let done = props.item.completed && "done"
		return (

				<div className="checkbox">
				  <input type="checkbox" checked={props.item.completed} onChange={() => props.handleChange(props.item.id)}/>
				  <label className={done}>{props.item.text}</label>
				</div>
		)		

}


export default TodoItem