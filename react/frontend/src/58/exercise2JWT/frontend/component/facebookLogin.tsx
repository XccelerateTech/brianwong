import React, {Component} from 'react';
import FacebookLogin from 'react-facebook-login';


export default class Facebook extends Component{
    responseFacebook(response:any){
        console.log(response);
    }

    handleClick(){
        console.log(process.env.REACT_APP_FACEBOOK_APP_ID )
    }

    render(){
        return (
            <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
            autoLoad={true}
            fields="name,email,picture"
            onClick={this.handleClick}
            callback={this.responseFacebook}
            ></FacebookLogin>
        )
    }
}


