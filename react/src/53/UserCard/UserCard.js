import React, {Component} from 'react';
import Form from './Form'
import List from './List'
 
class UserCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            list: []
        }
    }

    addUser = user => {
        const list = [...this.state.list,user];
        this.setState({list})
    }

    

    render(){
        return (
            <div className='app'>
                <Form addUser={this.addUser}></Form>
                <List list={this.state.list}></List>
            </div>
        )
    }
}

export default UserCard;