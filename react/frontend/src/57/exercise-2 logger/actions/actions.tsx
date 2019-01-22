import {Action} from 'redux';

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

interface AddLinkAction extends Action{
    type: ADD_LINK,
    link: {
        title: string,
        url: string
    }
}

const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

interface clearLinkAction extends Action{
    type: CLEAR_LINK
}

const REMOVE_LINK = 'REMOVE_LINK';
type REMOVE_LINK = typeof REMOVE_LINK;

interface removeLinkAction extends Action{
    type: REMOVE_LINK,
    index: number
}

export type Actions = AddLinkAction | clearLinkAction | removeLinkAction;

export function addLink(title: string, url: string): AddLinkAction{
    return {
        type: ADD_LINK,
        link: {
            title: title,
            url: url
          }                
    }
}

export function clearLink():clearLinkAction{
    return {
        type: CLEAR_LINK
    }
}

export function removeLink(index:number):removeLinkAction{
    return {
        type: REMOVE_LINK,
        index: index
    }
}




 