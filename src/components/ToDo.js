import React, { Component } from 'react';

class ToDo extends Component {
render() {
    return (
        <li>
        <button type="button" onClick={ this.props.deleteToDo} > delete </button>
        <input type="checkbox" checked={ this.props.isCompleted } />
        <span>{ this.props.description }</span>
      </li>   
    );
    }
}   

export default ToDo;