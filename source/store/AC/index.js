import { INIT, ON_INPUT, TODO_ADD, TODO_EDIT, TODO_DELETE, TODO_REORDER } from '../constants';

export const init = (todos) => ({
    type: INIT,
    payload: { todos }
});

export const addTodo = (todo) => ({
    type: TODO_ADD,
    payload: { todo }
});

export const deleteTodo = (todos) => ({
    type: TODO_DELETE,
    payload: { todos }
})

export const editTodo = ({id, desc, priority, project, title}) => ({
    type: TODO_EDIT,
    payload: { id, desc, priority, project, title }
});

export const reorderTodo = (todos) => ({
    type: TODO_REORDER,
    payload: { todos }
})

export const onInput = (name, value) => ({
    type: ON_INPUT,
    payload: { name, value }
})
