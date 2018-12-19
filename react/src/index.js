import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CurrencyConvertor from './53/CurrentConvertor';
import Clock from './53/Clock';
import ShoppingListApp from './53/form/ShoppingListApp'
 
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

ReactDOM.render(<ShoppingListApp></ShoppingListApp>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
