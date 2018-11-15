import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './todo-list.scss';
import getItems from '../../store/middlewars/getItems';
import deleteTodo from '../../store/middlewars/deleteTodo';
import { reorderTodo, editTodo } from '../../store/AC';
import TodoItem from '../TodoItem';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

class TodoList extends Component {

	componentDidMount() {
		const { getItems } = this.props;
		getItems('/api/todo/');
	};
	
	render() {
		return (
			<DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul
							className="todo__list"
              ref={provided.innerRef}
            >
              { this.getContent() }
            </ul>
          )}
        </Droppable>
      </DragDropContext>
		);
	};

	getContent = () => {
		const { initialState } = this.props;
		return initialState.map( (item, index) => (
			<Draggable key={item.id} draggableId={item.id} index={index}>
				{(provided) => (
					<div
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<TodoItem 
							onDeleteTodo={ this.onDeleteTodo }
							onEditTodo={ this.onEditTodo }
							{ ...item }
						/>
					</div>
				)}
			</Draggable>
		))
	};

	onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.props.initialState,
      result.source.index,
      result.destination.index
    );
		
		
    this.props.reorderTodo(items);
	};
	
	onEditTodo = ({id, desc, priority, project, title }) => {
		const { editTodo } = this.props;
		editTodo({id, desc, priority, project, title });
	};
	
	onDeleteTodo = id => {
		const { deleteTodo } = this.props;
		deleteTodo('/api/todo/', id);
	}
}
 
export default connect(
	state => ({
		initialState: state.initialState
	}),
	{ getItems, reorderTodo, deleteTodo, editTodo }
)(TodoList);