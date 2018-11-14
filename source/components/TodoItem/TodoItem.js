import React, { Component } from 'react';
import { connect } from 'react-redux';
import './todo-item.scss';

import { editTodo } from '../../store/AC';
import deleteTodo from '../../store/middlewars/deleteTodo';

class TodoItem extends Component {
	render() {
		const { desc, priority, project, title } = this.props;

		return (
			<li className="todo__item">
				<div className="todo__item-titile">Task { title }</div>
				<div className="todo__item-priority">
					<span>Проект: { project }</span>
					<span>Приоритет: { priority }</span>
				</div>
				<div className="todo__item-desc">
					<span>{ desc }</span>
				</div>
				<div className="todo__item-buttons">
					<button onClick={ this.handleEditClick }>Изменить</button>
					<button onClick={ this.handleDeleteClick }>Закрыть</button>
				</div>
			</li>
		);
	};

	handleEditClick = () => {
		const { editTodo, id, desc, priority, project, title } = this.props;
		editTodo({id, desc, priority, project, title });
	};
	
	handleDeleteClick = () => {
		const { id, deleteTodo } = this.props;
		deleteTodo('/api/todo/', id);
	}
};

 
export default connect(null, { editTodo, deleteTodo })(TodoItem);