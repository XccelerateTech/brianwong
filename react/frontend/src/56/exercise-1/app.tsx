import * as React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import LinkList from './linkList'; 
import UserList from './userList';
import {render} from 'react-dom';
import RootState from './rootState'

const rootReducer = (state: RootState) => {
    return {
        links: [
            { title: 'Google', url: 'http://www.google.com' },
            { title: 'Yahoo', url: 'http://www.yahoo.com' },
        ],
        users: [
            {name: 'Mary', sex: 'female'},
            {name: 'Jason', sex: 'male'}
        ]
    }
}

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

