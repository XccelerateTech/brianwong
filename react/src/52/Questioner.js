import React, {Component} from 'react';

class Questioner extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null
        }
    }

    render(){
        return (
            <div>
                <button>
                ></button>
                <p>{this.state.name}</p>
            </div>
        )
    }
    
}
