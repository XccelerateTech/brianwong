import React, {Component} from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import ShoppingList from './ShoppingListApp';
import DisplayItem from './DisplayItem';

class App extends Component{
    render(){
        return (
            <BrowserRouter>
                <div>
                    <Navbar></Navbar>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/About' component={About}></Route>
                        <Route path='/ShoppingList' component={ShoppingList}></Route>
                        <Route path='/DisplayItem/:id' component={DisplayItem}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;