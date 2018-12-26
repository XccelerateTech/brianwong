import React, {Component} from 'react';
import faker from 'faker';


class AddLink extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div id='intro'>
                    <img src={faker.image.avatar()}/>
                    <p>King of JS</p>
                    <p>420 fav. links</p>
                    <p>34 shared links</p>
                </div>
        
                <button id='addLink' type="button" class="btn btn-primary" data-toggle="modal" data-target="#linkList">
                    Add Link
                </button>
            </div>
        )
    }
}

export default AddLink;