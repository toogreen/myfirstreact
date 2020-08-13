import React from "react"
import domtoimage from "dom-to-image"
import $ from "jquery"


function handleCopy(){

	// part that copies image
	const render = node =>
	  domtoimage.toPng(node)
	  .then(dataUrl => {
	    console.log(performance.now() - pf)
	    const img = new Image();
	    img.src = dataUrl;

	    $('.imgZone').replaceWith(img)
	    $('.hidden').show();

	  })
	  .catch(error =>
	    console.error('oops, something went wrong!', error)
	  );

	const foo = document.getElementById('meme');

	var pf = performance.now();
	render(foo);

}

export default handleCopy