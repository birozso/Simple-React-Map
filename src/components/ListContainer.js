import React,{ Component} from 'react';
import ListItem from './ListItem';
import SearchPanel from './SearchPanel';
import './ListContainer.css';

class ListContainer extends React.Component {
    render() {
      return (
        <aside className ="listContainer" >
            {/*Searchbox: let the content of the ListContainer toggle between Listview and Searchresults; */}

                
                <SearchPanel className="searchPanel"/>
                {//map through the locals and gives back a filtered list of them
                }
                <ListItem />
                
        </aside>
        );
    }
  }

export default ListContainer;
