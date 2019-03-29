import React from 'react';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {items:[], el: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);

    }

    handleSubmit(e) {
        e.preventDefault();
        // this.props.createTodo(this.state).then(() => this.setState({ }));
        console.log(this.state)
        let updated = this.state.items.concat([this.state.el]);


        this.setState({el: '', items: updated}, () => {
            localStorage.setItem('items', JSON.stringify(this.state.items));
        });
    
        
    }

    componentDidMount() {
        if(localStorage.items){
            let arr = JSON.parse(localStorage.getItem('items'))
            this.setState({items: arr});
            
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