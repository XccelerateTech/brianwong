import React, {Component} from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            item: null
        }
    }

    handleChange = e => {
        this.setState({
            item: e.target.value
        });
        this.props.searchLink(e.target.value);
    }
    
    render(){
        return (
            <div className='searchBar'>
                <form>
                    <input type="text" name='searchBar' value={this.state.item} onChange={this.handleChange} placeholder='search'/>
                </form>
            </div>
        )
    }
}

export default SearchBar;