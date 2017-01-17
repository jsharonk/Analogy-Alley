import React, { Component } from 'react';
import axios from 'axios';
import AnalogyBox from '../container/AnalogyBox';
import Analogy from './Analogy';

export default class AnalogyForm extends Component {
// const AnalogyForm = (props) => {
 
//  const resetForm = props.resetForm;

  render() {
    return (
      <div class="form">
        <form id="form" className="analogy-form" onSubmit={this._handleSubmit.bind(this)}>
          <input
            className="form-control"
            type="text"
            placeholder="this thing..."
            ref={(input) => this._name = input}  
            
          />

          <textarea
            className="form-control"
            type="text"
            placeholder="...is like this thing"
            ref={(textarea) => this._content = textarea}> 
          </textarea>
        
        <div className="form-control">
        <button type="submit">
          submit
        </button>
        
        </div>
        </form>
      </div>
    );
  }

  //  _handleSubmit(e) {
  //   e.preventDefault();
  //   let name = this._name;
  //   let content = this._content;
  //   this.props.addAnalogy(name.value, content.value);
  //   document.getElementById("form").reset();

  // }


   _handleSubmit(e) {
    e.preventDefault();
    
      let name = this._name;
    let content = this._content;
    this.props.addAnalogy(name.value, content.value);

    this._name.value= ''
    this._content.value = '';

  }
}



