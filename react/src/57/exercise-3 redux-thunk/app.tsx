import * as React from 'react'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LinkList from './linkList'; 
import UserList from './userList';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';



const store = createStore<any,any,any,any>(rootReducer,applyMiddleware(thunk));

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

