import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Form from './Form'
import List from './List'
import RootState from './RootState';
import Actions from './actions';



const rootReducer = (state: RootState, action: Actions) => {
    switch (action.type){
        case 'ADD_LIST':
            return {
                list: state.list.concat([action.list])
            }
        default:  
            return {
                list: [
                    {firstName: 'kathy', lastName: 'lok', occupation: 'student'},
                    {firstName: 'brian', lastName: 'lok', occupation: 'student'},
                ]
            }
    }

}

const store = createStore<any,any,any,any>(rootReducer); 


 
class UserCard extends Component{
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         list: []
    //     }
    // }


    // addUser = user => {
    //     const list = [...this.state.list,user];
    //     this.setState({list})
    // }

    

    render(){
        return (
            <Provider store={store}>
                <div className='app'>
                    <Form></Form>
                    <List></List>
                </div>
            </Provider>
        )
    }
}

 

export default UserCard