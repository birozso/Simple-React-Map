import React,{ Component} from 'react';
import ListItem from './ListItem';
import SearchPanel from './SearchPanel';

class ListContainer extends React.Component {
    render() {
      return (
        <aside className ="listContainer" >
            
            {/*Searchbox: let the content of the ListContainer toggle between Listview and Searchresults;

                <ul>
                <SearchPanel />
                {//map through the locals and gives back a filtered list of them
                }
                <li>
                    
                    <ListItem />
                </li>
            </ul>
            */}
        </aside>
        );
    }
  }

export default ListContainer;
