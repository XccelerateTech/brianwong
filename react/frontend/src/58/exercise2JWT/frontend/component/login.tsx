import React, {Component} from 'react';
import axios from 'axios';

interface ILoginStates{
    name:string,
    password:string,
}

export default class Login extends Component<{},ILoginStates>{

    constructor(props: {}){
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }

    handleUserChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: e.target.value
        })
    }

    handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            password: e.target.value
        })
    }


    handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        return axios.post('/api/signin',this.state)
        .then((res)=>{
            localStorage.setItem('token', res.data.token)
        })
    }

    handleUsersClick = (e:any) => {
        e.preventDefault();
        return axios.get('/api/users',{
            headers: {
                Authorization: 'Bearer '+ localStorage.getItem('token')
            } 
        })
        .then((res)=>{
            console.log(res)
        })
    }



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    user: <input type='text' name='user' onChange={this.handleUserChange}></input>
                    password: <input type='password' name='password'  onChange={this.handlePasswordChange}></input>
                    <button>Login</button>
                </form>
                <button id='users' onClick={this.handleUsersClick}>Users</button>
            </div>
            
        )
    }
}