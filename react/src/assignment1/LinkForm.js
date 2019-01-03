import React, {Component} from 'react';
import {
    Route
} from 'react-router-dom'


class LinkFrom extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: null,
            url: null,
        }
    }
    
    handleNameChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    handleUrlChange = e =>{
        this.setState({
            url: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.state.name === '' && this.state.url === ''){
            alert('name and url are not allowed to be empty')
        }else{
            this.props.saveLink(this.state)
        }
    }

    render(){
        return (
            <div className="modal fade" id="linkList" tabindex="-1" role="dialog" aria-labelledby="linkListTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="linkListTitle">Add Link</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body linkForm">
                            <form onSubmit={this.handleSubmit}>
                                <label>Name: </label>
                                <input type="text" name='name' value={this.state.name} onChange={this.handleNameChange}/><br/>
                                <label>Url: </label>
                                <input type="text" name='url' value={this.state.url} onChange={this.handleUrlChange}/><br/>
                                <button data-toggle="modal" data-target="#linkList">add link</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LinkFrom;