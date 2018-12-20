import React, {Component} from 'react';

interface ILinkListProps {
    links: Array <{
        name: string;
        url: string
    }>
}

export default class LinkList extends Component
