export const RECEIVE_TODO = 'RECEIVE_TODO';

const receiveTodo = todo => ({
    type: RECEIVE_TODO,
    todo: todo
});


export const createTodo = todo => dispatch => (
    dispatch(receiveTodo(todo))
);
