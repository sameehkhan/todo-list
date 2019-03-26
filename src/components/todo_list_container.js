import { connect } from 'react-redux';
import TodoList from './todo_list';
import { withRouter } from 'react-router-dom';
import { createTodo } from '../actions/list_actions';


const mstp = (state, ownProps) => {
    let list = [];
    return ({
        list
    });
};

const mdtp = (dispatch, ownProps) => {
    return ({
        createTodo: todo => dispatch(createTodo(todo))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(TodoList));