import { deleteTodo } from '../AC';

export default (url, id) => {
	return dispatch => {
		fetch(url, {
			method: 'delete',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({id})
		})
			.then(res => res.json())
			.then(res => {
				dispatch(deleteTodo(res))
			})
	}
}