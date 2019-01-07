import * as React from 'react';
import {Dispatch} from 'redux'
import {connect} from "react-redux";
import RootState from '../rootState'
import {Actions,addLink,clearLink,removeLink} from '../actions/actions';
import {loadLink} from '../actions/actions';


interface LinkListProps {
    links: {
        title: string,
        url: string
    }[],
    addLink: () => void,
    clearLink: () => void,
    reload: () => void,
    removeLink:(index:number) => void
}



const PureLinkList = (props: LinkListProps) => {
    return (
        <div>
            <button onClick={props.reload}>Reload</button>
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



const mapDispatchToProps = (dispatch: Dispatch<Actions>) => {
    return {
        addLink: ()=> dispatch(addLink('Accelerate','http://www.acceleratedhk.com')),

        clearLink: () => dispatch(clearLink()),

        removeLink: (index: number) => dispatch(removeLink(index)),
        
        reload: () => dispatch(loadLink())
    }
}

const LinkList = connect(mapStateToProps, mapDispatchToProps)(PureLinkList)

export default LinkList;