import React, { Component } from 'react';
import './todo-item.scss';

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
		const { id, desc, priority, project, title, onEditTodo } = this.props;
		onEditTodo({id, desc, priority, project, title });
	};
	
	handleDeleteClick = () => {
		const { id, onDeleteTodo } = this.props;
		onDeleteTodo(id);
	}
};

 
export default TodoItem;