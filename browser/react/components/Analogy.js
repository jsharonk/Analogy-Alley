import React, { Component } from 'react';
import AnalogyForm from './AnalogyForm';
import AnalogyBox from '../containers/AnalogyBox';

export default class Analogy extends Component {
  _handleDelete(event) {
    event.preventDefault();
    if (confirm('are you sure?')) {
      this.props.onDelete(this.props.analogy);
    }
    this.props.onDelete(this.props.analogy);
  }
  render () {
    return (
      <div className="analogy">
        <p className="name">{this.props.name}</p>
        <p className="content">{this.props.content}</p>

        <div className="analogy-footer">
          <a href="#" className="analogy-footer-delete">
            delete analogy 
            </a>
        </div>
      </div>
    );
  }
}


