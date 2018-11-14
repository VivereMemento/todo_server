import { init } from '../AC';

export default url => {
	return dispatch => {
	
		fetch(url)
			.then(res => res.json())
			.then(res => {
				dispatch(init(res))
			})
	}
}