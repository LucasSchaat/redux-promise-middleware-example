import React, { Component } from "react";
import { connect } from "react-redux";
import { getMemes, deleteMeme, addMeme, editMeme } from "../../redux/reducers/promiseReducer";
import Meme from "../Meme";
import AddMeme from "../AddMeme";

class ReduxPromiseMemes extends Component {
	componentDidMount() {
        this.props.getMemes()
	}

	deleteMeme = id => {
        this.props.deleteMeme(id)
	};

	addMeme = (url, title) => {
        this.props.addMeme(url, title)
	};

	editMeme = (id, url, title) => {
        this.props.editMeme(id, url, title)
	};

	render() {
		const memes = this.props.memes.map(meme => {
			return (
				<Meme
					info={meme}
					editMeme={this.editMeme}
                    deleteMeme={this.deleteMeme}
                    key={`Redux Promise Component #${meme.id}`}
				/>
			);
        });
		return (
			<div className="right-container">
				<h1>Redux Promise Middleware</h1>
				<AddMeme key='Redux Promise Add Component' addMeme={this.addMeme} />
				{memes}
			</div>
		);
	}
}

const mapStateToProps = reduxState => {
	return {
		memes: reduxState.promiseReducer.memes
	};
};

export default connect(mapStateToProps, {getMemes, deleteMeme, addMeme, editMeme})(ReduxPromiseMemes);
