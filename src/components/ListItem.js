import React,{ Component} from 'react';
import './ListItem.css';
import '../data/locals.json';


class ListItem extends React.Component {
    render() {
      return <div className="listItem"> Ez itt a this.props.listOfLocals helye{this.props.listOfLocals}</div>;
    }
  }

export default ListItem