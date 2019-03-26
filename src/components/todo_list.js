import React from 'react';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.list);
    }

    render() {
        return(
            <div>
               <form>
                   <input type='text'
                        placeholder="What needs to be done?"
                        
                   />
               </form>
            </div>
        )
    }
};

export default TodoList;