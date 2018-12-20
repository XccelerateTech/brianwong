import React from 'react';

const List = (props) => {

    const listGroup = props.list.map(user=>{
        return (
            <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.occupation}</td>
            </tr>
        )
    })

    return (
        <div className='list'>
             <h1>User Card</h1>
            <table>
                {listGroup}
            </table>
        </div>
    )
}

export default List;