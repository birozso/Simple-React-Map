import React,{ Component} from 'react';
import './ListItem.css';
import locals from '../data/locals.json';

class ListItem extends React.Component {
    render() {
      // Listview of the eating locals
      const localListItems = locals.map((singleLocal) => <li className= "il" key={singleLocal.foursquareId}>{singleLocal.name}</li>);
    
      return (
        <div className="listItem">
          {localListItems}
        </div>)
    }
  }

export default ListItem