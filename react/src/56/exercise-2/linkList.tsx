import * as React from 'react';
import {Dispatch} from 'redux'
import {connect} from "react-redux";
import RootState from './rootState'
import LinkActions from './actions';

interface LinkListProps {
    links: {
        title: string,
        url: string
    }[],
    addLink: () => void,
    clearLink: () => void,
    removeLink:(index:number) => void
}



const PureLinkList = (props: LinkListProps) => {
    return (
        <div>
            <button onClick={props.addLink}>New Link</button>
            <button onClick={props.clearLink}>Clear</button>
            {props.links.map((l,index) => (
                <div>
                    <div>{l.title}-{l.url}</div>
                    <button onClick={()=>{props.removeLink(index)}}>remove</button>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state: RootState) => {
    return {
        links: state.links
    }
}

const mapDispatchToProps = (dispatch: Dispatch<LinkActions>) => {
    return {
        addLink: ()=>{
            dispatch({
                type: 'ADD_LINK',
                link: {
                    title: 'Accelerate',
                    url: 'http://www.acceleratedhk.com'
                  }                
            })
        },

        clearLink: () => {
            dispatch({
            type: 'CLEAR_LINK'
          })
        },

        removeLink: (index: number) => {
            dispatch({
                type:'REMOVE_LINK',
                index: index
            })
        }



        
    }
}

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)

export default LinkList;