import React from "react"

function MainContent(){
	return (
		<main>
		 	<div class="ui checkbox">
			  <input type="checkbox" name="example1" />
			  <label>Option 1</label>
			</div>
		 	<div class="ui checkbox">
			  <input type="checkbox" name="example2" />
			  <label>Option 2</label>
			</div>
		 	<div class="ui checkbox">
			  <input type="checkbox" name="example3" />
			  <label>Option 3</label>
			</div>
			<ul>
				<li>List item 1</li>
				<li>List item 2</li>
				<li>List item 3</li>
			</ul>
		 </main>
	)
}

export default MainContent