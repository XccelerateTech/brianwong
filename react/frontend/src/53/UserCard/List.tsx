import React from 'react';
import RootState from './RootState';
import {connect} from 'react-redux';

interface ListProps {
    list: {
        firstName: string,
        lastName: string,
        occupation: string
    }[]
}

const mapStateToProps = (state: RootState) => {
    return {
        list: state.list
    }
}

const List = (props: ListProps) => {

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


export default connect(mapStateToProps)(List);