import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ListLink from './ListLink';
import AddLink from './AddLink';
import LinkFrom from './LinkForm';

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            link: [
                {name: 'google',url: 'www.google.com'},
                {name: 'yahoo',url:'www.yahoo.com'}
            ],   
            searchResult:[
                 {name: 'google',url: 'www.google.com'},
                {name: 'yahoo',url:'www.yahoo.com'}
            ]
        }
    }

    searchLink = (string) => {
        let lowerString = string.toLowerCase()
        let pattern = new RegExp(lowerString+'.*')
        let result = this.state.link.filter(item=> {
            let name = item.name.toLowerCase();
            return (name.match(pattern) !== null)
        })
        this.setState({
            searchResult: result
        })
    }

    saveLink = (item) => {
        let link = [...this.state.link,item];
        this.setState({link})
    }

    render(){
        return (
            <div>
                <SearchBar searchLink={this.searchLink}></SearchBar>
                <main>
                    <AddLink></AddLink>
                    <ListLink list={this.state.searchResult}></ListLink>
                </main>
                <LinkFrom saveLink={this.saveLink}></LinkFrom>
            </div>
        )
    }
}

export default App;

