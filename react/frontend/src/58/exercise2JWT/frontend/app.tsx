import * as React from 'react'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import LinkList from './component/linkList'; 
import UserList from './component/userList';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';
import Facebook from './component/facebookLogin'
import Login from './component/login'



const store = createStore<any,any,any,any>(rootReducer,applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
    {process.env.REACT_APP_API_SERVER}
        <div>
            <h2>Links</h2>
            <LinkList></LinkList>
            <h2>Users</h2>
            <UserList></UserList>
            {/* <Facebook></Facebook> */}
            <Login></Login>
        </div>
    </Provider>
);

export default App;

