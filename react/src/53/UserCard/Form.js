import React, {Component} from 'react';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName: 'input First Name',
            lastName: 'input Last Name',
            occupation: 'input job'
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            firstName: '',
            lastName: '',
            occupation: ''
        })
    }

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = e => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleOccupationChange = e => {
        this.setState({
            occupation: e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}> 
                <label>First Name</label>
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleFirstNameChange}/><br/>
                <label>Last Name</label>
                <input type="text" name='lastName' value={this.state.lastName} onChange={this.handleLastNameChange}/><br/>
                <label>Occupation</label>
                <input type="text" name='occupation' value={this.state.occupation} onChange={this.handleOccupationChange}/><br/>
                <button>Submit</button>
            </form>
        )
    }
} 

export default Form;