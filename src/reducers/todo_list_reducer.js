import { RECEIVE_TODO } from '../actions/list_actions';


import merge from 'lodash/merge';

const listReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);
    switch (action.type) {
        case RECEIVE_TODO:
            return merge({}, action.todo);
        default:
            return state;
    }
};

export default listReducer;