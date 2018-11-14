import React from 'react';
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';
import './todo.scss';
const Todo = (props) => {
	return (
		<div className="todo">
			<h1 className="todo__title">Todo</h1>
			<TodoList />
			<TodoFooter />
		</div>
	);
}
 
export default Todo;