import React from 'react';
import TodoAdd from '../TodoAdd';

import './todo-footer.scss';

const TodoFooter = (porps) => {
	return (
		<div className="todo__footer">
			<TodoAdd />
		</div>
	);
}
 
export default TodoFooter;