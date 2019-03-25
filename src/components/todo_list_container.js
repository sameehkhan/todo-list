import { connect } from 'react-redux';
import TodoList from './todo_list';
import { withRouter } from 'react-router-dom';
import { fetchPosts } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';


const mstp = (state, ownProps) => {
    
};

const mdtp = (dispatch, ownProps) => {
    return ({
        fetchPosts: () => dispatch(fetchPosts()),
        fetchUser: (id) => dispatch(fetchUser(id))
    });
};

export default withRouter(connect(
    mstp,
    mdtp
)(Feed));