import * as React from 'react';
import * as faker from 'faker';

interface IMyProps {
    author: string;
    date:   string;
    comment:string;
    children?: JSX.Element[] | JSX.Element;
}

const CommentCard : React.SFC<IMyProps> = props => {
    return (
        <div>
            <img src={faker.image.avatar()}/>
            <h3>{props.author}</h3>
            <div>
                <p>Today at {props.date}</p>
                <p>{props.comment}</p>
            </div>
        </div>
    )
}

export default CommentCard;