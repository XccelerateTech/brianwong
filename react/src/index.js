import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './54/form/App';
import {
    BrowserRouter,
    Route,
    Link,
    match
  } from 'react-router-dom';
 
function formatName(user){
    return (user.first+' '+user.last)
}

const user = {
    first: 'Milly',
    last: 'Potter'
}

const element = 
<div>
    <h1 className='username' style={{color:'red'}}>Hello, {formatName(user)}</h1>
    <h2>This is JSX</h2>
</div>;

ReactDOM.render(
    <BrowserRouter>
        <App></App>
    </BrowserRouter>
    , document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
