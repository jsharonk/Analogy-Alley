import React, { Component } from 'react';
import AnalogyForm from './AnalogyForm';
import AnalogyBox from '../container/AnalogyBox';

export default class Analogy extends Component {
  _handleDelete(event) {
    event.preventDefault();
    if (confirm('are you sure?')) {
      this.props.onDelete(this.props.analogy);
    }
  }
  render () {
    return (
      <div className="analogy">
        <strong className="name">{this.props.name}</strong>
        <pre className="content">{this.props.content}</pre>
        <p className="id">{this.props.id}</p>
    
      </div>
    );
  }
}


