import React,{ Component} from 'react';
//import ListItem from './ListItem';
import './ListContainer.css';
import locals from '../data/locals.json';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';


class ListContainer extends React.Component {
   
        state = {
            query:''
        };
        
    udpateQuery = (query) => {
        this.setState({query: query.trim()})
    }
 
    clearQuery = () => {
        this.setState({ query: '' })
      }

    render() {
    let showingListOfLocals ;
    let query;
    
    
        if (query) {
            const match = new RegExp(escapeRegExp(query), 'i');

           showingListOfLocals = this.locals.filter((local) => 
                match.test(local.name));
               
        }else{
            console.log("No such cafes");
            showingListOfLocals = locals;
        }
  
        
    return (
        <aside className ="listContainer" >
            <form >
                <input 
                    className="input-field" 
                    type="text" 
                    value={this.state.query} 
                    onChange={event => this.udpateQuery(event.target.value)}  
                    placeholder="Search for café..." 
                />
                <button
                    className="list-button"
                    //onClick={}
                >
                List
                </button>
                    
                <ol>
                    {showingListOfLocals.map((singleLocal)  => 
                        <li className= "li" key={singleLocal.foursquareId}>
                            {singleLocal.name}
                            
                        </li>)} 
                </ol>
            </form>
            {/*<ListItem />*/}
        </aside>
        );
    }
  }

export default ListContainer;


ListContainer.propTypes = {
    locals: PropTypes.array.isRequired,
    showingListOfLocals: PropTypes.array.isRequired
   
}