import React, { Component } from "react";

class Meme extends Component {
	constructor(props) {
		super(props);
		this.state = {
			urlInput: this.props.info.url,
			titleInput: this.props.info.title,
			editing: false
		};
	}

	handleChange = event => {
		const {name, value} = event.target
		this.setState({
			[name]: value
		})
	}

	toggleEdit = () => {
		this.setState({
			editing: !this.state.editing
		})
	}
	
	cancelEdit = () => {
		this.setState({
			editing: !this.state.editing,
			urlInput: this.props.info.url,
			titleInput: this.props.info.title
		})
	}

	save = () => {
		const {id} = this.props.info
		const {urlInput, titleInput} = this.state
		this.props.editMeme(id, urlInput, titleInput)
		this.toggleEdit()
	}

	delete = () => {
		this.props.deleteMeme(this.props.info.id)
	}

	render() {
		return (
			<div className='background-container'>
				{this.state.editing ? (
					<div className='meme-container'>
						<input name='titleInput' value={this.state.titleInput} onChange={this.handleChange} placeholder='Meme Title'/>
						<img src={this.state.urlInput} alt='Some Meme'/>
						<input name='urlInput' value={this.state.urlInput} onChange={this.handleChange} placeholder='Image URL'/>
						<div className='button-container'>
							<button onClick={this.save}>Save</button>	
							<button onClick={this.cancelEdit}>Cancel</button>	
						</div>
					</div>
				) : (
					<div className='meme-container'>
						<h2>{this.props.info.title}</h2>
						<img src={this.props.info.url} alt="Some Meme" />
						<div className='button-container spread'>
							<button onClick={this.toggleEdit}>Edit</button>
							<button onClick={this.delete}>Delete</button>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Meme