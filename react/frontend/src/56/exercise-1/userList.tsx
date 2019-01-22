import * as React from 'react';
import {connect} from "react-redux";
import RootState from './rootState'

interface UserListProps {
    users: {
        name: string,
        sex: string
    }[]
}



const PureUserList = (props: UserListProps) => {
    return (
        <div>
            {props.users.map(l => (
                <div>{l.name}-{l.sex}</div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        users: state.users
    }
}

const UserList = connect(mapStateToProps)(PureUserList)

export default UserList;