const axios = require("axios");

const initialState = {
	memes: []
};

const GET_MEMES = "GET_MEMES";
const ADD_MEME = "ADD_MEME";
const EDIT_MEME = "EDIT_MEME";
const DELETE_MEME = "DELETE_MEME";

export function getMemes() {
	let allMemes = axios.get("http://localhost:3988/api/meme").then(res => res.data);
	return {
		type: GET_MEMES,
		payload: allMemes
	};
}

export function addMeme(url, title) {
	let allMemes = axios.post("http://localhost:3988/api/meme", { url, title }).then(res => res.data);
	return {
		type: ADD_MEME,
		payload: allMemes
	};
}

export function editMeme(id, url, title) {
	let allMemes = axios.put(`http://localhost:3988/api/meme/${id}`, { url, title }).then(res => res.data);
	return {
		type: EDIT_MEME,
		payload: allMemes
	};
}

export function deleteMeme(id) {
	let allMemes = axios.delete(`http://localhost:3988/api/meme/${id}`).then(res => res.data);
	return {
		type: DELETE_MEME,
		payload: allMemes
	};
}

export default function(state = initialState, action) {
	const { type, payload } = action;
	switch (type) {
		case GET_MEMES + "_FULFILLED":
			return { memes: payload };
		case ADD_MEME + "_FULFILLED":
			return { memes: payload };
		case EDIT_MEME + "_FULFILLED":
			return { memes: payload };
		case DELETE_MEME + "_FULFILLED":
			return { memes: payload };
		default:
			return state;
	}
}
