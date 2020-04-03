import React, { Component } from "react";

class AddMeme extends Component {
	constructor() {
		super();
		this.state = {
			urlInput: '',
			titleInput: ''
		};
	}

	handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
    };
    
    cancel = () => {
        this.setState({
            urlInput: '',
            titleInput: ''
        })
    }

	save = () => {
		const { urlInput, titleInput } = this.state;
        this.props.addMeme(urlInput, titleInput);
        this.setState({
            urlInput: '',
            titleInput: ''
        })
	};

	render() {
		return (
			<div className='add-container'>
                <input
                    name="titleInput"
                    value={this.state.titleInput}
                    placeholder='Meme Title'
                    onChange={this.handleChange}
                />
                <img src={this.state.urlInput  || 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXg4OCzs7PCwsLMzMywsLDj4+PX19e2tra4uLja2trf39/R0dG8vLzGxsa6urrU1NTK4/p6AAAB6UlEQVR4nO3b626iUBSAURFQLl7e/22HFstFLTJqgpuu9dOBxC+z5QA53WwAAAAAAAAAAAAAAAAAAAAAAAD4A/J3WDpiSpm+Q7l0xoRz9g67pTMmnLPkdQoXpXA9hS+FRigsts8pwhRun1zqt4EKnzpb4Se4Wzg7N2ZhXp3rud84ZGGeJs2NZrGb9f8YsTDfth9k9ZzEiIV1t/RXM84OWJgfuvuUesbZEQv7O7HjjDFdV+G95/iIhb9O6S6788MMWNg/TRXj46p9drgd24iF+TG796W/FpEsvUmMWLjJ632z4h/Gv7q8XURufoohC5uvXe6u70zLdnJv5jRo4R2Hy+imV5+HL/y5wKbdjc7VnEYvrA7tAlH2L3Gu5jR6YZG1S0bRBV5fT4MXnprPT1X3tHFJHK37sQtP3/9SVPUwsJnT4TGRC/PL5TM57UeB4zkNXDgezbFyeFjUwqnA5DR4pxO1cDJwOKdRC3/uvn9N7OY0aOGjwOYC27+3ilj4OLB//g9ZOLgJfTynEQtnBXZvACIW1sl+jqS9nkYsrPJZe4guR0cs/D8KP4HCaQo/wZ/Zi1Ecn9pOc4yzn+a5TVHduSEKX6FwUQrXULj2fd7r36u//r+3AAAAAAAAAAAAAAAAAAAAAAAA4F3+Acg6HdMv+TcEAAAAAElFTkSuQmCC'} alt="Some Meme" />
                <input
                    name="urlInput"
                    placeholder='Image URL'
                    value={this.state.urlInput}
                    onChange={this.handleChange}
                />
                <div className='button-container'>
                    <button onClick={this.save}>Save</button>
                    <button onClick={this.cancelEdit}>Cancel</button>
                </div>
			</div>
	    );
    }
}

export default AddMeme