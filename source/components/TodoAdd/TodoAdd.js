import React, { Component } from 'react';
import { connect } from 'react-redux';

import './todo-add.scss';
import { onInput, editTodo } from '../../store/AC';
import addTodo from '../../store/middlewars/addTodo';

class TodoAdd extends Component {

	render() {
		const { inputValues: { title, project, priority, desc } } = this.props;
		return (
			<div className="todo__add">
				<form onSubmit={ this.handleSubmit } className="form">
					<div className="form__item">
						<label htmlFor="">Заголовок задачи</label>
						<input onChange={ this.handleChange } name="title" type="text" value={ title }/>
					</div>
					<div className="form__item">
						<label htmlFor="">Название проекта</label>
						<input onChange={ this.handleChange } name="project" type="text" value={ project }/>
					</div>
					<div className="form__item">
						<label htmlFor="">Приоритет</label>
						<input onChange={ this.handleChange } name="priority" type="text" value={ priority }/>
					</div>
					<div className="form__item">
						<label htmlFor="">Описание</label>
						<textarea onChange={ this.handleChange } name="desc" value={ desc }></textarea>
					</div>
					<button type="submit">Сохранить</button>
				</form>
			</div>
		);
	};

	handleChange = (e) => {
		const { onInput } = this.props;
		const { name, value } = e.target;
		onInput(name, value);
	};
	
	handleSubmit = (e) => {
		e.preventDefault();
		const { addTodo, inputValues, editTodo } = this.props;
		addTodo('/api/todo/', inputValues);
		editTodo({desc: '', priority: '', project: '', title:'' })
	}
}
 
export default connect(
	state => ({
		initialState: state.initialState,
		inputValues: state.inputValues,
	}),
	{ addTodo, onInput, editTodo }
)(TodoAdd);