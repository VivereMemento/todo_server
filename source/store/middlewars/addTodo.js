import { addTodo } from '../AC';

export default (url, body) => {
	return dispatch => {
		fetch(url, {
			method: 'post',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({...body})
		})
			.then(res => res.json())
			.then(res => {
				dispatch(addTodo(res))
			})
	}
}