import React, {Component} from 'react'; 
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

const ListLink = (props) => {

    const list = props.list.map(item=> {
        return (
            <tr>
                <td>{item.name}</td>
                <td><Link to={item.url}>{item.url}</Link></td>
            </tr>
        )
    })

    return (
        <div className='listLink'>
            <h3>Links for #React</h3>
            <Router>
                <table>
                    {list}
                </table>
            </Router>
        </div>
        
    )
}

export default ListLink;




