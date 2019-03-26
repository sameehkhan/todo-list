import React from 'react';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items: [], el: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createTodo(this.state).then(() => this.setState({ }));
        let updated = this.state.items.concat(this.state.el);
        console.log(this.state.items);
       
        this.setState({el: '', items: updated}, () => {
            localStorage.setItem('item', this.state.items)
        })
    
        
    }

    componentDidMount() {
        if(localStorage.item){
            this.setState({items: localStorage.item});
        }

    }

    update(e) {
       e.preventDefault();
       this.setState({el: e.target.value}); 
    }
    render() {
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <input type='text'
                        value = {this.state.el}
                        placeholder="What needs to be done?"
                        onChange={this.update}
                   />
                   <input type='submit' value='Submit'/>
               </form>

               {this.state.items}
            </div>
        )
    }
};

export default TodoList;