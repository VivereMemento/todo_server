import { INIT, TODO_ADD, TODO_DELETE, TODO_REORDER } from '../constants';

export default (state=[], action) => {
	const { type, payload: { todos, todo } = {} } = action;

	switch(type) {
		case INIT: {
			return [...state, ...todos];
		};
		case TODO_ADD: {
			const existedTodo = state.filter(t => t.id === todo.id).length;
    
			if (existedTodo) {
					const idx = state.findIndex(item => item.id === todo.id);
					return [
						...state.slice(0,idx),
						todo,
						...state.slice(idx+1)
					];
			}
			return [...state, todo]
		};
		case TODO_DELETE: {
			return [...todos]
		};
		case TODO_REORDER: {
			return [...todos]
		}
		default: {
			return state;
		}
	}
};