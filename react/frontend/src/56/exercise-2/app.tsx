import * as React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LinkList from './linkList'; 
import UserList from './userList';
import {rootReducer} from './reducers'



const store = createStore<any,any,any,any>(rootReducer);

const App = () => (
    <Provider store={store}>
        <div>
            <h2>Links</h2>
            <LinkList></LinkList>
            <h2>Users</h2>
            <UserList></UserList>
        </div>
    </Provider>
);

export default App;

