import React, {Component} from 'react';
import locals from '../data/locals.json';
import escapeRegExp from 'escape-string-regexp';

class SearchPanel extends React.Component {
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
    


    render(){
        return (
            <form className= "searchPanel">
                <input className="input-field" type="text" value={this.state.value} onChange={this.udpateQuery}  placeholder="Search for café" 
                />
                <button
                    className="list-button"
                    //onClick={}
                >List
                </button>
            </form>
        );
    }
}

export default SearchPanel