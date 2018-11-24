import React,{ Component} from 'react';
import ListItem from './ListItem';
import './ListContainer.css';
import locals from '../data/locals.json';

import escapeRegExp from 'escape-string-regexp';


class ListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: '',
            fullLocalsListVisible: true,
            //filtLocals: ''

        };
    

        this.udpateQuery = this.udpateQuery.bind(this);
        
    }

    udpateQuery(event) {
        this.setState({value: event.target.value});

        if (this.value ===''){
            this.setState({fullLocalsListVisible: true})
        }else{
            this.handleShowLocals(this.query);
        }
    }

    handleShowLocals = (query) => {
        if (this.query) {
            const match = new RegExp(escapeRegExp(query), 'i');

           let filteredLocals = this.locals.filter(location => 
                match.test(location.name))
            
            this.setState({
                filteredLocals: filteredLocals
            })


        }else{
            this.setState({
                filteredLocals: locals
            })
        }

    }   
    



    render() {
      return (
        <aside className ="listContainer" >
            {/*Searchbox: let the content of the ListContainer toggle between Listview and Searchresults; */}
  

                    <form className= "searchPanel">
                        <input className="input-field" type="text" value={this.state.value} onChange={this.udpateQuery}  placeholder="Search for café" 
                        />
                        <button
                            className="list-button"
                            //onClick={}
                        >List
                        </button>
                    </form>
                   <ListItem />
        </aside>
        );
    }
  }

export default ListContainer;
