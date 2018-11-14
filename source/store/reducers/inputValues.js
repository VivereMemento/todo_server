import { ON_INPUT, TODO_EDIT } from "../constants";

const initialState = {
	title: '',
	project: '',
	priority: '',
	desc: ''
};

export default (state = initialState, action) => {
	const { type, payload } = action;

	switch(type) {
		case ON_INPUT: {
			return { ...state, [payload.name]: payload.value }
		};
		case TODO_EDIT: {
			return { ...state, ...payload }
		};
		default: {
			return state;
		}
	}
}