import {Action} from 'redux';
import {Dispatch} from 'redux';
import axios from 'axios'

const ADD_LINK = 'ADD_LINK';
type ADD_LINK = typeof ADD_LINK;

interface Link {
    title: string,
    url: string
};

interface AddLinkAction extends Action{
    type: ADD_LINK,
    link: Link
}

const CLEAR_LINK = 'CLEAR_LINK';
type CLEAR_LINK = typeof CLEAR_LINK;

interface ClearLinkAction extends Action{
    type: CLEAR_LINK
}

const REMOVE_LINK = 'REMOVE_LINK';
type REMOVE_LINK = typeof REMOVE_LINK;

interface RemoveLinkAction extends Action{
    type: REMOVE_LINK,
    index: number
}

const LOAD_LINK_SUCCESS = 'LOAD_LINK_SUCCESS';
type LOAD_LINK_SUCCESS = typeof LOAD_LINK_SUCCESS;

export interface LoadLinkSuccessAction extends Action{
    type: LOAD_LINK_SUCCESS,
    links: Link[]
}

const LOAD_LINK_FAILURE = 'LOAD_LINK_FAILURE';
type LOAD_LINK_FAILURE = typeof LOAD_LINK_FAILURE;

export interface LoadLinkFailureAction extends Action{
    type: LOAD_LINK_FAILURE
}

export type Actions = AddLinkAction | ClearLinkAction | RemoveLinkAction | LoadLinkSuccessAction | LoadLinkFailureAction;

export function addLink(title: string, url: string): AddLinkAction{
    return {
        type: ADD_LINK,
        link: {
            title: title,
            url: url
          }                
    }
}

export function clearLink():ClearLinkAction{
    return {
        type: CLEAR_LINK
    }
}

export function removeLink(index:number):RemoveLinkAction{
    return {
        type: REMOVE_LINK,
        index: index
    }
}

export function loadLinkSuccess(links: Link[]): LoadLinkSuccessAction {
    return {
      type: LOAD_LINK_SUCCESS,
      links: links
    }
  }
  
  export function loadLinkFailure(): LoadLinkFailureAction {
    return {
      type: LOAD_LINK_FAILURE
    }
  }
  
  export function loadLink(): any{
    return (dispatch: Dispatch<LoadLinkSuccessAction | LoadLinkFailureAction>) => {
        return axios('https://www.reddit.com/r/programming.json').then((res) => {
        let threads = res.data;
        let links = threads.data.children.map((t:any) => ({
            title: t.data.title,
            url: t.data.url
        }));
        dispatch(loadLinkSuccess(links));
        })
        .catch((err) => {
            console.log('Failed', err);
            dispatch(loadLinkFailure());
        });
    }
  }




 