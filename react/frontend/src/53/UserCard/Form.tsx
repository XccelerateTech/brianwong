import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux'
import Actions from './actions';

interface IFormState {
    firstName: string,
    lastName:  string,
    occupation: string
}

interface IFormProps{
    addList: (first:string,last:string,occupation:string)=>void
}





const mapDispatchToProps = (dispatch:Dispatch<Actions>) => {
    return {
        addList: (first:string,last:string,occupation:string) => dispatch({
            type: 'ADD_LIST',
            list: {
                firstName: first,
                lastName: last,
                occupation: occupation
            }
        })
    }
}

const mapStateToProps = () => {
    return {}
};






class Form extends Component<IFormProps,IFormState>{
    constructor(props: IFormProps){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            occupation: ''
        }
    }

    handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.addList(this.state.firstName,this.state.lastName,this.state.occupation)
    }

    handleFirstNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            firstName: e.target.value
        })
    }

    handleLastNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            lastName: e.target.value
        })
    }

    handleOccupationChange = (e:React.ChangeEvent<HTMLInputElement>) => {
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

export default connect(mapStateToProps,mapDispatchToProps)(Form);