import React, {Component} from "react"

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
	}

	componentDidMount() {
		this.setState({loading: true})
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data

				this.setState({ allMemeImgs: memes })
				console.log(memes[0])

			})
	}

	handleChange(event){
		const {name, value} = event.target
		this.setState({[name]: value})

	}

	render() {
		//const loadText = this.state.loading ? "Loading..." : this.state.character.name
		return(
			<main>
				<form className="meme-form">
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

					<button>Generate!</button>
				</form>

				<div className="meme">
					<img src={this.state.randomImg} alt="" />
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</main>
		)
	}

}

export default MemeGenerator