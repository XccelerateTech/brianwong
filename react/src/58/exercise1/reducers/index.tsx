import RootState from '../rootState'
import {Actions} from '../actions/actions';

export const rootReducer = (state: RootState, action: Actions) => {

    switch(action.type){
        case 'ADD_LINK':
            return {
                links: state.links.concat([action.link]),
                users: state.users 
            }

        case 'CLEAR_LINK': 
            return {
                links: [],
                users: state.users
            }
        
        case 'REMOVE_LINK':
            let newLinkList;
            switch (action.index){
                case 0:
                    newLinkList = state.links.slice(1,state.links.length);
                    break;
                case state.links.length:
                    newLinkList = state.links.slice(0,state.links.length-1);
                    break;

                default:
                    let forwardList = state.links.slice(0,action.index);
                    let backwardList = state.links.slice(action.index+1,state.links.length);
                    newLinkList = forwardList.concat(backwardList);
            }
            
            return {
                links: newLinkList,
                users:state.users
            }

        case 'LOAD_LINK_SUCCESS':
            return {
                links: action.links,
                users: state.users
            }

        case 'LOAD_LINK_FAILURE':
            return state;
            
        default: 
            return {
                links: [
                    { title: 'Google', url: 'http://www.google.com' },
                    { title: 'Yahoo', url: 'http://www.yahoo.com' },
                    { title: 'Facebook', url: 'http://www.facebook.com' },
                ],
                users: [
                    {name: 'Mary', sex: 'female'},
                    {name: 'Jason', sex: 'male'}
                ]
            }
    }
    
}
