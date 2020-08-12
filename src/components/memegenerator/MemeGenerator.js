import React, {Component} from "react"
import Ad from "../Ad"
import domtoimage from "dom-to-image"
import $ from "jquery"

class MemeGenerator extends Component {
	constructor() {
		super()
		this.state = {
			topText: "",
			bottomTet: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: []
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data

				this.setState({ allMemeImgs: memes })
				console.log(memes[1])

			})
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({[name]: value})

	}

	handleSubmit(event){
		event.preventDefault()

		//get a a random number
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)

		// get the meme from that index
		const randMemeImg = this.state.allMemeImgs[randNum].url

		// set "randomImg" to the ".url"  of the random item I grabbed
		this.setState({ randomImg: randMemeImg})
	}

	handleCopy(){

		const render = node =>
		  domtoimage.toPng(node)
		  .then(dataUrl => {
		    console.log(performance.now() - pf)
		    const img = new Image();
		    img.src = dataUrl;
		    $('.hidden').show();
		    $('.imgZone').replaceWith(img);
		  })
		  .catch(error =>
		    console.error('oops, something went wrong!', error)
		  );

		const foo = document.getElementById('meme');

		var pf = performance.now();
		render(foo);

		//alert("image copied to clipboard! Now imply use PASTE in any other app");
	}

	closeModal() {
		$('.hidden').hide();
	}

	render() {
		//const loadText = this.state.loading ? "Loading..." : this.state.character.name
		return(
			<main>
				<form className="meme-form" onSubmit={this.handleSubmit}>

				<button>Change image</button>

				<input 
					type="text"
					name="topText"
					value={this.state.topText}
					placeholder="Top Text" 
					onChange={this.handleChange} 
				/>

				<br />
				
				<input 
					type="text"
					name="bottomText"
					value={this.state.bottomText}
					placeholder="Bottom Text" 
					onChange={this.handleChange} 
				/>

				<br />
					
				</form>

				<div id="meme" className="meme"> 
					<img src={this.state.randomImg} alt="" onClick={this.handleSubmit} />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>

				<button onClick={this.handleCopy}>Generate an image you can copy to clipboard</button>

				<div className="hidden">
					<div className="close" onClick={this.closeModal}>X</div>
					<h2>Copy the image below in order to paste it in any other app:</h2>
					<div className="imgZone"></div>
				</div>

				<Ad />

			</main>
		)
	}

}

export default MemeGenerator