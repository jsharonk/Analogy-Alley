import React, { Component } from 'react';
import AnalogyForm from './AnalogyForm';
import AnalogyBox from '../container/AnalogyBox';

export default class Analogy extends Component {
  _handleDelete(event) {
    event.preventDefault();
    // this.props.onDelete(this.props.analogy);
    if (confirm('are you sure?')) {
      this.props.onDelete(this.props.analogy);
    }
  }
  render () {
    return (
      <div className="analogy">
        <strong className="name">{this.props.name}</strong>
        <pre className="content">{this.props.content}</pre>
          <div className="analogy-footer">
           <a href="#" className="analogy-footer-delete" onClick={this._handleDelete.bind(this)}>
             delete analogy 
           </a>
          </div>
      </div>
    );
  }
}


